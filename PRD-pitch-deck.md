# Metatree Lab — Online Pitch Deck PRD

> **文档性质**：产品 PRD — 在线 B2B 公司介绍 Pitch Deck
>
> **版本**：v1.0 · 2026-04-13
> **负责人**：Metatree Lab

---

## 0. TL;DR

在现有 Astro 站内新增一个 **全屏、固定 16:9 比例的在线 Pitch Deck 页面** (`/deck/`)，用于 B2B 客户首次接触时快速了解公司。复用站点现有设计系统（黑底 + jade/cyan 品牌色 + glass 卡片 + mono 标签），键盘/触屏翻页，零 JS 框架依赖。相当于一个可以发链接的在线 PPT，但比 PDF 更有品牌感，比 Google Slides 更贴合品牌。

---

## 1. 为什么做这个

### 1.1 场景

| 场景 | 当前做法 | 痛点 |
| --- | --- | --- |
| 首次客户会议前发资料 | 发官网链接 | 官网信息分散，客户需要自己翻多个页面 |
| BD 微信/邮件发公司介绍 | 无 / 临时做 PDF | 每次格式不统一，无品牌感 |
| 线下活动扫码了解 | 名片 + 官网 | 无法在 30 秒内建立完整认知 |
| 视频会议 screen share | 打开官网逐页翻 | 不连贯，无 narrative flow |

### 1.2 目标

1. **30 秒电梯演讲** — 客户打开链接，10-12 页翻完，完整理解 "你是谁 → 做什么 → 凭什么 → 怎么合作"
2. **品牌一致性** — 视觉风格与官网完全统一，不是一个"另一个东西"
3. **随时可发** — 一个固定 URL，永远是最新内容，不用每次导出 PDF
4. **双语** — EN + ZH 各一套，路由 `/deck/` + `/zh/deck/`
5. **零额外成本** — 静态页面，不引入新依赖

---

## 2. 产品设计

### 2.1 交互模型

- **固定 16:9 视口**：页面居中显示一个 16:9 的 "slide" 容器，背景为纯黑，容器外也是黑色（letterbox 效果）
- **翻页方式**：
  - 键盘 `←` / `→` 或 `Space`
  - 触屏左右滑动（swipe）
  - 底部点击式 dot indicator（当前页高亮为 jade）
  - 鼠标点击 slide 左 / 右半区
- **页码指示**：右下角 mono 字体 `03 / 12` 样式
- **全屏按钮**：右上角，点击进入浏览器 Fullscreen API（真正的全屏演示模式）
- **退出 / 返回**：左上角 Logo 可点击回首页，ESC 退出全屏
- **URL hash 同步**：`/deck/#3` 定位到第 3 页，方便分享特定页
- **过渡动画**：slide 之间用 fade + 轻微 translateX（与官网 `data-reveal` 风格统一），duration 400ms

### 2.2 Slide 内容结构（10-12 slides）

| # | Slide 名称 | 内容 | 设计要点 |
|---|-----------|------|---------|
| 01 | **Cover** | Metatree Lab logo + tagline "AI consulting that ships to production" + 副标题 "落地型 AI 咨询" | 大面积留白，logo 居中，底部 jade 呼吸光效。NeuralNetwork SVG 作为背景装饰 |
| 02 | **Problem** | "Most AI projects never leave the demo stage." 用 2-3 个数据点说明行业痛点（AI 项目失败率高、POC → Production 鸿沟） | 左侧大字标题，右侧数据卡片（glass 风格） |
| 03 | **Who We Are** | 一句话定位 + 母公司 JR Academy 背书（5+ years, 10+ Lambda microservices, 3 live AI products, 1000+ enterprise partners） | section-label "/ 03 — WHO WE ARE"，数字用大号 mono 字体 + jade 颜色 |
| 04 | **What We Do** | 三条业务线概览：AI Build / AI Adopt / Property Marketing。每条一个 icon + 一句话 + 2-3 个代表服务 | 三列布局，每列一个 glass 卡片，track 名称用 brand gradient |
| 05 | **AI Build — Deep Dive** | 旗舰服务展开：AI Agent Development, RAG & Knowledge Systems, Custom LLM Applications。强调 "production, not prototype" | 左侧服务列表，右侧一个代表性项目截图（如 SigmaQ） |
| 06 | **AI Adopt — Deep Dive** | Claude Cowork Setup + OpenClaw Implementation。强调 "your team, AI-native in 2 weeks" | 类似结构，右侧展示工具 logo 或工作流图 |
| 07 | **Property Marketing** | Developer sites, pitch decks, marketing collateral。强调 "engineering team builds marketing — pixel-perfect + fast" | 展示 Forma Property 等案例截图 |
| 08 | **Case Studies** | 4 个 Featured Projects 的 mini 卡片：SigmaQ, MetaTown, Jobpin AI, JR Academy AI。每个：名称 + 一句话 outcome + 技术标签 | 2×2 网格，glass 卡片，hover 无需（静态展示） |
| 09 | **How We Work** | 合作流程：Discovery Call → Strategy Sprint → Build & Ship → Handover & Support。4 步骤横向 timeline | 水平步骤条，每步一个 icon + 标题 + 一句描述，当前步之间用 jade 连线 |
| 10 | **Our Team** | Lightman Wang 简介 + 团队能力矩阵（不一一列人，强调 "small team, full coverage"） | 左侧 founder 卡片，右侧 capability tags 云 |
| 11 | **Why Metatree** | 4 个差异化要点：Ship First / Every Claim Has Receipts / Team Over Hero / No Corporate Speak | 2×2 网格，每个要点一个 bold 标题 + 一句解释，mono label |
| 12 | **Let's Talk** | CTA slide：Book a Call 按钮 + 邮箱 + 电话 + 三城市办公室。底部 "metatreelab.ai" | 居中布局，btn-primary "Book a Call" + btn-ghost "Send an Email"，底部呼吸光效 |

