# Metatree Lab 官网 — Product Requirements Document

> **文档性质**：产品 + 技术 PRD，与 `design.md` 配套使用。
>
> - `design.md` — 视觉设计规范（brand、tokens、components、page structure）
> - `PRD.md`（本文档）— 产品目标、技术选型、hosting、集成、feature 优先级、CI/CD
>
> **版本**：v1.0 · 2026-04-11
> **负责人**：Metatree Lab（匠人学院旗下）

---

## 0. TL;DR

建一个纯前端静态官网，部署在 GitHub Pages，**零后端 + 零月付成本**。双语（EN + ZH），承载三条业务线（AI Build / AI Adopt / Property Marketing）。技术栈：**Astro 5 + Tailwind v4 + Motion + Web3Forms + Cloudflare Web Analytics + Cal.com embed**。

### 预期总运营成本

| 项目 | 服务 | 年费 |
| --- | --- | --- |
| **Hosting** | GitHub Pages | $0 |
| **DNS + CDN + HTTPS** | Cloudflare（免费档）| $0 |
| **Analytics** | Cloudflare Web Analytics | $0 |
| **Contact Form** | Web3Forms 免费档（250 次/月）| $0 |
| **Booking** | Cal.com 免费档 | $0 |
| **Email Routing** | Cloudflare Email Routing（转发到个人 Gmail）| $0 |
| **Error Tracking**（可选）| Sentry 免费档（5k events/月）| $0 |
| **Spam Protection** | Cloudflare Turnstile | $0 |
| **Uptime 监控**（可选）| UptimeRobot 免费档 | $0 |
| **域名注册** | Cloudflare Registrar（at-cost 定价）| **~$10/年** |
| **合计** | | **≈ $10/年** |

**唯一不可避免的开销是域名** — 域名商的 at-cost 价格，`.com` 大约 $10/年。**其他所有东西都是免费的**。

---

## 1. Product Overview

### 1.1 我们在建什么
Metatree Lab 的官方营销网站，作为对外的门面 + 获客入口。

### 1.2 服务的是谁（按业务线）
| 业务线 | 主要访客 | 主要语言 |
| --- | --- | --- |
| AI Systems · Build | 国际技术决策人（CTO / VP Eng / Head of AI） | English |
| AI Systems · Adopt | 澳洲中小企业业务决策人、华人企业 IT 负责人 | English / 中文 |
| Property Marketing | 澳洲房地产开发商、建筑公司、buyer's agent | English / 中文 |

### 1.3 产品目标

**主要目标（MVP 必须达成）**
1. **建立品牌可信度** — 访客 30 秒内理解 "这是谁、做什么、为什么信得过"
2. **产生合格 lead** — 每月至少 5 个有效 lead（Book a Call 或表单提交）
3. **展示能力证据** — Work 页有 ≥ 6 个 reference case（初期靠母公司产品 + Forma Property）
4. **双语访问** — EN 和 ZH 都能完整访问所有核心页面
5. **零后端运维** — 部署后无需维护服务器、数据库、队列

**次要目标（P1 之后）**
6. SEO 自然流量（目标关键词：AI consulting Sydney, AI agent development, OpenClaw consultant, Claude Code enterprise, property landing page Sydney）
7. 内容营销入口（Insights / Blog 页）
8. 课程/产品交叉导流到母公司 JR Academy

### 1.4 成功指标（首 90 天）
| 指标 | 目标 |
| --- | --- |
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | 100 |
| LCP | < 1.2s |
| CLS | < 0.05 |
| Total JS shipped (home page) | < 80 kB |
| 月度合格 lead | ≥ 5 |
| 跳出率（Plausible） | < 60% |

---

## 2. Constraints & Non-Goals

### 2.1 硬约束（不可妥协）

- **Frontend-only**：无任何后端部署、无数据库、无长期运行进程
- **GitHub Pages hosting**：静态文件、免费、CI 从 GitHub Actions 触发
- **双语支持**：EN 和 ZH 都必须覆盖所有核心页面
- **自定义域名**：必须支持 `metatreelab.ai`（或类似），不用 `*.github.io`
- **性能**：Lighthouse 全项 ≥ 95
- **品牌一致性**：严格遵守 `design.md` 定义的视觉系统

### 2.2 软约束（可权衡）

- 希望团队熟悉的技术栈（JR Academy 是 Next.js 生态 — 如果 Astro 无法满足，退回 Next.js 静态导出）
- 希望能复用 JR Academy 已有的字体/图标/设计资产
- 希望短期能单人开发完成 MVP

### 2.3 明确 Non-Goals（这次不做）

