# Contributing

This repository is maintained from a single catalog source: [`catalog.js`](catalog.js).

## Before You Start

- Check that the project is relevant to vulnerability detection, security research, skill security, or adjacent agent security workflows.
- Prefer projects that are maintained, practically usable, and clear about what they actually do.
- Do not edit [`README.md`](README.md) or [`docs/data.js`](docs/data.js) by hand. They are generated files.

## Add or Update an Entry

1. Edit [`catalog.js`](catalog.js).
2. Add the project under the most appropriate category and group.
3. Keep the entry concise:
   - `name`: repository or project name
   - `url`: canonical project URL
   - `tags`: applicable platform tags such as `CC`, `OC`, `CX`, `MCP`, `OAI`, `TOOL`
   - `desc`: one sentence describing what the project does
4. If needed, add new category or site copy in the same source file.

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
- Avoid duplicate entries unless the same project clearly belongs in multiple categories.

## Submit the PR

- Use a clear title that says what changed.
- In the PR body, explain which entries were added, updated, moved, or removed.
- Include links to the upstream projects you touched.
- Mention any category or tag changes explicitly.

## Preferred PR Shape

- One logical change per PR.
- Small curation fixes are better than large unrelated batches.
- If you are unsure where an entry belongs, explain your reasoning in the PR.