### 2.3 响应式策略

| 视口 | 行为 |
| --- | --- |
| **≥ 1280px** | Slide 容器最大 1152×648px (16:9)，居中，两侧 letterbox |
| **768-1279px** | Slide 容器铺满宽度，高度按 16:9 计算，内容字号缩放 |
| **< 768px（手机）** | 切换为 **纵向滚动模式**：每个 slide 变成一个 section，全屏宽度，自然高度，手指上下滑动浏览。仍保留 dot indicator（变为右侧竖向）。这样手机上不会出现太小看不清的问题 |

### 2.4 数据源

- **复用现有数据文件**：`src/data/services.ts`, `src/data/projects.ts`, `src/data/team.ts`, `src/config/site.ts`
- **Slide 特有文案**：在 `src/i18n/en.json` + `zh.json` 中新增 `deck.*` namespace
- **Slide 顺序和内容编排**：在 `src/data/deck.ts` 中定义 slide 配置数组（方便后续调整顺序、增删 slide）

---

## 3. 技术方案

### 3.1 架构

```
src/
├── components/
│   └── deck/
│       ├── DeckLayout.astro       # 16:9 容器 + 翻页逻辑 + dot indicator
│       ├── SlideWrapper.astro     # 单个 slide 的通用 wrapper（padding, 字号缩放）
│       ├── SlideCover.astro       # Slide 01
│       ├── SlideProblem.astro     # Slide 02
│       ├── SlideWhoWeAre.astro    # Slide 03
│       ├── SlideWhatWeDo.astro    # Slide 04
│       ├── SlideBuild.astro       # Slide 05
│       ├── SlideAdopt.astro       # Slide 06
│       ├── SlideProperty.astro    # Slide 07
│       ├── SlideCases.astro       # Slide 08
│       ├── SlideProcess.astro     # Slide 09
│       ├── SlideTeam.astro        # Slide 10
│       ├── SlideWhyUs.astro       # Slide 11
│       └── SlideCta.astro         # Slide 12
├── data/
│   └── deck.ts                    # Slide 配置、文案、顺序
├── pages/
│   ├── deck.astro                 # EN entry → <DeckLayout locale="en" />
│   └── zh/
│       └── deck.astro             # ZH entry → <DeckLayout locale="zh" />
```

### 3.2 16:9 容器实现

```css
.deck-viewport {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  overflow: hidden;
}

.deck-slide-container {
  width: min(100vw, calc(100vh * 16 / 9));
  height: min(100vh, calc(100vw * 9 / 16));
  position: relative;
  overflow: hidden;
}
```

字号使用 `cqi`（container query inline）单位或 `vmin` 做自适应缩放，保证在任意屏幕上内容比例一致。

### 3.3 翻页逻辑（Vanilla JS）

```typescript
// <script> in DeckLayout.astro — Astro island, no framework
const slides = document.querySelectorAll('[data-slide]');
let current = getHashIndex() || 0;

function goTo(index: number) {
  slides[current].classList.remove('active');
  slides[index].classList.add('active');
  current = index;
  history.replaceState(null, '', `#${current + 1}`);
  updateDots();
  updateCounter();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') goTo(Math.min(current + 1, slides.length - 1));
  if (e.key === 'ArrowLeft') goTo(Math.max(current - 1, 0));
  if (e.key === 'f') toggleFullscreen();
});

// Touch swipe detection (pointer events)
// Click left/right half detection
// Dot click handler
```

### 3.4 样式复用

| 官网 token / class | Deck 中的使用 |
| --- | --- |
| `--bg-base: #000` | Viewport + slide 背景 |
| `--bg-glass` + `backdrop-filter` | 数据卡片、服务卡片 |
| `--brand-primary / secondary` | 关键数字、CTA 按钮、active dot |
| `--brand-gradient` | Track 标题、divider |
| `.section-label` | 每页左上角 `/ 03 — WHO WE ARE` |
| `.btn-primary` / `.btn-ghost` | CTA slide 按钮 |
| `font-family: var(--font-mono)` | 页码、标签、数据 |
| `--radius-lg` | 卡片圆角 |
| `--border-hairline` | 卡片边框 |
| Breathing glow keyframe | Cover + CTA slide 装饰 |

