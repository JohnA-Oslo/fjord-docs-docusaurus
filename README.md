# Fjord Expense API — Docusaurus

This is a port of the [Fjord Expense API documentation](https://johna-oslo.github.io/fjord-expense-api/)
from MkDocs Material to Docusaurus. Built to test and experiment with Docusaurus, and to compare and contrast with a similar MkDocs project.

**Live site:** https://JohnA-Oslo.github.io/fjord-docs-docusaurus/

## About this project

The Fjord Expense API is an incented REST API for expense management. The same content and
OpenAPI spec are used in both the MkDocs and Docusaurus versions.

## Toolchain comparison

| Feature | MkDocs Material | Docusaurus |
|---|---|---|
| Configuration | YAML | JavaScript |
| Content format | Markdown | MDX |
| Search | Built-in | Plugin required |
| API reference | swagger-ui-tag plugin | docusaurus-plugin-openapi-docs |
| Versioning | mkdocs-versioning plugin | Built-in |
| Ecosystem | Python | Node.js / React |

## Tools and workflow

- [Docusaurus](https://docusaurus.io/) — static site generator
- [docusaurus-plugin-openapi-docs](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs) — interactive API reference from OpenAPI spec
- [@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local) — offline search
- [Vale](https://vale.sh/) with Microsoft style guide — prose linting
- [Claude Code](https://claude.ai/code) with custom skills — AI-assisted documentation review
- GitHub Actions — automated deployment to GitHub Pages with Vale lint gate

## Local development
```bash
npm start
```

Starts the dev server at `localhost:3000`. Changes to `.md` files and configuration are reflected live without restarting.

```bash
npm run build
```

Regenerates the OpenAPI reference pages from the spec, then builds the production site.
Run this before pushing to verify the production build is clean.

```bash
npm run serve
```

Serves the built site locally. Useful for verifying the production build before pushing, especially for checking search which only works in the built site.

## Quality workflow

Content goes through the following before reaching production:

1. Edit content in `docs/`
2. Run `vale docs/` — style and grammar checks at suggestion level
3. Run Claude Code review using the API documentation reviewer skill
4. Run `npm run build` — regenerates API docs and verifies the production build
5. Commit and push to a feature branch
6. Open PR — CI runs Vale at error level before merge
7. Merge to main triggers deployment to GitHub Pages

## Known limitations

- Vale MDX support requires `mdx2vast`, which is not straightforward to install on Windows.
  Hand-written content uses `.md` files, so this doesn't get in the way for this project.