- ❌ 用户账户/登录/注册
- ❌ 站内支付/订阅
- ❌ 头端 CMS 后台（内容通过 git 提交即可）
- ❌ 实时聊天（可以用 Cal.com 预约替代）
- ❌ 复杂的 API 路由（所有"后端"需求用第三方 SaaS）
- ❌ 评论/社区功能
- ❌ 用户数据收集（除了表单提交和 Plausible 的匿名 analytics）

---

## 3. 技术栈决策

### 3.1 框架选型：Astro 5（已确定）

**决定：Astro 5**，无其他候选。Next.js 明确排除 — 静态导出部署繁琐，middleware / API route / next-intl 在 static export 下都是坑。

**为什么 Astro 对这个项目是降维打击**：

1. **天生为静态而生** — 默认 zero-JS，需要 JS 的地方用 island 按需加载
2. **原生 i18n routing** — 不需要 middleware，static export 下正常工作
3. **官方 GitHub Pages Action** — `withastro/action@v3` 一键部署，零配置
4. **Content Collections 原生 TypeScript** — 项目/服务/案例数据结构直接带类型校验
5. **Lighthouse 全 100 是默认结果**，不是需要调优的目标
6. **MDX 原生支持** — 后续加 Insights 博客零成本
7. **Tailwind v4 零配置接入**
8. **学习成本低** — 语法就是 HTML + JSX + frontmatter，Next.js 工程师半天就能上手

### 3.2 样式与设计系统

- **Tailwind CSS v4**（2025 年底发布，performance 大幅提升，原生 CSS 变量驱动）
- **Design tokens**：全部 CSS custom properties，定义在 `src/styles/tokens.css`，对应 `design.md` §2-§4
- **组件库**：不引入 UI 库，手写所有组件以保持 Lyra 风格的极致控制

### 3.3 动画

- **Motion**（原 framer-motion 的 vanilla 版，Astro island 里用 React adapter）
- 只在特定 island 里启用：Hero 神经树、Work 筛选网格、数据数字计数
- 大部分动画用纯 CSS（光晕呼吸、hover 描边变色、fade-up）

### 3.4 字体

- **next/font 不可用（没 Next.js）** → 改用 `@fontsource/*` 包 + Astro Asset
- **英文**：`@fontsource/satoshi`（或从 Fontshare 本地下载）、`@fontsource/geist-mono`
- **中文**：`@fontsource/noto-sans-sc` 或系统字体栈 fallback（CJK 字体巨大，优先用系统字体）
- **分路径加载**：`/` 加载英文字体，`/zh/*` 加载中文字体
- **font-display: swap** + preload 关键字体

### 3.5 图标与插画

- **图标**：`lucide-astro`（Astro 原生版，tree-shaken，只打包用到的图标）
- **神经树插画**：手写 SVG + CSS animation（不引入 Lottie/Rive 以保持零依赖）
- **Logo**：SVG，支持 dark/light 两个变体

---

## 4. Hosting & 部署架构

### 4.1 GitHub 仓库（已确定）

```
github.com/JR-Academy-AI/metatreelab-ai
```

放在母公司 `JR-Academy-AI` org 下，与其他 JR Academy 项目保持一致的归属。

### 4.2 GitHub Pages 配置

1. Repo Settings → Pages → Source: **GitHub Actions**（不用 legacy branch-based 方式）
2. 自定义域名：在 repo 根目录放 `public/CNAME` 文件，内容 `metatreelab.ai`
3. 在域名注册商（Namecheap / Cloudflare / GoDaddy）配置 DNS：
   - `A` 记录指向 GitHub Pages IP：`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` 记录：`www → jr-academy-ai.github.io`（或对应 org）
4. 开启 GitHub Pages 的 "Enforce HTTPS" — 自动 Let's Encrypt 证书

### 4.3 GitHub Actions 构建部署 Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
        with:
          node-version: 20
          package-manager: pnpm@latest
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- **触发**：push 到 main 分支自动构建部署
- **并发**：同一时间只跑一个 deploy，新 push 取消旧构建
- **PR 预览**：可选 — 用 Cloudflare Pages / Netlify drop 做 PR preview（不走 GitHub Pages，因为 GH Pages 不支持多环境）

### 4.4 域名推荐

**首选**：`metatreelab.ai`（简洁，国际化，与 JR Academy 分离）

**备选**：
- `metatree.io`（.io 更偏 tech，贵一些）
- `metatree.com.au`（如果专注澳洲市场）
- `metatree.ai`（AI 感强，贵）

**建议**：先注册 `metatreelab.ai` 作为主域名，`metatree.com.au` 作为澳洲 SEO 辅助域名（301 重定向到主域名）。

---

## 5. "无后端 + 零月费"服务映射表

每个通常需要后端的功能，映射到**完全免费**的第三方 SaaS：

