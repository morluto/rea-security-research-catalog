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

function validateCatalog(data) {
  assert(data.repo && data.repo.name, "repo.name is required.");
  assert(Array.isArray(data.tags), "tags must be an array.");
  assert(Array.isArray(data.categories), "categories must be an array.");

  const tagMap = buildTagMap(data.tags);
  const categoryIds = new Set();

  for (const category of data.categories) {
    assert(category.id, "Each category must have an id.");
    assert(category.title, `Category ${category.id} is missing title.`);
    assert(!categoryIds.has(category.id), `Duplicate category id: ${category.id}`);
    categoryIds.add(category.id);
    assert(Array.isArray(category.groups), `Category ${category.id} groups must be an array.`);

    for (const group of category.groups) {
      assert(group.title, `Category ${category.id} has a group without title.`);
      assert(Array.isArray(group.items), `Group ${group.title} items must be an array.`);

      for (const item of group.items) {
        assert(item.name, `An item in ${group.title} is missing name.`);
        assert(item.url, `Item ${item.name} is missing url.`);
        assert(Array.isArray(item.tags), `Item ${item.name} tags must be an array.`);
        assert(item.desc, `Item ${item.name} is missing desc.`);

        for (const tagId of item.tags) {
          assert(tagMap.has(tagId), `Item ${item.name} references unknown tag ${tagId}.`);
        }
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

function buildReadme(data, tagMap) {
  const entryCount = data.categories
    .flatMap((category) => category.groups)
    .flatMap((group) => group.items)
    .length;
  const categoryCount = data.categories.length;
  const navigation = data.categories
    .map((category) => `[${category.title}](#${category.id})`)
    .join(" •\n");
  const workflowBadge = `${data.repo.githubUrl}/actions/workflows/catalog-sync.yml/badge.svg`;
  const pagesBadge = "https://img.shields.io/badge/GitHub%20Pages-live%20catalog-0ea5e9?style=flat-square";

  const tagRows = data.tags
    .map(
      (tag) =>
        `| \`${tag.readmeLabel || tag.label}\` | ${tag.description} |`
    )
    .join("\n");

  const categorySections = data.categories
    .map((category) => {
      const groups = category.groups
        .map((group) => {
          const items = group.items
            .map((item) => {
              const tagText = formatReadmeTags(item.tags, tagMap);
              return `- **[${item.name}](${item.url})** ${tagText}- ${item.desc}`;
            })
            .join("\n");

          return `### ${group.title}\n\n${items}`;
        })
        .join("\n\n");

      return [
        `<a id="${category.id}"></a>`,
        `## ${category.emoji} ${category.title}`,
        "",
        category.description,
        "",
        groups
      ].join("\n");
    })
    .join("\n\n---\n\n");

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
    `  <img src="https://img.shields.io/badge/categories-${categoryCount}-238636?style=flat-square" alt="${categoryCount} categories">`,
    `  <a href="${data.repo.githubPagesUrl}"><img src="${pagesBadge}" alt="GitHub Pages"></a>`,
    `  <a href="${data.repo.githubUrl}/actions/workflows/catalog-sync.yml"><img src="${workflowBadge}" alt="Catalog Sync"></a>`,
    "</p>",
    "",
    `<p align="center">${data.repo.description}<br>${data.repo.audience}</p>`,
    "",
    `<p align="center"><a href="${data.repo.githubPagesUrl}"><strong>${data.readme.liveCatalogLabel}</strong></a></p>`,
    "",
    navigation,
    "",
    "## Overview",
    "",
    ...data.readme.overview.map((line) => `- ${line}`),
    "",
    "## Platform Tags",
    "",
    "| Tag | Meaning |",
    "| --- | --- |",
    tagRows,
    "",
    `> ${data.readme.platformNote}`,
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
    categorySections,
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
