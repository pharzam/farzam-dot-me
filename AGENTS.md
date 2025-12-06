AGENTS.md (repo root scope).
Dependencies: install with `npm install` (lockfile is npm).
Dev server: `npm run dev` (Next 12 + Nextra).
Build: `npm run build` (runs `node scripts/gen-rss.js` then `next build`).
Start: `npm run start` after building for production preview.
No official lint script; run `npx prettier --check .` before committing.
No automated tests yet; validate pages manually via `npm run dev`.
Single-test workflow: load the affected route in browser and verify behavior.
Use ESM imports with ordering: external packages, blank line, then relative modules, then CSS.
Keep CSS imports (`style.css`, `../styles/main.css`) at the top level before other code.
Formatting follows package Prettier config: 2 spaces, single quotes, no semicolons, arrow params wrapped.
Prefer default-exported React function components for pages/layouts.
Destructure props and avoid unused variables; keep functions small and declarative.
Favor string literals over template strings unless interpolation is required.
Handle async errors with `try/catch`; log meaningful context and rethrow in build scripts to fail CI.
RSS generator lives in `scripts/gen-rss.js`; keep feed metadata in sync with site content.
MDX files require frontmatter (`type`, `title`, `date`, `description`, `tag`); preserve ordering and spacing.
Use Markdown headings conservatively; avoid trailing spaces except `&nbsp;` used intentionally.
Stick to English copy and sentence case; update `theme.config.js` footer if referencing different year.
Static assets belong under `public/`; reference via absolute `/` URLs to leverage Next.js asset serving.