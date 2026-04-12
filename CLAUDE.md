# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Metatree Lab (metatreelab.ai) — marketing website for a digital studio under JR Academy (匠人学院). Three service lines: AI Build, AI Adopt, Property Marketing. Static frontend hosted on GitHub Pages.

## Commands

```bash
pnpm dev        # Dev server at http://localhost:4321
pnpm build      # Static build to ./dist (must pass before push)
pnpm preview    # Preview production build locally
pnpm check      # Astro type checking
```

Pushing to `main` triggers `.github/workflows/deploy.yml` → GitHub Pages deploy.

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

Services and projects are **TypeScript data files**, not markdown content collections:
- `src/data/services.ts` — 15 services across 3 tracks (build/adopt/property), typed with `ServiceEntry`
- `src/data/projects.ts` — 8 portfolio projects, typed with `ProjectEntry`
- Dynamic routes (`/work/[slug].astro`) use `getStaticPaths()` from these data files

### Design system

All design tokens are CSS custom properties in `src/styles/global.css`:
- Colors: pure black `#000` base, jade/cyan brand (`#00E5A0` → `#00B4D8`)
- Tailwind v4 `@theme` block exposes tokens as utility classes
- Key utility classes: `.section-label`, `.container-x`, `.card-glass`, `.btn-primary`, `.btn-ghost`
- Full visual spec in `design.md`

### Contact form

The contact form POSTs directly to JR Academy's existing API (`POST https://api.jiangren.com.au/business-inquiry`) via client-side fetch. No third-party form service. CORS for `metatreelab.ai` is configured in `jr-academy/src/config/cors.ts` (separate repo).

### Key files

- `src/config/site.ts` — Single source of truth for brand, contact, offices, social links, locale helpers
- `src/layouts/BaseLayout.astro` — Root HTML wrapper with hreflang, OG meta, font loading, GridLines + Nav + Footer
- `src/components/home/NeuralNetwork.astro` — Programmatically generated 4-6-6-4 fully-connected neural network SVG (84 connections)
- `design.md` — Visual design spec and brand guidelines
- `PRD.md` — Product requirements document

### Adding a new page

1. Create component in `src/components/pages/NewPage.astro` with `locale: Locale` prop
2. Create `src/pages/newpage.astro` → `<NewPage locale="en" />`
3. Create `src/pages/zh/newpage.astro` → `<NewPage locale="zh" />`
4. Add nav link in `src/i18n/en.json` + `zh.json` and `src/components/layout/Nav.astro`

### Adding a new project to the portfolio

Add an entry to `src/data/projects.ts`. It automatically appears in `/work/` grid and generates a `/work/[slug]/` detail page via `getStaticPaths()`.
