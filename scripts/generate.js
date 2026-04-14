const fs = require("fs");
const path = require("path");

const catalog = require("../catalog.js");

const rootDir = path.resolve(__dirname, "..");
const readmePath = path.join(rootDir, "README.md");
const docsDataPath = path.join(rootDir, "docs", "data.js");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function buildTagMap(tags) {
  const map = new Map();

  for (const tag of tags) {
    assert(tag.id, "Each tag must have an id.");
    assert(!map.has(tag.id), `Duplicate tag id: ${tag.id}`);
    map.set(tag.id, tag);
  }

  return map;
}

function buildDimensionMap(dimensions) {
  const map = new Map();

  for (const dim of dimensions) {
    assert(dim.id, "Each dimension must have an id.");
    assert(!map.has(dim.id), `Duplicate dimension id: ${dim.id}`);

    const valueIds = new Set();

    for (const val of dim.values) {
      assert(val.id, `Dimension ${dim.id} has a value without id.`);
      assert(!valueIds.has(val.id), `Duplicate value id ${val.id} in dimension ${dim.id}.`);
      valueIds.add(val.id);
    }

    map.set(dim.id, { ...dim, valueIds });
  }

  return map;
}

function validateCatalog(data) {
  assert(data.repo && data.repo.name, "repo.name is required.");
  assert(Array.isArray(data.tags), "tags must be an array.");
  assert(Array.isArray(data.tagDimensions), "tagDimensions must be an array.");
  assert(Array.isArray(data.entries), "entries must be an array.");

  const tagMap = buildTagMap(data.tags);
  const dimMap = buildDimensionMap(data.tagDimensions);

  for (const entry of data.entries) {
    assert(entry.name, "An entry is missing name.");
    assert(entry.url, `Entry ${entry.name} is missing url.`);
    assert(Array.isArray(entry.tags), `Entry ${entry.name} tags must be an array.`);
    assert(entry.desc, `Entry ${entry.name} is missing desc.`);

    for (const tagId of entry.tags) {
      assert(tagMap.has(tagId), `Entry ${entry.name} references unknown platform tag ${tagId}.`);
    }

    for (const [dimId, dimDef] of dimMap) {
      const values = entry[dimId];
      assert(Array.isArray(values), `Entry ${entry.name} is missing dimension ${dimId} (must be an array).`);

      for (const val of values) {
        assert(dimDef.valueIds.has(val), `Entry ${entry.name} has unknown ${dimId} value: ${val}`);
      }
    }
  }

  return tagMap;
}

function formatReadmeTags(tags, tagMap) {
  if (tags.length === 0) {
    return "";
  }

  return `${tags.map((tagId) => `\`${tagMap.get(tagId).readmeLabel || tagMap.get(tagId).label}\``).join(" ")} `;
}

function formatDimensionTags(entry, dimensions) {
  const parts = [];

  for (const dim of dimensions) {
    const values = entry[dim.id];

    if (values && values.length > 0) {
      const labels = values.map((v) => {
        const found = dim.values.find((dv) => dv.id === v);
        return found ? found.label : v;
      });
      parts.push(`\`${dim.emoji}${labels.join("·")}\``);
    }
  }

  return parts.length > 0 ? `${parts.join(" ")} ` : "";
}

function dimValueLabel(dim, valueId) {
  const found = dim.values.find((v) => v.id === valueId);
  return found ? found.label : valueId;
}

