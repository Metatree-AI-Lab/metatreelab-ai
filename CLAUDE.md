# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Metatree Lab (metatreelab.ai) — marketing website for a digital studio under JR Academy (匠人学院). Three service lines: AI Build, AI Adopt, Property Marketing. Static frontend hosted on GitHub Pages.

## Commands

```bash
pnpm dev        # Dev server at http://localhost:4321
pnpm build      # Static build to ./dist (must pass before push)
pnpm preview    # Preview production build locally
pnpm check      # Astro + TS type checking
pnpm render:og  # Rasterize public/og.svg → public/og.png (re-run after editing og.svg; PNG is committed)
```

Run `pnpm check && pnpm build` before opening a PR. Pushing to `main` triggers `.github/workflows/deploy.yml` → GitHub Pages deploy.

TypeScript path aliases: `~/*` and `@/*` both resolve to `src/*` (from `tsconfig.json`).

## Architecture

**Astro 5 static SSG** — zero-JS by default, Tailwind v4 CSS-first, no backend.

### Bilingual routing (EN + ZH)

English is default (no prefix), Chinese uses `/zh/` prefix. Astro native i18n, configured in `astro.config.mjs`.

Every page exists as a **thin wrapper** that imports a shared page component and passes `locale`:
- `src/pages/about.astro` → `<AboutPage locale="en" />`
- `src/pages/zh/about.astro` → `<AboutPage locale="zh" />`

All page JSX lives in `src/components/pages/*.astro` — never duplicate layout logic across locale wrappers.

### Translation

- **UI strings**: `src/i18n/en.json` + `zh.json`, accessed via `useTranslations(locale)` from `src/i18n/index.ts`
- **Structured data** (services, projects): Bilingual fields inline in `src/data/services.ts` and `src/data/projects.ts` as `{ en: string; zh: string }` objects
- **Content collections**: Only testimonials use Astro content collections (`src/content/testimonials/*.json`)
- **Rule**: Brand names, section labels (`/ 01 — SERVICES`), and tech terms stay in English even on ZH pages

### Data flow

Structured content lives in `src/data/*.ts` as TypeScript with bilingual `{ en, zh }` fields — not markdown content collections (only testimonials use collections, schema in `src/content.config.ts`):

- `src/data/services.ts` — service catalog, typed with `ServiceEntry`, partitioned across **4 tracks**: `build` / `adopt` / `digital-employee` / `property`. When adding a service, place it under the matching track and confirm its slug is reachable from the right services page (`/services/ai`, `/services/digital-employee`, `/services/property`).
- `src/data/projects.ts` — portfolio entries, typed with `ProjectEntry`. Dynamic route `/work/[slug].astro` builds detail pages via `getStaticPaths()` from this file.
- `src/data/consultants.ts`, `team.ts`, `pricing.ts`, `deck.ts` — back the consultants page, about/team section, pricing comparisons, and the `/deck` pitch deck respectively.

Two non-route data inputs live at the repo root in `data/` (CSV + PRD for the consultants seed). The `scripts/fetch-consultant-avatars.mjs` helper populates avatars from there.

### Design system

All design tokens are CSS custom properties in `src/styles/global.css`:
- Colors: pure black `#000` base, jade/cyan brand (`#00E5A0` → `#00B4D8`)
- Tailwind v4 `@theme` block exposes tokens as utility classes
- Key utility classes: `.section-label`, `.container-x`, `.card-glass`, `.btn-primary`, `.btn-ghost`
- Full visual spec in `design.md`

### Contact form

`ContactPage.astro` POSTs directly to JR Academy's existing API (`POST https://api.jiangren.com.au/business-inquiry`) via client-side fetch — no third-party form service. The endpoint is hard-coded in the component; `apiUrl` in `src/config/site.ts` mirrors it. CORS for `metatreelab.ai` is configured in `jr-academy/src/config/cors.ts` (separate repo) — if the form silently fails in production, suspect CORS first.

### Routing notes

- `trailingSlash: 'always'` (set in `astro.config.mjs`) — always link with a trailing slash internally (`/work/`, not `/work`).
- Each route in `src/pages/` and its `src/pages/zh/` counterpart must stay in lockstep; both delegate to the same `src/components/pages/*Page.astro` with a `locale` prop.

### Key files

- `src/config/site.ts` — Single source of truth for brand, contact, offices, social links, locale helpers
- `src/layouts/BaseLayout.astro` — Root HTML wrapper with hreflang, OG meta, font loading, GridLines + Nav + Footer
- `design.md` — Visual design spec and brand guidelines
- `PRD.md` — Product requirements document
- `AGENTS.md` — Repository conventions (commit style, code style); aligned with this file

### Adding a new page

1. Create component in `src/components/pages/NewPage.astro` with `locale: Locale` prop
2. Create `src/pages/newpage.astro` → `<NewPage locale="en" />`
3. Create `src/pages/zh/newpage.astro` → `<NewPage locale="zh" />`
4. Add nav link in `src/i18n/en.json` + `zh.json` and `src/components/layout/Nav.astro`

### Adding a new project to the portfolio

Add an entry to `src/data/projects.ts`. It automatically appears in `/work/` grid and generates a `/work/[slug]/` detail page via `getStaticPaths()`.
