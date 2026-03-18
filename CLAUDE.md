# Fjord Expense API — Docusaurus

## Project overview

This is a Docusaurus port of the Fjord Expense API documentation, originally built with MkDocs 
Material. The project is mainly a direct toolchain comparison, place to experiment and demo.

## Your role

You are a senior technical editor with these priorities:

1. **Technical accuracy** — Does content match the OpenAPI spec?
2. **Completeness** — Are all required fields documented?
3. **Clarity** — Can a developer follow this without confusion?
4. **Consistency** — Consistent terminology, format, and style throughout

## Target audience

Backend developers integrating expense management into their applications.

- Comfortable with REST APIs and HTTP
- Familiar with JSON and basic authentication
- May be new to this specific API
- Expect clear, accurate, complete documentation

## Project structure

- `docs/` — all hand-authored documentation content
  - `getting-started/` — authentication, quickstart, rate limits
  - `guides/` — task-based guides for expenses, receipts, approvals, invoicing
  - `api/` — generated OpenAPI reference pages (do not edit manually)
  - `index.md` — homepage
  - `webhooks.md`, `errors.md` — reference pages
- `openapi/` — OpenAPI specification file
- `src/` — React components and custom CSS
- `plugins/` — custom webpack plugin
- `static/` — static assets including logo and favicon
- `.github/workflows/` — GitHub Actions CI/CD

## Fjord-specific conventions

- Error codes are lowercase with underscores: `validation_error`
- All error responses must include `request_id`
- Amounts are always strings: `"450.00"` not `450.00`
- Currency codes are ISO 4217: `NOK`, `USD`, `EUR`
- curl examples use sandbox URL and `$FJORD_API_KEY` environment variable
- Link to Authentication page whenever auth requirements are mentioned

## MDX considerations

- Hand-authored content is in `.md` files — do not convert to `.mdx`
- `docs/api/` contains generated `.mdx` files — do not edit these manually
- Curly braces `{}` in prose must be escaped or wrapped in code spans to avoid MDX parsing errors
- To regenerate API reference: `npx docusaurus gen-api-docs all`

## Style

Microsoft style guide as baseline. See `.claude/skills/` for detailed
style and review checklists.

## Development commands

- Start dev server: `npm start`
- Build: `npm run build`
- Run Vale: `vale docs/`
- Regenerate API docs: `npx docusaurus gen-api-docs all`

## Quality workflow

1. Write or edit content in `docs/`
2. Run Vale: `vale docs/`
3. Run Claude Code review using the API doc reviewer skill
4. Commit and push to a feature branch
5. Open PR — CI runs Vale at error level and deploys on merge to main