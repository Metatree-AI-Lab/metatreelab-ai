# Metatree Lab — metatreelab.ai

> A digital studio by JR Academy. AI consulting & property marketing.

**Live**: [metatreelab.ai](https://metatreelab.ai)
**Parent**: [JR Academy](https://jiangren.com.au)

## Documents

- [`design.md`](./design.md) — Visual design system, brand tokens, component spec
- [`PRD.md`](./PRD.md) — Product requirements, tech stack, hosting, integrations

## Stack

- **Framework**: Astro 5 (static SSG, zero-JS by default)
- **Styling**: Tailwind CSS v4 (CSS-first config)
- **i18n**: Astro native i18n routing (EN default, `/zh` prefix for Chinese)
- **Hosting**: GitHub Pages with custom domain `metatreelab.ai`
- **DNS + Analytics**: Cloudflare
- **Forms**: Web3Forms (free tier)
- **Booking**: Cal.com embed
- **Total monthly cost**: $0 (only domain registration ~$10/year)

## Local development

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:4321)
pnpm dev

# Build production site to ./dist
pnpm build

# Preview production build locally
pnpm preview

# Type-check
pnpm check
```

## Project structure

```
metatreelab-ai/
├── .github/workflows/     # GitHub Actions (deploy.yml)
├── public/                # Static assets (CNAME, favicon, robots.txt)
├── src/
│   ├── components/
│   │   ├── layout/        # Nav, Footer, GridLines
│   │   ├── home/          # Hero, ServiceSplit, etc.
│   │   ├── services/
│   │   ├── work/
│   │   ├── about/
│   │   └── ui/            # Button, Card, SectionLabel
│   ├── config/site.ts     # Brand info, contact, locale config
│   ├── content/           # Content collections (services, projects, testimonials)
│   ├── content.config.ts  # Astro 5 collection schemas
│   ├── i18n/              # en.json, zh.json translation dictionaries
│   ├── layouts/           # BaseLayout (html/head/body wrapper)
│   ├── pages/             # Routes (/ and /zh/)
│   └── styles/global.css  # Design tokens + Tailwind v4 @theme
├── astro.config.mjs
├── design.md              # Visual design spec
├── PRD.md                 # Product requirements
└── package.json
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` which builds the site with Astro and publishes to GitHub Pages. The custom domain `metatreelab.ai` is configured via `public/CNAME` + Cloudflare DNS A records pointing to GitHub Pages IPs.

### One-time GitHub Pages setup

1. Repo **Settings → Pages → Source**: `GitHub Actions`
2. After first successful deploy, enable **Enforce HTTPS**
3. In Cloudflare DNS, add A records for `metatreelab.ai`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Add CNAME `www → jr-academy-ai.github.io`

## License

Proprietary — © JR Academy
