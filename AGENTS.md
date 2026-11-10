## 官网域名规则（Owner 2026-11-10）

现行官网为 `https://jracademy.ai`，Admin 为 `https://admin.jracademy.ai`。新写及修订的官网、课程、文章、分享、canonical 和操作文档链接统一使用新域名，保持既有路径与参数。主业务 API 继续使用 `https://api.jiangren.com.au`；不得机械替换 API、网关、邮件、视频或静态资源服务地址。旧官网仅作为跳转来源、兼容配置或带日期的历史证据，不再作为新增前端链接的默认值。Curriculum 继续禁止抓取与索引，不进入 sitemap，不接 GA/GA4/GTM。本规则不授权修改运行配置、部署或外部平台操作。

# Repository Guidelines

## Project Structure & Module Organization
This repository is a static Astro 5 marketing site for `metatreelab.ai`. Main source code lives in `src/`. Routes are in `src/pages/`, with English as the default locale and Chinese pages under `src/pages/zh/`. Reusable UI is split across `src/components/layout/`, `src/components/home/`, `src/components/pages/`, and `src/components/ui/`. Shared content and config live in `src/data/`, `src/i18n/`, `src/config/`, and `src/content/`. Static assets such as `favicon.svg`, `robots.txt`, and `CNAME` belong in `public/`.

## Build, Test, and Development Commands
Use `pnpm` for all local work.

- `pnpm install`: install dependencies from `pnpm-lock.yaml`
- `pnpm dev`: start the Astro dev server on `http://localhost:4321`
- `pnpm build`: create the production build in `dist/`
- `pnpm preview`: serve the built site locally for verification
- `pnpm check`: run Astro and TypeScript checks

Run `pnpm check && pnpm build` before opening a PR.

## Coding Style & Naming Conventions
Follow the existing code style: TypeScript with Astro single-file components, ESM imports, and 2-space indentation. Keep route files and components in PascalCase for components (`BaseLayout.astro`, `ContactPage.astro`) and lowercase for route segments (`about.astro`, `services/index.astro`). Put shared site constants in `src/config/site.ts`, translations in `src/i18n/en.json` and `src/i18n/zh.json`, and avoid hardcoding copy in multiple places.

Use the existing path aliases from `tsconfig.json`: `~/` and `@/` both point to `src/`.

## Testing Guidelines
There is no dedicated automated test suite yet. Treat `pnpm check` as the minimum validation step and use `pnpm preview` to manually verify both `/` and `/zh/` routes, navigation, forms, and layout changes. When adding data-driven content, verify the affected pages build without schema or routing errors.

## Commit & Pull Request Guidelines
Recent history uses Conventional Commit style such as `feat: add fonts, work detail pages, real contact info`. Continue with prefixes like `feat:`, `fix:`, and `docs:`. Keep commits focused and descriptive.

PRs should include a short summary, impacted routes or files, manual verification steps, and screenshots for visible UI changes. Link the relevant issue or task when one exists.

## Configuration & Content Notes
Review `README.md`, `PRD.md`, and `design.md` before structural or visual changes. Preserve bilingual routing, `trailingSlash: 'always'`, and GitHub Pages requirements in `public/CNAME` unless the deployment strategy changes.