| 传统需求 | 方案 | 费用 | 备注 |
| --- | --- | --- | --- |
| **Hosting** | **GitHub Pages** | $0 | 静态托管 + HTTPS |
| **DNS + CDN** | **Cloudflare**（免费档）| $0 | 顺带 DDoS 防护、WAF、页面缓存 |
| **Analytics** | **Cloudflare Web Analytics** | $0 | 无 cookie banner、隐私友好、与 Cloudflare DNS 集成零配置 |
| **Contact Form** | **Web3Forms** | $0 | 免费档 250 次/月，足够 MVP；超额再考虑付费 |
| **Book a Call** | **Cal.com**（免费档）| $0 | 开源 + 托管版免费，embed 零成本 |
| **Email Routing** | **Cloudflare Email Routing** | $0 | `hello@metatreelab.ai` 自动转发到个人 Gmail，可配合 Gmail 的"Send As"反向发件 |
| **Error Tracking** | Sentry 免费档 | $0 | 5k events/月 |
| **Spam Protection** | **Cloudflare Turnstile** | $0 | 无 CAPTCHA 体验，免费无限额 |
| **Uptime 监控** | UptimeRobot 免费档 | $0 | 50 个监控 · 5 分钟间隔 |
| **Search**（P2）| Pagefind | $0 | 构建时生成静态搜索索引 |
| **CMS**（P2）| Keystatic / Decap / Tina | $0 | Git-based，直接 commit 到 repo |
| **RSS**（P2）| Astro `@astrojs/rss` | $0 | 构建时生成 |
| **OG Image 生成**（P1）| Satori + Astro | $0 | 构建时生成动态 OG 图 |
| **Chat**（可选）| 不做 | — | 用 Cal.com 预约替代 |
| **A/B 测试**（P2）| GrowthBook Cloud 免费档 | $0 | |
| **Webhook → CRM** | Web3Forms webhook 转发到 HubSpot/Salesforce | $0 | Lead 同步到母公司 CRM |

### 5.1 为什么换成 Cloudflare Web Analytics（不用 Plausible）

| 维度 | Cloudflare Web Analytics ✅ | Plausible |
| --- | --- | --- |
| **月费** | **$0 无限额** | $9+/月 |
| **隐私合规** | 无 cookie、无 PII、GDPR 友好 | 一样好 |
| **与 DNS 集成** | Cloudflare 托管 DNS 时**自动注入**，零代码 | 需要手工加 `<script>` |
| **Core Web Vitals** | 内置上报 | 需要额外工具 |
| **基础指标**（pageview / 跳出 / 地理 / referrer）| ✅ | ✅ |
| **Custom Events** | 弱（需 `cloudflareInsights.beacon` 手动上报）| 强 |

**决定**：MVP 用 Cloudflare Web Analytics 覆盖 99% 需求。Custom events（表单提交、按钮点击转化追踪）在 P1 时再评估 — 可以用 Web3Forms 的 email 通知 + UTM 参数就能追到大部分转化数据，不一定要前端事件。

### 5.1 Contact Form 实现

```html
<!-- Web3Forms example -->
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
  <input type="hidden" name="subject" value="New lead from metatreelab.ai">
  <input type="hidden" name="from_name" value="Metatree Lab Website">
  <input type="hidden" name="redirect" value="https://metatreelab.ai/thanks">

  <!-- honeypot -->
  <input type="checkbox" name="botcheck" class="hidden" style="display:none">

  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <select name="service_interest">
    <option value="ai-build">AI Build</option>
    <option value="ai-adopt">AI Adopt (Claude / OpenClaw)</option>
    <option value="property">Property Marketing</option>
  </select>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

- **收件**：Web3Forms 把提交转发到 `hello@metatreelab.ai`
- **转发 CRM**：在 Web3Forms 后台设置 webhook，同步到 HubSpot / 母公司 CRM
- **Spam 防护**：Honeypot 字段 + Turnstile（Cloudflare 免费）

### 5.2 Book a Call 实现

- 创建 Cal.com 团队账号，设置"Intro Call · 30 min"日历
- 官网嵌入 `<iframe src="https://cal.com/metatreelab/intro">`
- 或用 `@calcom/embed-react`（island 里用）

### 5.3 Analytics

**Cloudflare Web Analytics**（免费、无 cookie 横幅、GDPR 友好、自动 Core Web Vitals）。

**零配置方案**（DNS 托管在 Cloudflare 时）：
- 在 Cloudflare Dashboard → Web Analytics → Add a site → 选 metatreelab.ai
- 勾选 "Automatic Setup"，Cloudflare 自动在 proxy 过的请求注入 beacon 脚本
- **无需改代码**

**手动方案**（如果 DNS 不托管 Cloudflare 或需要 SPA 追踪）：

```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

**自动获得的指标**：
- Pageview / unique visitor
- Referrer / source
- 国家 + 设备 + 浏览器
- Core Web Vitals（LCP / CLS / INP / FCP / TTFB）

