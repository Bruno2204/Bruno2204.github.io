# AGENTS.md

Repo-specific notes for OpenCode agents working in `bruno2204.github.io`.

## What this is

Single-page Astro 6 portfolio deployed to GitHub Pages. One route (`src/pages/index.astro`) composed of section components: `Hero`, `Projects`, `AboutMe`, `ContactMe`. The `Header`/`Footer` come from `src/layouts/Layout.astro`. Icons live in `src/icons/` (Astro components, not images).

## Stack (pinned facts, not guesses)

- **Astro 6** (`astro.config.mjs`), **Tailwind 4** (Vite plugin, no `tailwind.config.*` — config is in `src/styles/global.css`).
- **Flowbite** wired through the Tailwind 4 `@source` directive in `src/styles/global.css` (`@source "../../node_modules/flowbite"`). Do **not** add a `content: []` array — that is the v3 pattern.
- **EmailJS** via `@emailjs/browser`, called from an inline `<script>` in `src/components/ContactMe.astro`.
- **Onest** variable font imported in `Layout.astro` (`@fontsource-variable/onest`).
- **Node >= 22.12.0** (enforced in `package.json` `engines`).
- **TypeScript**: `tsconfig.json` extends `astro/tsconfigs/strict`.

## Commands

```bash
npm run dev          # Astro dev server
npm run build        # Production build → dist/
npm run preview      # Serve dist/
npx astro check      # Type/diagnostics check (NOT a npm script — run it explicitly)
```

There is no test, lint, or format script. Do not invent one silently — if you add it, update `package.json` and mention it.

## EmailJS env vars

Client-side EmailJS keys **must** use the `PUBLIC_` prefix (Astro client env convention) and are read via `import.meta.env.PUBLIC_*` inside the component `<script>` block.

The deploy workflow (`.github/workflows/deploy.yml`) injects them as repository **Variables** (`vars.PUBLIC_*`), not Secrets — they are public-by-design (EmailJS public key). Adding them to GitHub Secrets is wrong; just configure them under Settings → Variables → Actions.

Required names:

- `PUBLIC_EMAILJS_SERVICE_ID`
- `PUBLIC_EMAILJS_TEMPLATE_ID`
- `PUBLIC_EMAILJS_PUBLIC_KEY`

For local dev, put them in `.env` (already gitignored).

## Deploy

Single GitHub Actions workflow (`.github/workflows/deploy.yml`):

- Trigger: push to `main` or `workflow_dispatch`.
- Build uses `withastro/action@v5` (default Node 22, lockfile-detected package manager).
- Deploy uses `actions/deploy-pages@v4`.
- Required `pages: write` and `id-token: write` permissions already set.

## Conventions / gotchas

- **Dark mode is half-wired.** `Layout.astro` sets `color-scheme: light dark` and the Tailwind `dark` variant is defined (`.dark *`), but the body background is hardcoded to `#0a0a0a` in `Layout.astro`. There is no theme toggle in the UI. Treat the site as dark-only until you wire the toggle.
- **`<html lang="en">`** in `Layout.astro` is hardcoded even though all visible content is Spanish. Fix when touching the layout.
- **Tailwind 4 @apply** inside a component's `<style>` block requires `@reference "../styles/global.css";` at the top (see `Header.astro:28`). Without it, `@apply` is a no-op.
- **Inline `<script>`** in `.astro` files is processed/bundled by Astro — don't wrap it in a separate JS file unless you need to share it.
- **No tests, no linter, no formatter.** Running `npm test` / `npm run lint` will fail. Don't add them to verification commands without first adding the tooling.
- **No `.codegraph/` index.** If you need CodeGraph, run `codegraph init .` once (user decision, not yours to make on autopilot).
- **`public/` assets** referenced by `Projects.astro` (e.g. `/spotify-clone.jpeg`) must exist under `public/`. If a project image is broken, that's the cause.

## When changing something

- New section on the page → add a component under `src/components/`, import it in `src/pages/index.astro`, add a nav entry in `Header.astro` (`NAVS` array), and give the section `id="..."` matching the nav anchor.
- New icon → add an Astro component under `src/icons/`, accept and forward `class`/`...props` so size/color can be controlled from the call site (existing icons all do this).
- Touching `astro.config.mjs` → `site` is set to `https://bruno2204.github.io`; keep it unless you intend to change the deploy target.

## Don't

- Don't add `tailwind.config.js` / `content: []` — Tailwind 4 does not use it.
- Don't move EmailJS vars to GitHub Secrets.
- Don't add an `npm test` script as if one existed.
- Don't add a Co-Authored-By trailer to commits.
