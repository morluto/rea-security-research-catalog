# Contributing

This repository is maintained from a single catalog source: [`catalog.js`](catalog.js).

## Before You Start

- Check that the project is relevant to vulnerability detection, security research, skill security, or adjacent agent security workflows.
- Prefer projects that are maintained, practically usable, and clear about what they actually do.
- Do not edit [`README.md`](README.md) or [`docs/data.js`](docs/data.js) by hand. They are generated files.

## Add or Update an Entry

1. Edit [`catalog.js`](catalog.js).
2. Add the project to the `entries` array.
3. Each entry must follow this format:

```js
{
  name: "project-name",                       // Repository or project name
  url: "https://github.com/org/project",       // Canonical project URL
  tags: ["CC", "CX"],                          // Platform tags (see table below)
  target: ["source", "web"],                   // What the skill analyzes
  technique: ["static-analysis", "compliance"],// What method it uses
  form: ["workflow"],                          // How it is packaged
  desc: "One sentence describing what the project does."
}
```

**Field rules:**

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `name` | string | yes | Short, recognizable project name |
| `url` | string | yes | Link to the upstream repository |
| `tags` | string[] | yes | Platform tags; use `[]` if none apply |
| `target` | string[] | yes | At least one value from the Target table |
| `technique` | string[] | yes | At least one value from the Technique table; use `[]` only for catalogs and paper collections |
| `form` | string[] | yes | Exactly one value in most cases |
| `desc` | string | yes | One factual sentence, no trailing period preferred |

**Complete example** — adding a fictional MCP-based Kubernetes scanner:

```js
{
  name: "k8s-audit-mcp",
  url: "https://github.com/example/k8s-audit-mcp",
  tags: ["MCP"],
  target: ["container"],
  technique: ["static-analysis", "compliance"],
  form: ["mcp-server"],
  desc: "MCP server that audits Kubernetes manifests against CIS benchmarks and PSS baselines."
}
```

4. If needed, add new dimension tag values in the `tagDimensions` section of `catalog.js`.

### Dimension Reference

**Target** — what does the skill analyze or operate on?

| Tag | Meaning |
| --- | --- |
| `source` | Language-agnostic source code analysis |
| `web` | Web applications, APIs, HTTP |
| `binary` | Binaries, ELF, PE, firmware |
| `mobile` | Android APK, iOS applications |
| `smart-contract` | Solidity, EVM, blockchain |
| `container` | Docker, Kubernetes, cloud config |
| `supply-chain` | Dependencies, packages, SCA |
| `agent` | AI skills, MCP servers, prompts |
| `general` | Cross-domain or not target-specific |

**Technique** — what security analysis method does it employ?

| Tag | Meaning |
| --- | --- |
| `static-analysis` | All forms of analysis without execution (SAST, code review, formal verification) |
| `dynamic-testing` | Runtime / interactive testing (DAST, pentest) |
| `fuzzing` | Automated input generation for bug discovery |
| `reverse-engineering` | Binary analysis, decompilation, artifact extraction |
| `threat-modeling` | Architecture-level threat identification (STRIDE, etc.) |
| `compliance` | Standard / specification conformance checking |
| `recon` | Reconnaissance, OSINT, information gathering |
| `exploit-dev` | Exploit development, PoC creation |

**Form** — how is the skill packaged or delivered?

| Tag | Meaning |
| --- | --- |
| `prompt-skill` | Pure knowledge / instruction (SKILL.md) |
| `tool-wrapper` | Wraps external CLI tools |
| `workflow` | Multi-step orchestrated pipeline |
| `agent-framework` | Autonomous agent system |
| `knowledge-base` | Reference material, checklists, paper collection |
| `catalog` | Curated index or list |
| `mcp-server` | MCP tool server |
| `suite` | Comprehensive multi-capability bundle |

## Regenerate Derived Files

Run:

```bash
npm run generate
```

This rebuilds:

- [`README.md`](README.md)
- [`docs/data.js`](docs/data.js)

To verify generated files are current without rewriting them, run:

```bash
npm run check
```

GitHub Actions also enforces this automatically:

- Pull requests run `npm run check`.
- Pushes to `main` run `npm run generate` and commit updated generated files when needed.

## Review Your Changes

- Make sure the generated README section looks correct.
- Make sure the static site still renders and filters correctly.
- Keep descriptions factual and short.
- Make sure each entry has accurate dimension tags across all three dimensions.

## Submit the PR

- Use a clear title that says what changed.
- In the PR body, explain which entries were added, updated, moved, or removed.
- Include links to the upstream projects you touched.
- Mention any dimension tag or platform tag changes explicitly.

## Preferred PR Shape

- One logical change per PR.
- Small curation fixes are better than large unrelated batches.
- If you are unsure which dimension tags to apply, explain your reasoning in the PR.