function buildReadme(data, tagMap) {
  const entryCount = data.entries.length;

  const targetDim = data.tagDimensions.find((d) => d.id === "target");
  const techniqueDim = data.tagDimensions.find((d) => d.id === "technique");
  const formDim = data.tagDimensions.find((d) => d.id === "form");

  const dimTables = data.tagDimensions.map((dim) => {
    const rows = dim.values
      .map((v) => `| \`${v.id}\` | ${v.description} |`)
      .join("\n");

    return [
      `### ${dim.emoji} ${dim.title}`,
      "",
      `${dim.description}`,
      "",
      "| Tag | Meaning |",
      "| --- | --- |",
      rows
    ].join("\n");
  });

  // ── Overview table ─────────────────────────────────────────────
  const overviewHeader = [
    "| # | Name | Platform | Target | Technique | Form |",
    "| --- | --- | --- | --- | --- | --- |"
  ];

  const overviewRows = data.entries.map((entry, idx) => {
    const platform = entry.tags.length > 0
      ? entry.tags.map((t) => `\`${tagMap.get(t).readmeLabel || tagMap.get(t).label}\``).join(" ")
      : "";
    const target = entry.target.map((v) => dimValueLabel(targetDim, v)).join(", ");
    const technique = entry.technique.length > 0
      ? entry.technique.map((v) => dimValueLabel(techniqueDim, v)).join(", ")
      : "—";
    const form = entry.form.map((v) => dimValueLabel(formDim, v)).join(", ");
    const anchor = `entry-${entry.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
    return `| ${idx + 1} | [${entry.name}](#${anchor}) | ${platform} | ${target} | ${technique} | ${form} |`;
  });

  // ── Detail sections ────────────────────────────────────────────
  const detailSections = data.entries.map((entry) => {
    const anchor = `entry-${entry.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
    const platformText = formatReadmeTags(entry.tags, tagMap);
    const dimText = formatDimensionTags(entry, data.tagDimensions);
    return [
      `<a id="${anchor}"></a>`,
      `### ${entry.name}`,
      "",
      `${platformText}${dimText}${entry.url}`,
      "",
      entry.desc
    ].join("\n");
  });

  // ── Navigation by target ───────────────────────────────────────
  const navigation = targetDim.values
    .filter((v) => data.entries.some((e) => e.target.includes(v.id)))
    .map((v) => `[${v.label}](#target-${v.id})`)
    .join(" • ");

  const workflowBadge = `${data.repo.githubUrl}/actions/workflows/catalog-sync.yml/badge.svg`;
  const pagesBadge = "https://img.shields.io/badge/GitHub%20Pages-live%20catalog-0ea5e9?style=flat-square";

  const platformRows = data.tags
    .map(
      (tag) =>
        `| \`${tag.readmeLabel || tag.label}\` | ${tag.description} |`
    )
    .join("\n");

  const dimCount = data.tagDimensions.reduce((sum, d) => sum + d.values.length, 0);

  return [
    "<!-- Generated from catalog.js by scripts/generate.js. Do not edit README.md directly. -->",
    "",
    '<p align="center">',
    `  <img src="https://img.shields.io/badge/${encodeURIComponent(data.readme.heroEyebrow)}-0f172a?style=for-the-badge&labelColor=111827&color=0f172a" alt="${data.readme.heroEyebrow}">`,
    "</p>",
    "",
    `<h1 align="center">${data.readme.heroTitle}</h1>`,
    "",
    '<p align="center">',
    `  <a href="https://github.com/sindresorhus/awesome"><img src="https://awesome.re/badge-flat2.svg" alt="Awesome"></a>`,
    `  <img src="https://img.shields.io/badge/entries-${entryCount}-2f81f7?style=flat-square" alt="${entryCount} entries">`,
    `  <img src="https://img.shields.io/badge/dimension%20tags-${dimCount}-238636?style=flat-square" alt="${dimCount} dimension tags">`,
    `  <a href="${data.repo.githubPagesUrl}"><img src="${pagesBadge}" alt="GitHub Pages"></a>`,
    `  <a href="${data.repo.githubUrl}/actions/workflows/catalog-sync.yml"><img src="${workflowBadge}" alt="Catalog Sync"></a>`,
    "</p>",
    "",
    `<p align="center">${data.repo.description}<br>${data.repo.audience}</p>`,
    "",
    `<p align="center"><a href="${data.repo.githubPagesUrl}"><strong>${data.readme.liveCatalogLabel}</strong></a></p>`,
    "",
    "## Overview",
    "",
    ...data.readme.overview.map((line) => `- ${line}`),
    "",
    "## Catalog at a Glance",
    "",
    ...overviewHeader,
    ...overviewRows,
    "",
    "## Platform Tags",
    "",
    "| Tag | Meaning |",
    "| --- | --- |",
    platformRows,
    "",
    `> ${data.readme.platformNote}`,
    "",
    "## Dimension Tags",
    "",
    "Every entry is tagged along three orthogonal dimensions:",
    "",
    dimTables.join("\n\n"),
    "",
    "## Repository Layout",
    "",
    "- [`catalog.js`](catalog.js): single source of truth for the catalog content and site copy.",
    "- [`CONTRIBUTING.md`](CONTRIBUTING.md): contribution workflow for editing the catalog and opening PRs.",
    "- [`scripts/generate.js`](scripts/generate.js): generates `README.md` and `docs/data.js` from `catalog.js`.",
    "- [`docs/index.html`](docs/index.html): searchable static catalog UI.",
    "- [`docs/data.js`](docs/data.js): generated browser data bundle consumed by the static site.",
    "- [`docs/app.js`](docs/app.js): client-side rendering, search, filtering, and data-driven page copy.",
    "",
    "Run `npm run generate` after editing the source catalog. Use `npm run check` to verify generated files are up to date.",
    "",
    "## Entries",
    "",
    detailSections.join("\n\n---\n\n"),
    "",
    "## Contributing",
    "",
    data.readme.contributingIntro,
    "",
    ...data.readme.contributingItems.map((line) => `- ${line}`),
    "",
    data.readme.contributingNote,
    "",
    "See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full PR workflow.",
    ""
  ].join("\n");
}

function buildDocsData(data) {
  return [
    "// Generated from catalog.js by scripts/generate.js. Do not edit directly.",
    `window.CATALOG_DATA = ${JSON.stringify(data, null, 2)};`,
    ""
  ].join("\n");
}

function writeFile(targetPath, contents, checkOnly) {
  if (checkOnly) {
    const current = fs.existsSync(targetPath) ? fs.readFileSync(targetPath, "utf8") : "";

    if (current !== contents) {
      throw new Error(`${path.relative(rootDir, targetPath)} is out of date. Run npm run generate.`);
    }

    return;
  }

  fs.writeFileSync(targetPath, contents, "utf8");
}

function main() {
  const checkOnly = process.argv.includes("--check");
  const tagMap = validateCatalog(catalog);

  writeFile(readmePath, buildReadme(catalog, tagMap), checkOnly);
  writeFile(docsDataPath, buildDocsData(catalog), checkOnly);
}

main();