**MVP 暂不追踪**的 custom events（P1 再评估，靠 UTM 参数替代）：
- `click: book-a-call` → 改由 Web3Forms 表单中的隐藏字段 `source` 记录
- `click: service-card-*` → 改由 URL query `?from=home-card-ai` 追踪

---

## 6. i18n 策略（静态站）

### 6.1 路由策略

```
https://metatreelab.ai/              → English (default)
https://metatreelab.ai/services/ai/
https://metatreelab.ai/work/
https://metatreelab.ai/zh/            → 中文
https://metatreelab.ai/zh/services/ai/
https://metatreelab.ai/zh/work/
```

- **默认语言**：English（`en`），无前缀
- **次语言**：中文（`zh`），前缀 `/zh/`
- **与 JR Academy 的 `jr-academy-web-zh` 策略一致**

### 6.2 Astro i18n 配置

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://metatreelab.ai',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,  // en 不带前缀
    },
  },
});
```

### 6.3 内容翻译存储

两种模式并行：

**Mode A - UI 文案**：存在 `src/i18n/<locale>.json`
```
src/i18n/
  ├── en.json
  └── zh.json
```

**Mode B - 结构化内容（Projects / Services / Team）**：Astro Content Collections
```
src/content/
  ├── services/
  │   ├── en/
  │   │   ├── ai-strategy-sprint.md
  │   │   ├── rag-knowledge-systems.md
  │   │   ├── ai-agent-development.md
  │   │   ├── claude-cowork-setup.md
  │   │   ├── openclaw-implementation.md
  │   │   └── ...
  │   └── zh/
  │       └── (same structure)
  ├── projects/
  │   ├── en/
  │   └── zh/
  └── testimonials/
      ├── en/
      └── zh/
```

### 6.4 语言切换器

导航栏右侧：`EN / 中`（小号等宽字），点击切换到当前页面的对应语言版本，URL 直接映射。

### 6.5 Hreflang & SEO

```html
<link rel="alternate" hreflang="en" href="https://metatreelab.ai/services/ai/">
<link rel="alternate" hreflang="zh" href="https://metatreelab.ai/zh/services/ai/">
<link rel="alternate" hreflang="x-default" href="https://metatreelab.ai/services/ai/">
```

Astro 可以在 layout 里根据当前 route 自动生成。

---

## 7. 信息架构（Site Map & Page Inventory）

### 7.1 Sitemap

```
metatreelab.ai/
├── /                               Home
├── /services/                      Services overview
│   ├── /services/ai/               AI Systems (Build + Adopt)
│   │   ├── /services/ai/build/     AI Build Track detail
│   │   └── /services/ai/adopt/     AI Adopt Track detail
│   └── /services/property/         Property Marketing
├── /work/                          Work grid (filterable)
│   └── /work/[slug]/               Individual project detail
├── /about/                         About + team + receipts matrix
├── /insights/                      Blog (P2, 初期可无)
│   └── /insights/[slug]/           Individual article
├── /contact/                       Contact form + Book a Call
├── /thanks/                        表单提交成功页
└── /zh/(全部镜像)
```

### 7.2 Page Inventory

| Page | Priority | i18n | 主要组件 | 外部依赖 |
| --- | --- | --- | --- | --- |
| Home | **P0** | ✅ | Hero · ServiceSplit · TrustBar · Stats · FeaturedWork · Testimonial · CTAFooter | Plausible |
| /services/ai | **P0** | ✅ | ServiceHero · BuildTrackTable · AdoptTrackTable · ProofGrid · CaseStudyLinks · CTAFooter | Plausible |
| /services/property | **P0** | ✅ | ServiceHero · PropertyServicesTable · FormaCaseStudy · CTAFooter | Plausible |
| /work | **P0** | ✅ | WorkGrid（filterable）· FilterTabs · ProjectCard | Plausible |
| /work/[slug] | P1 | ✅ | ProjectDetailHero · Gallery · Outcome · RelatedProjects | Plausible |
| /about | **P0** | ✅ | AboutHero · CapabilityReceiptsMatrix · TeamGrid · JRAcademyLink · CTAFooter | Plausible |
| /contact | **P0** | ✅ | ContactHero · ContactForm · CalcomEmbed · OfficeInfo | Web3Forms · Cal.com |
| /thanks | **P0** | ✅ | ThankYouHero · NextStepsLinks | — |
| /insights | P2 | ✅ | ArticleGrid · CategoryFilter | — |
| /insights/[slug] | P2 | ✅ | ArticleLayout · MDX content · Author · RelatedArticles | — |
| 404 | P1 | ✅ | 404 page with "back to home" | — |

---

## 8. Content Model（Astro Content Collections Schema）

### 8.1 `services` collection

```ts
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string(),
    track: z.enum(['build', 'adopt', 'property']),
    title: z.string(),
    subtitle: z.string(),
    duration: z.string(),  // "2-4w"
    priceBand: z.string().optional(),  // "AUD 30-80K"
    flagship: z.boolean().default(false),
    summary: z.string(),  // 1-2 句话
    deliverables: z.array(z.string()),
    proofLinks: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
    })).optional(),
    tags: z.array(z.string()),  // ["AI", "RAG", "Agent"]
    order: z.number(),  // 用于排序
  }),
});
```

### 8.2 `projects` collection

```ts
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    category: z.enum(['ai-systems', 'property', 'brand']),
    tags: z.array(z.string()),  // ["AI", "RAG"] / ["Property", "Web"]
    client: z.string(),  // "JR Academy (parent)" / "Forma Property"
    year: z.number(),
    summary: z.string(),  // 一句话描述
    cover: z.string(),  // "/work/training-rag/cover.webp"
    gallery: z.array(z.string()).optional(),
    outcomes: z.array(z.string()).optional(),  // "Cut support tickets by 40%"
    stack: z.array(z.string()).optional(),
    url: z.string().url().optional(),  // 外链
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});
```

### 8.3 `testimonials` collection

```ts
const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    quote: z.string(),
    author: z.string(),
    role: z.string(),
    company: z.string(),
    companyLogo: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});