### 3.5 不需要的

- **不用** BaseLayout（Deck 是独立全屏体验，不要 Nav / Footer / GridLines）
- **不用** 任何 JS 框架（React, Vue 等）
- **不用** 第三方 slide 库（reveal.js 等）— 需求简单，自己写更轻量且可控
- **不引入** 新的 npm 依赖
- **不做** PDF 导出（如果客户需要 PDF，浏览器 Print → PDF 即可）
- **不做** 编辑器 / CMS — slide 内容硬编码在数据文件中

---

## 4. 设计规范补充

### 4.1 Slide 排版原则

- **每页一个核心信息**：标题 + 最多 3-4 个支撑点，绝不拥挤
- **大量留白**：slide 内容区域不超过 slide 面积的 60%
- **section-label 统一位置**：每页左上角，mono uppercase，`/ 01 — COVER` 格式
- **字号层级**（相对于 slide 容器）：
  - Slide 标题：~5% of slide width（约 48-56px @1152w）
  - 副标题 / body：~2% of slide width（约 20-24px）
  - Label / meta：~1.2%（约 12-14px）
  - 关键数字（stats）：~8%（约 80-96px），mono，jade 色

### 4.2 动效

- **翻页过渡**：当前 slide `opacity 1→0 + translateX(0→-3%)` 同时下一 slide `opacity 0→1 + translateX(3%→0)`，duration 400ms，ease-out
- **页内元素**：首次进入时模拟 `data-reveal` 的 stagger 动画（blur→clear + lift），每个元素 delay 0.1s
- **Cover 页**：logo + tagline 打字机或淡入效果
- **CTA 页**：按钮 breathing glow（复用官网 `@keyframes breathe`）
- **尊重 `prefers-reduced-motion`**：关闭所有动画，直接切换

### 4.3 品牌元素

- **Logo**：Cover 页居中大 logo，其余页面左上角小 logo（作为 back-to-home 链接）
- **NeuralNetwork SVG**：Cover 页背景装饰（降低 opacity 到 0.15）
- **Grid Lines**：不使用全局 GridLines（太 busy），但 slide 背景可用极淡的单条水平 / 竖直参考线作为设计网格暗示
- **截图 / 图片**：项目截图使用 `border-radius: var(--radius-lg)`，带 `--border-hairline` 边框，轻微 drop-shadow

---

## 5. 路由 & SEO

| 路由 | 页面 |
| --- | --- |
| `/deck/` | English Pitch Deck |
| `/zh/deck/` | 中文 Pitch Deck |

- `<title>`: "Metatree Lab — Company Overview" / "Metatree Lab — 公司介绍"
- `noindex` meta tag — Deck 是私发链接用途，不需要被搜索引擎收录
- OG image：单独做一张 1200×630 的 OG 图（Cover slide 的静态版本），用于微信/Slack 预览
- `hreflang` 互指 EN ↔ ZH

---

## 6. 验收标准

| 项 | 标准 |
| --- | --- |
| 16:9 比例 | 在 1920×1080、1440×900、1280×720 下 slide 容器均为精确 16:9 |
| 翻页 | 键盘 ← → Space、触屏 swipe、dot click、左右半区 click 均可翻页 |
| 全屏 | 点击全屏按钮进入 Fullscreen API，ESC 退出 |
| URL hash | 刷新页面后停留在对应 slide，分享 `#5` 链接直接定位 |
| 双语 | `/deck/` 全英文，`/zh/deck/` 全中文，内容完整对应 |
| 手机 | < 768px 自动切换纵向滚动模式，内容清晰可读 |
| 性能 | Lighthouse Performance ≥ 95，Total JS < 10 kB |
| 品牌一致 | 设计评审确认与官网风格统一（颜色、字体、间距、动效） |
| 无新依赖 | `package.json` 不新增任何依赖 |
| 构建通过 | `pnpm build` 无报错 |

---

## 7. 非目标 (v1 不做)

- ❌ 演讲者备注 / speaker mode
- ❌ PDF / PPTX 导出
- ❌ 在线编辑 slide 内容
- ❌ 多套 deck 模板（v1 只有一套公司介绍）
- ❌ 动态数据（一切静态，修改内容需要改代码重新 build）
- ❌ 访客分析（Deck 页不加 analytics，保持干净）

---

## 8. 未来扩展（v2 考虑）

- **多 Deck 支持**：`/deck/company/`、`/deck/ai-services/`、`/deck/property/` — 针对不同客户画像的定制版本
- **自动深色/浅色主题**：默认深色，但提供 `?theme=light` 参数切换白底版本（适合投影仪场景）
- **嵌入模式**：`?embed=1` 隐藏 logo 和页码，供 iframe 嵌入到邮件模板或其他页面
- **二维码 slide**：最后一页自动生成当前 Deck 链接的二维码，方便线下扫码
- **打印优化**：`@media print` 样式，每个 slide 一页，适合客户自行打印