```

### 8.4 `team` collection (P1)

```ts
const team = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    photo: z.string().optional(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
  }),
});
```

### 8.5 Site config

```ts
// src/config/site.ts
export const siteConfig = {
  name: 'Metatree Lab',
  tagline: {
    en: 'We build systems that ship.',
    zh: '我们做真正上线的系统。',
  },
  description: {
    en: 'A digital studio from JR Academy — AI systems for tech teams, marketing for Australian property developers.',
    zh: '匠人学院旗下的 Digital Studio — 给技术团队做 AI，给澳洲房产团队做营销。',
  },
  url: 'https://metatreelab.ai',
  parent: {
    name: 'JR Academy',
    url: 'https://jiangren.com.au',
  },
  contact: {
    email: 'hello@metatreelab.ai',
    bookingUrl: 'https://cal.com/metatreelab/intro',
  },
  social: {
    github: 'https://github.com/JR-Academy-AI',
    linkedin: 'https://linkedin.com/company/metatree-lab',
  },
  locales: ['en', 'zh'] as const,
  defaultLocale: 'en' as const,
};
```

---

## 9. 组件清单（Component Inventory）

### 9.1 Primitive UI（`src/components/ui/`）
- `Button.astro` — Primary / Ghost / Tag 三种变体
- `Card.astro` — 玻璃态容器
- `SectionLabel.astro` — `/ 01 — XXX` 风格的小标签
- `Tag.astro` — 胶囊状 tag
- `Stat.astro` — 大号数字组件
- `LocaleSwitch.astro` — EN / 中 切换
- `ArrowLink.astro` — 带 → 的链接

### 9.2 Layout（`src/components/layout/`）
- `BaseLayout.astro` — root layout，含 `<html>` / `<head>` / hreflang
- `Nav.astro` — 顶部胶囊导航
- `Footer.astro` — 底部
- `GridLines.astro` — 隐形 12 列网格（`design.md` §5.1）
- `StarfieldBackground.astro` — 星空背景

### 9.3 Home 页（`src/components/home/`）
- `Hero.astro` — 主 Hero + 神经树插画
- `NeuralTree.astro` — SVG 神经树插画（含动画）
- `ServiceSplit.astro` — 双路径分叉卡片
- `TrustBar.astro` — 母公司产品 logo 横排
- `StatsRow.astro` — 3 个关键数据
- `FeaturedWork.astro` — 精选 3 个项目
- `TestimonialWaterfall.astro` — 错位瀑布流推荐
- `CtaFooter.astro` — 底部巨型 CTA

### 9.4 Services 页（`src/components/services/`）
- `ServiceHero.astro`
- `ServiceTrackTable.astro` — Build / Adopt / Property 共用
- `ProofGrid.astro` — capability × proof 矩阵
- `FlagshipCallout.astro` — Claude Cowork / OpenClaw / AI Agent 的主打服务卡

### 9.5 Work 页（`src/components/work/`）
- `WorkGrid.astro` — 筛选网格容器
- `FilterTabs.astro` — 🌀 **React island**（需要客户端交互）
- `ProjectCard.astro` — 单个项目卡片
- `ProjectDetailLayout.astro`

### 9.6 Contact 页（`src/components/contact/`）
- `ContactForm.astro` — 🌀 **React island**（form state）
- `CalcomEmbed.astro` — Cal.com iframe
- `OfficeInfo.astro`

### 9.7 About 页（`src/components/about/`）
- `CapabilityReceiptsMatrix.astro` — 能力 × 证据表（`design.md` §7.5）
- `TeamGrid.astro`
- `JRAcademyBacking.astro` — 母公司背书区块

### 9.8 Islands（需要 JS 的 React 组件）
1. **FilterTabs**（Work 页筛选）
2. **ContactForm**（表单 state + validation）
3. **NeuralTreeAnimated**（可选，纯 CSS 也能做）
4. **Counter**（数据数字递进计数）

其他全部 Astro 静态组件，零 JS。

---

## 10. Feature 优先级

### 10.1 MVP（P0 — 第一版必须有）

必须完成才能上线：

- [ ] **Home 页**完整（含 Hero、双路径分叉、TrustBar、Stats、FeaturedWork、CTA Footer）
- [ ] **Services 页 AI**（Build + Adopt 两个 track 的完整服务列表）
- [ ] **Services 页 Property**（完整服务列表 + Forma 案例链接）
- [ ] **Work 页**（筛选网格 + 8 个初始项目卡片）
- [ ] **About 页**（能力 × 证据矩阵 + JR Academy 背书）
- [ ] **Contact 页**（Web3Forms 表单 + Cal.com 嵌入）
- [ ] **404 页**
- [ ] **Thanks 页**
- [ ] **双语全覆盖**（所有上述页面 EN + ZH）
- [ ] **响应式**（手机、平板、桌面）
- [ ] **设计系统**（所有 design tokens、字体、网格线、组件）
- [ ] **神经树插画**（Hero 右侧 SVG）
- [ ] **SEO 基础**（meta tags、hreflang、sitemap.xml、robots.txt、OG image）
- [ ] **Plausible 埋点**（pageview + 关键事件）
- [ ] **GitHub Actions 部署流程**
- [ ] **自定义域名 + HTTPS**
- [ ] **Lighthouse ≥ 95 全项**

### 10.2 P1（上线后第一个月加）

- [ ] **Work detail 页**（每个项目单独详情页）
- [ ] **Team 组件**（真实团队介绍）
- [ ] **Insights 页**（博客入口，至少 2-3 篇首发文章）
- [ ] **搜索**（Pagefind 静态索引）
- [ ] **Cloudflare Turnstile**（表单反 spam）
- [ ] **RSS feed**（Insights 的）
- [ ] **OG image 动态生成**（用 Satori）
- [ ] **Dark/Light mode 切换**（可选 — 默认强制 dark 也很有品味）

### 10.3 P2（未来考虑）

- [ ] **Git-based CMS**（Keystatic）给非技术同事编辑
- [ ] **Newsletter 订阅**
- [ ] **客户 case study 模板化**
- [ ] **ROI 计算器 / 自评工具**（AI readiness quiz）
- [ ] **A/B 测试**（GrowthBook）
- [ ] **多页面 landing page 生成器**（针对不同行业的专属着陆页）

---

## 11. SEO & Performance

### 11.1 SEO 目标关键词

**英文**：
- `AI consulting Sydney`
- `AI agent development Australia`
- `Claude Code enterprise setup`
- `OpenClaw implementation`（早期低竞争，红利期）
- `RAG system consulting`
- `property marketing website Sydney`
- `real estate landing page designer`

**中文**：
- `AI 咨询 悉尼`
- `AI agent 搭建`
- `Claude Code 企业培训`
- `OpenClaw 龙虾 咨询`（早期空白市场）
- `澳洲房产网站制作`

### 11.2 每页 SEO 最低要求

- `<title>` — 唯一，< 60 字符
- `<meta name="description">` — 唯一，< 160 字符
- `<meta property="og:*">` 全套
- `<link rel="alternate" hreflang="*">` 双语互指
- `<link rel="canonical">`
- Schema.org JSON-LD（`Organization`、`WebSite`、`Service`、`BreadcrumbList`）
- 每页一个清晰 H1

### 11.3 Sitemap & Robots

- `sitemap.xml` — Astro `@astrojs/sitemap` 自动生成
- `robots.txt` — 允许所有爬虫，指向 sitemap
- 分语言 sitemap：`sitemap-en.xml` + `sitemap-zh.xml` + `sitemap-index.xml`

### 11.4 性能预算（Performance Budget）

| 资源类型 | Home 页预算 | 备注 |
| --- | --- | --- |
| HTML | < 30 kB gzipped | |
| CSS | < 20 kB gzipped | Tailwind v4 + 自定义 tokens |
| JS | **< 80 kB gzipped** | Astro island 按需加载 |
| 字体 | < 100 kB（subset）| 英文字体 subset only |
| 图片（首屏）| < 200 kB | WebP/AVIF，lazy loading |
| **Total 首屏** | **< 400 kB** | |
| LCP | < 1.2s | |
| TTI | < 2.0s | |

### 11.5 图片策略

- **所有图片用 WebP**（Astro 的 `<Image>` 组件自动转换）
- **Responsive images** — `srcset` 自动生成
- **Lazy loading** 默认启用（except Hero 图）
- **OG image** — 1200×630，PNG 或 JPG

---

## 12. Build & CI/CD

### 12.1 本地开发

```bash
pnpm install
pnpm dev          # localhost:4321
pnpm build        # 生成 dist/
pnpm preview      # 本地预览 dist/
pnpm check        # Astro type check
pnpm lint         # ESLint
pnpm format       # Prettier
```

### 12.2 分支策略

- `main` — 生产分支，每次 push 自动部署到 metatreelab.ai
- `feature/*` — 功能分支
- `docs/*` — 内容编辑分支
- PR 合并到 main 前必须过 CI（type check + lint + build）

### 12.3 CI 流水线（GitHub Actions）

```yaml
# .github/workflows/ci.yml
name: CI

on:
  pull_request:
    branches: [main]

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm check
      - run: pnpm lint
      - run: pnpm build
      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            http://localhost:4321/
          uploadArtifacts: true
          temporaryPublicStorage: true
```

### 12.4 Pre-commit Hook

用 `lefthook` 或 `husky` 配置：
- Prettier 格式化
- ESLint fix
- Astro type check（仅改动文件）

---

## 13. 域名 & DNS 配置清单

### 13.1 域名注册
- [ ] 注册 `metatreelab.ai`（Namecheap / Cloudflare Registrar / GoDaddy）
- [ ] 启用 2FA 保护 registrar 账户
- [ ] 建议：把 DNS 托管到 Cloudflare（免费 + 性能 + 安全）

### 13.2 DNS 记录

```
Type    Name    Value                            TTL
A       @       185.199.108.153                  Auto
A       @       185.199.109.153                  Auto
A       @       185.199.110.153                  Auto
A       @       185.199.111.153                  Auto
CNAME   www     jr-academy-ai.github.io        Auto
TXT     @       v=spf1 include:_spf.google.com ~all   (如果用 Google Workspace)
MX      @       (如果要 hello@metatreelab.ai 收发邮件)
```

### 13.3 邮箱 — Cloudflare Email Routing（免费）

**方案**：Cloudflare Email Routing 完全免费，把 `*@metatreelab.ai` 转发到个人 Gmail，配合 Gmail 的 "Send As" 功能可以反向用品牌邮箱发件。

**配置步骤**：
1. Cloudflare Dashboard → metatreelab.ai → Email → Email Routing
2. Enable → Cloudflare 自动配置所需 MX / SPF / TXT 记录
3. 添加 destination：你的个人 Gmail（验证 OTP）
4. 添加 route 规则：
   - `hello@metatreelab.ai` → 你的 Gmail
   - `billing@metatreelab.ai` → 你的 Gmail
   - `nick@metatreelab.ai` → 你的 Gmail
   - `*@metatreelab.ai` → 你的 Gmail（catch-all）
5. 在 Gmail → Settings → Accounts → Send mail as → 添加 `hello@metatreelab.ai`，SMTP 用 Gmail 自己的即可

**优点**：
- 完全免费、无限别名
- 无需维护独立收件箱
- 所有邮件集中在个人 Gmail 里处理
- 客户看到的 From 地址是 `hello@metatreelab.ai`

**缺点**（可接受）：
- 不能给团队成员独立收件箱（MVP 阶段单人足够，未来团队扩张可升级 Zoho 免费档 5 用户或 Google Workspace $6/用户/月）
- Gmail 里发件需要"Send As"手动切换（有插件可自动）

---

## 14. Analytics & Tracking Plan

### 14.1 基础指标（Cloudflare Web Analytics 自动获得）

零配置就能拿到：
- Pageview / unique visitor / session
- Referrer / traffic source
- 国家 / 城市 / 设备 / 浏览器 / OS
- Core Web Vitals（LCP / CLS / INP / FCP / TTFB）

### 14.2 转化追踪策略（不靠前端 event）

MVP 不搭 custom event 基建，改用**两条链路**去追：

**链路 A — URL 参数标记来源**

所有站内 CTA 链接追加 `?from=...` 查询参数：

| 链接 | query |
| --- | --- |
| Home Hero 的 Book a Call | `/contact?from=home-hero` |
| Nav 的 Book a Call | `/contact?from=nav` |
| CTA Footer 的 Book a Call | `/contact?from=home-footer` |
| Home ServiceSplit AI 卡 | `/services/ai?from=home-card` |
| Home ServiceSplit Property 卡 | `/services/property?from=home-card` |

**链路 B — 表单隐藏字段带上完整上下文**

Contact Form 里放几个 hidden field，自动由 JS 填充：

```html
<input type="hidden" name="source" value="{{ query.from }}">
<input type="hidden" name="page" value="{{ currentPath }}">
<input type="hidden" name="locale" value="{{ currentLocale }}">
<input type="hidden" name="service_interest" value="..."> <!-- 用户选择 -->
<input type="hidden" name="referrer" value="{{ document.referrer }}">
```

Web3Forms 邮件通知里就能看到每条 lead 的完整来源。

### 14.3 Goal / Conversion 定义

主要转化：**Contact Form 提交**（由 Web3Forms 邮件 / webhook 计数）
次要转化：**Cal.com 预约成功**（Cal.com 后台有内置统计）

### 14.4 P1 可选升级

如果 MVP 跑起来后发现 UTM + 表单 hidden field 不够用，再考虑：
- 上 Plausible（$9/月，支持 custom events）
- 或加一个 Umami self-host
- 或直接用 Google Tag Manager + 自定义 dataLayer + 免费 GA4（但要接受 cookie banner）

---

## 15. Open Questions（需要用户决定）

这些决定必须在动工前确认：

1. **域名选哪个**？`metatreelab.ai` / `metatree.com.au` / `metatree.ai` / `metatree.io`？（唯一不可避免的 ~$10/年开销）
2. **GitHub 仓库归属**：放在 JR Academy org 下还是独立 `metatreelab` org？
3. **DNS 托管**：确认用 Cloudflare（免费 + 自带 Analytics + Email Routing + Turnstile，一站式省事）
4. **邮箱转发目标**：Cloudflare Email Routing 转发到哪个个人 Gmail？
5. **MVP 时首发项目案例**：哪些母公司产品可以公开作为 reference case？有没有 NDA 考虑？
6. **团队介绍要不要放**：如果要，需要照片 + bio + LinkedIn
7. **博客 Insights 要不要进 MVP**：如果有内容储备就进，否则 P1
8. **客户真实案例**：Forma Property 之外还有哪些可以公开展示的澳洲房产案例？
9. **定价是否展示**：要不要在 Services 页写价格区间（AUD 8-40K 等）？还是全部 "Contact for quote"？
10. **Cal.com 账户**：用个人 Google 登录还是新建独立账号？

---

## 16. 风险 & 缓解

| 风险 | 可能性 | 影响 | 缓解 |
| --- | --- | --- | --- |
| GitHub Pages 构建失败阻塞上线 | 低 | 中 | 保留 Cloudflare Pages 作为备份部署（同源 repo）|
| Web3Forms 免费 tier 限额变化 | 低 | 中 | 预先对接 Formspree / HubSpot webhook 作为备份 |
| i18n 实现复杂度超预期 | 中 | 中 | 优先做英文版，中文版可以 MVP 后 1 周内补齐 |
| 中文字体加载慢影响性能 | 中 | 中 | 用系统字体栈 fallback（`PingFang SC` / `Microsoft YaHei`）|
| 母公司案例展示涉及 NDA | 中 | 高 | 只展示 JR Academy 自有产品（SigmaQ / training-rag 等），避开客户敏感信息 |
| OpenClaw 社区生态变化快 | 中 | 中 | 在文案里留弹性，不写死版本号和具体 API |
| Lighthouse 性能没达 95 | 低 | 中 | Astro + 零 JS 默认下几乎不可能不达标 |

---

## 附录 A · 参考资源

- Astro 官方文档：https://docs.astro.build/
- Astro GitHub Pages 部署指南：https://docs.astro.build/en/guides/deploy/github/
- Astro i18n 指南：https://docs.astro.build/en/guides/internationalization/
- Web3Forms：https://web3forms.com/
- Plausible：https://plausible.io/
- Cal.com：https://cal.com/
- Tailwind v4：https://tailwindcss.com/
- next-intl（fallback 用）：https://next-intl-docs.vercel.app/

## 附录 B · 术语对照

| EN | 中文 |
| --- | --- |
| Digital Studio | 设计工作室 / 数字工作室 |
| AI Consulting | AI 咨询 |
| AI Adoption | AI 落地 / AI 导入 |
| Production RAG | 生产级 RAG |
| Agent Development | Agent 搭建 / Agent 开发 |
| Workflow Automation | 工作流自动化 |
| Multi-tenant SaaS | 多租户 SaaS |
| Property Marketing | 房产营销 |
| Developer Website | 开发商官网 |
| Project Landing Page | 楼盘专属着陆页 |
| Lead Capture | 留资转化 |
| Booking | 预约 |

---

**文档变更**

| 版本 | 日期 | 变更 |
| --- | --- | --- |
| v1.0 | 2026-04-11 | 初版 PRD — Astro 5 + GitHub Pages + 双语 + 无后端架构 |
| v1.1 | 2026-04-11 | 确定 Astro 5，删除 Next.js fallback；全栈切换为零月费方案（Cloudflare 全家桶 + Web3Forms + Cal.com）|

**文档负责人**：Metatree Lab
