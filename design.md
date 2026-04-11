# Metatree Lab — 官网设计规范

> **公司定位**：Metatree Lab 是 [匠人学院（JR Academy）](https://jiangren.com.au) 旗下的 **Digital Studio**，由两条并行业务线组成：
>
> 1. **AI Systems** — 生产级 AI 咨询与交付：RAG、Agent、LLM 应用、多租户 AI 平台工程
> 2. **Property Marketing** — 澳洲房地产行业的全栈营销解决方案：开发商官网、楼盘 landing page、品牌视觉、广告投放着陆页
>
> **一句话定位**：**"A digital studio that builds AI systems and property marketing — with production receipts on both sides."**
>
> ## 两条业务线的护城河
>
> ### 业务线 A · AI Systems（含 Build + Adopt 双 Track）
>
> **Build Track**（定制开发 · 高单价 · 长周期）— 证据来自母公司匠人学院线上运营的真实系统：
> - **RAG 与上下文工程** → `training-rag`（LangChain + pgvector on Lambda）
> - **多租户企业 AI SaaS** → SigmaQ（4 档订阅 · Stripe · LMS 集成）
> - **Agent / LLM 应用** → `jr-prompt-lab`、MCP 服务器、3 个 Chrome AI 扩展
> - **AI 内容自动化** → `uni-course-architect`、Claude Bootcamp Pipeline
>
> **Adopt Track**（落地实施 · 中等单价 · 短周期 · 量大）— 帮客户企业"用上 AI"而不是"造 AI"：
> - **Workflow Automation** → **OpenClaw 🦞（自托管 agent 框架，人称"龙虾"）** · n8n / Make / Zapier 实施（销售自动化、文档处理、客服路由、内容流水线、跨系统同步）
> - **AI Adoption & Enablement** → 员工 AI 工具培训、SOP 改造、Prompt library、内部 governance
> - **独家护城河**：培训交付可直接复用 JR Academy 的 AI 课程资产 — 别的咨询公司学不来
>
> ### 业务线 B · Property Marketing
> 证据来自已交付的澳洲房地产客户：
> - **开发商主站** → [Forma Property](https://www.formaproperty.com.au/)（编辑级极简美学，商/住项目集合展示）
> - **能力组合**：Brand identity · 网站开发 · 楼盘 landing page · 户型册 / 销售物料 · Google/Meta Ads 着陆页 · CRM 集成
> - **行业理解**：懂澳洲房产销售节奏（项目 launch、display suite、settlement）与合规（Fair Trading、VOI）
>
> ## 关于"两种美学"
>
> Metatree Lab 作为 studio，核心能力是**按客户调性切换视觉语言**：
>
> | 业务线 | 典型美学 | 代表项目 |
> | --- | --- | --- |
> | AI Systems | 暗黑工程师风（纯黑 · Mono 字体 · 网格线） | Lyra Technologies 风格 |
> | Property Marketing | 编辑级极简风（纯白 · 衬线字体 · 大图留白） | Forma Property 风格 |
>
> **Metatree Lab 官网自己使用 AI/暗黑风格**，原因：
> 1. AI 业务线单价更高，品牌需要更强的技术锚定
> 2. 房产客户更关心"你能为我做什么风格"，而不是"你自己什么风格"
> 3. 暗黑工程师风让房产客户觉得 studio"不土"
> 4. 案例作品集里呈现多元美学能力即可
>
> **设计参考**：视觉系统基于 [Lyra Technologies](https://lyratechnologies.com.au/)，叠加编辑级 studio 的作品集展示思路（参考 Forma Property 的克制与留白）。
>
> ## 目标客户（按业务线拆分）
>
> ### AI Systems 客户
> 1. 教育科技公司决策层（想加 AI 但团队没落地过）
> 2. 企业培训 / 认证 / 评测业务负责人
> 3. 需要定制 AI Agent / RAG 系统的中型企业 CTO
> 4. 华语市场企业（复用母公司渠道）
>
> ### Property Marketing 客户
> 1. 澳洲中小型房地产开发商（单个或多个楼盘项目）
> 2. 建筑公司 / Architect studio（需要 portfolio 网站）
> 3. 买家中介 / Buyer's agent（需要个人品牌 + lead 转化页）
> 4. 楼花销售代理公司（需要快速迭代的项目 landing page）

---

## 一、品牌定位与气质

| 维度 | 关键词 |
| --- | --- |
| **风格** | 暗黑科技 · 极简工程 · 结构化 · 高可信 |
| **情绪** | 冷静、克制、精确、值得托付 |
| **避免** | 花哨 3D、赛博朋克、过度动效、科技蓝通稿风、炫酷 Hero 视频 |
| **形容词** | Quiet confidence（安静的自信）、Engineered elegance（工程化的优雅） |

> **一句话总结**：不卖未来感，卖"我们真的能把 AI 项目交付落地"的可信感。

---

## 二、配色方案（Design Tokens）

### 2.1 基础色（与 Lyra 一致，纯黑底是灵魂）

```css
:root {
  /* 背景 */
  --bg-base:        #000000;   /* 主背景，绝对主角 */
  --bg-elevated:    #0A0A0B;   /* 卡片微抬升背景（几乎无感差异）*/
  --bg-glass:       rgba(255, 255, 255, 0.03);  /* 毛玻璃卡片底 */

  /* 文字 */
  --text-primary:   #FFFFFF;
  --text-secondary: rgba(255, 255, 255, 0.65);
  --text-tertiary:  rgba(255, 255, 255, 0.45);
  --text-muted:     rgba(255, 255, 255, 0.30);

  /* 描边/分隔 */
  --border-hairline: rgba(255, 255, 255, 0.08);  /* 卡片描边 */
  --border-grid:     rgba(255, 255, 255, 0.05);  /* 隐形网格线 */
  --border-strong:   rgba(255, 255, 255, 0.15);  /* 悬停描边 */
}
```

### 2.2 品牌主色（区别于 Lyra 的紫蓝，改为 Metatree 专属）

**方案：Jade × Cyan 渐变**（寓意：tree 的生命力 + AI 的数据感）

```css
:root {
  /* 品牌主色 */
  --brand-primary:  #00E5A0;   /* 主品牌色：薄荷翡翠（Metatree 的"tree"）*/
  --brand-secondary:#00B4D8;   /* 次品牌色：科技青（AI 的数据感）*/
  --brand-accent:   #7DF9C5;   /* 高光色：用于 hover 发光 */

  /* 品牌渐变（用于 Logo、光晕、按钮 orbit）*/
  --brand-gradient: linear-gradient(
    135deg,
    #00E5A0 0%,
    #00C89E 25%,
    #00B4D8 60%,
    #0095C4 100%
  );

  /* 品牌光晕（blur 50-80px 使用）*/
  --brand-glow: radial-gradient(
    circle,
    rgba(0, 229, 160, 0.35) 0%,
    rgba(0, 180, 216, 0.15) 50%,
    transparent 100%
  );
}
```

> **用色比例（重要！）**：黑白 95%，品牌色 5%。品牌色只用在 Logo、CTA 按钮、hover 高光、关键数据强调。**绝对不要大面积铺设**，否则立刻失去高级感。

### 2.3 状态色（仅用于内部仪表盘 / 表单反馈，官网极少使用）

```css
  --state-success: #00E5A0;  /* 复用品牌色 */
  --state-warning: #F5B841;
  --state-error:   #FF5C7A;
```

---

## 三、字体排印

### 3.1 字体选择

```css
:root {
  /* 标题/正文字体：现代几何无衬线 */
  --font-sans: 'Satoshi', 'Inter', -apple-system, sans-serif;

  /* 等宽字体：用于小标签、代码、导航、数据 */
  --font-mono: 'Geist Mono', 'JetBrains Mono', 'SF Mono', monospace;
}
```

- **Satoshi / Inter**：正文与标题，现代、清爽、专业
- **Geist Mono**：Section 小标签、顶部导航、数据数字、代码片段
- **原则**：标题用 sans，小标签/点缀文字用 mono，形成两种字体的节奏对比

### 3.2 字号层级（rem 基准 1rem = 10px）

```css
:root {
  /* Display（超大标题，只用于 Hero）*/
  --fs-display:   8.4rem;   /* 84px */
  --fs-display-m: 4.8rem;   /* 移动端 */

  /* 标题层级 */
  --fs-h1: 6.4rem;   /* 64px */
  --fs-h2: 4.8rem;   /* 48px */
  --fs-h3: 3.2rem;   /* 32px */
  --fs-h4: 2.4rem;   /* 24px */

  /* 正文 */
  --fs-body-lg: 1.8rem;  /* 18px - Hero 副标题 */
  --fs-body:    1.6rem;  /* 16px - 正文 */
  --fs-body-sm: 1.4rem;  /* 14px - 说明文字 */

  /* 小标签（等宽）*/
  --fs-label:   1.2rem;  /* 12px - Section 标签 */
  --fs-micro:   1.0rem;  /* 10px - 极小信息 */
}
```

### 3.3 字重与行高

```css
  --fw-regular: 400;
  --fw-medium:  500;
  --fw-semibold:600;
  --fw-bold:    700;

  --lh-tight:   1.05;  /* 大标题 */
  --lh-snug:    1.25;  /* 中标题 */
  --lh-normal:  1.5;   /* 正文 */
  --lh-loose:   1.75;  /* 长段落 */
```

### 3.4 字距（重要）

```css
  /* 大标题字距收紧 */
  letter-spacing: -0.02em;  /* h1, display */

  /* 小标签字距放宽 + 大写 */
  .label {
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
```

---

## 四、间距与布局

### 4.1 间距系统（8px 基准）

```css
:root {
  --space-1:  0.4rem;   /*  4px */
  --space-2:  0.8rem;   /*  8px */
  --space-3:  1.6rem;   /* 16px */
  --space-4:  2.4rem;   /* 24px */
  --space-5:  3.2rem;   /* 32px */
  --space-6:  4.8rem;   /* 48px */
  --space-7:  6.4rem;   /* 64px */
  --space-8:  9.6rem;   /* 96px */
  --space-9:  12.8rem;  /* 128px - 区块间距 */
  --space-10: 16.0rem;  /* 160px - 大区块间距 */
}
```

### 4.2 栅格与容器

```css
  --container-max: 128rem;   /* 1280px */
  --container-pad: 2.4rem;   /* 24px 左右 padding */

  /* 隐形网格线：把页面切成 12 列，通过 ::before 绘制 */
  --grid-columns: 12;
```

### 4.3 圆角体系

```css
  --radius-sm:  0.8rem;   /*  8px - 小标签 */
  --radius-md:  1.2rem;   /* 12px - 按钮 */
  --radius-lg:  2.4rem;   /* 24px - 卡片、导航 */
  --radius-pill:9.9rem;   /* 99px - 胶囊徽章 */
```

### 4.4 响应式断点

```css
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 992px;
  --bp-xl: 1440px;
```

---

## 五、视觉元素与装饰

### 5.1 隐形网格线（签名特征，必须保留）

整个官网用极淡垂直线把页面切成 12 列，像 CAD 图纸：

```css
.grid-lines {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image: repeating-linear-gradient(
    to right,
    transparent 0,
    transparent calc(100% / 12 - 1px),
    var(--border-grid) calc(100% / 12 - 1px),
    var(--border-grid) calc(100% / 12)
  );
  z-index: 1;
}
```

### 5.2 视觉母题：从"城市天际线"换成"神经分支树"

Lyra 用悉尼天际线做 Hero 插画，Metatree 应该用**自己的视觉母题**。建议：

**方案 A（强烈推荐）：抽象神经网络 / 分支树线描**
- 细白线绘制的分形树结构，从根部向上发散
- 节点处用品牌色（Jade）小光点，像神经元激活
- 可以做缓慢的"光顺着树枝流动"动画
- 寓意完美契合：Meta（网络）+ Tree（分支结构）+ AI（神经网络）

**方案 B：数据流/粒子场**
- 细线粒子从左下向右上流动，形成有方向感的数据流
- 低饱和度，几乎不可见

**方案 C：几何网格 + 节点图**
- 3D 线框网格作为背景，节点间连线
- 更偏技术图纸感

> **推荐方案 A**。它既对应公司名，又对应 AI 本质。Lyra 的插画放在 Hero 右侧，Metatree 的树可以放 Hero 右侧或作为背景装饰。

### 5.3 动效原则

```css
  /* 统一缓动 */
  --ease-out:  cubic-bezier(0.16, 1, 0.3, 1);
  --ease-soft: cubic-bezier(0.4, 0, 0.2, 1);

  /* 时长 */
  --dur-fast:   200ms;
  --dur-normal: 400ms;
  --dur-slow:   800ms;
  --dur-breath: 4000ms;  /* 光晕呼吸 */
```

**允许的动效**：
- 数字递进计数（case study 数据）
- 品牌光晕缓慢呼吸（4s 周期）
- 神经树节点随机发光
- Hover 时 1px 描边从灰变品牌色
- 滚动触发 fade-up（位移 24px，fade 0 → 1）

**禁止**：parallax 视差、粒子爆炸、3D 旋转、快速滑入、弹性回弹。

### 5.4 阴影与光效

```css
  /* 卡片浮起 */
  --shadow-card:
    inset 1px 1px 0 rgba(255,255,255,0.06),
    inset -1px -1px 0 rgba(255,255,255,0.04),
    0 10px 30px rgba(0,0,0,0.4);

  /* Hover 品牌光晕 */
  --shadow-glow:
    0 0 40px rgba(0, 229, 160, 0.15),
    0 0 80px rgba(0, 180, 216, 0.08);
```

---

## 六、组件规范

### 6.1 按钮

**Primary（主 CTA，整站只出现 1-2 处）**
```css
.btn-primary {
  padding: 1.6rem 3.2rem;
  border-radius: var(--radius-md);
  background: var(--bg-glass);
  backdrop-filter: blur(8px) saturate(120%);
  border: 1px solid var(--border-hairline);
  color: #fff;
  font-family: var(--font-mono);
  font-size: var(--fs-body-sm);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: all var(--dur-normal) var(--ease-out);
}
.btn-primary:hover {
  border-color: var(--brand-primary);
  box-shadow: var(--shadow-glow);
}
```

**Ghost（次 CTA，玻璃态）**
- 同上去掉 hover 光晕，仅描边变白

**标签按钮（Tag）**
- 胶囊圆角 `99px`
- 等宽字 + 全大写
- `padding: 0.6rem 1.2rem`

### 6.2 导航栏

```
┌─────────────────────────────────────────┐
│ [Logo] Metatree    Services  Work  About   Book a Call ↓ │
└─────────────────────────────────────────┘
```

- 顶部居中胶囊状玻璃条
- 背景 `rgba(0,0,0,0.3)` + `blur(16px)`
- 圆角 `24px`
- 左侧 Logo（小号 jade 色图标 + "Metatree" 字样）
- 右侧 CTA：`↓ BOOK A CALL`（等宽字 + 箭头图标）
- 滚动时保持粘性，边框随滚动微变亮

### 6.3 卡片

所有卡片共用玻璃态样式：

```css
.card {
  background: var(--bg-glass);
  backdrop-filter: blur(16px) saturate(120%);
  border: 1px solid var(--border-hairline);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-card);
}
.card:hover {
  border-color: var(--border-strong);
}
```

### 6.4 Section 小标签（签名元素）

每个区块左上角必有一个等宽小标签：

```html
<span class="section-label">/ 01 — SERVICES</span>
```

```css
.section-label {
  font-family: var(--font-mono);
  font-size: var(--fs-label);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-tertiary);
}
```

### 6.5 标题的斜杠前缀

大标题使用 `/` 开头（代码注释风）：

```
/ We build AI systems
  that actually ship.
```

### 6.6 数据数字组件

```
  12+         40+         8
──────      ──────      ──────
AI Projects  Enterprise  Production
Delivered    Clients     LLM Agents
```

- 大号数字用 Satoshi Bold，字号 `6.4rem`
- 下方极细横线 1px
- 说明文字用 mono 小字

---

## 七、官网页面结构建议

### 7.1 站点地图

```
Home
├── Services      (AI Strategy / LLM Apps / AI Agents / Data Infra)
├── Work          (案例列表 + 详情页)
├── About         (团队、方法论、技术栈)
├── Insights      (博客/技术文章，可选)
└── Contact       (Book a call 表单)
```

### 7.2 首页区块顺序

| # | 区块 | 内容 | 可信度锚点 |
| --- | --- | --- | --- |
| 01 | **Hero** | 主标题 + 神经树插画 + 双 CTA + YC 式小徽章 | `BACKED BY JR ACADEMY · 5+ YRS IN PRODUCTION AI` |
| 02 | **Trust bar** | `TRUSTED BY` + 母公司产品 Logo 横排 | SigmaQ · 考证匠 · 求职匠 · 牛小匠 · JR Academy |
| 03 | **Stats** | 3 个关键数据 | 5+ 年运营 / 10+ 生产 AI 服务 / 3 款线上 AI 产品 |
| 04 | **Services** | 4 条服务线（见下表）每张卡片带一个"Proof"链接 | 每条服务都对应一个母公司真实案例 |
| 05 | **Work** | 精选 3 个自有产品作为 reference case（错位瀑布流）| training-rag · SigmaQ · jr-prompt-lab |
| 06 | **Approach** | 方法论 4 步：Discover → Prototype → Ship → Operate | 强调"落地"而非"想法" |
| 07 | **Testimonial** | 错位瀑布流客户推荐 | 初期可用母公司内部团队/学员见证 |
| 08 | **CTA Footer** | 巨型标题 + Book a Call | — |

### 7.3 服务矩阵（Services 区块）

Metatree Lab 共三条服务线，建议在官网用 tab 或分组卡片呈现：

#### A1 · AI Systems — Build Track（定制开发）

| 服务 | 周期 | 证据 / Proof |
| --- | --- | --- |
| **AI Strategy Sprint** | 2-4 周 | 交付物：可跑的 POC + 路线图，不是 PPT |
| **RAG & Knowledge Systems** | 4-12 周 | 复用 `training-rag` 架构经验（LangChain + pgvector on Lambda）|
| **AI Agent Development**（主打服务）| 6-16 周 | 为客户搭建生产级 AI Agent — 多步推理、tool use、工作流编排、人机协作。复用 `Agent-Skills` 知识库 + MCP 生态 + 3 款线上 AI Chrome 产品经验 |
| **Custom LLM Applications** | 6-16 周 | 定制化 LLM 应用（对话、生成、分析、审核等），带评估体系和生产监控 |
| **AI Platform Engineering**（retainer）| 长期 | 复用 SigmaQ 多租户 SaaS 架构（Stripe / LMS / Super Admin）|

> **AI Agent 搭建为何是主打服务**：2025-2026 是 agent 元年，企业对 "能自主执行任务的 AI" 需求爆发。Metatree Lab 自有 3 款线上 Chrome AI agent 产品（考证匠 / 求职匠 / 牛小匠），加上 `Agent-Skills-for-Context-Engineering` 的内部方法论沉淀，是极强的可信度锚点。

#### A2 · AI Systems — Adopt Track（落地实施 & 搭建 consulting）

> **关键叙事**：Adopt Track 不是纯培训，是**搭建级 consulting** — 顾问进场帮客户"装上并跑起来"，然后顺带把团队带会。交付物是**可运行的系统 + 配套 SOP + 团队培训**，不是几份 PPT。

| 服务 | 周期 | 典型交付物 |
| --- | --- | --- |
| **Claude Cowork Setup & Consulting**（主打服务）| 2-4 周 | 见下方展开 |
| **OpenClaw Implementation**（主打服务）| 3-6 周 | 见下方展开 |
| **General Workflow Automation** | 2-6 周 | n8n / Make / Zapier 工作流搭建 + 文档 + 团队接手培训 |
| **AI Tools Rollout** | 1-3 周 | ChatGPT / Copilot / Cursor / Gemini 团队铺开 · 许可治理 · 最佳实践手册 |
| **AI Adoption & Enablement**（retainer）| 6-12 周 起 | 员工 AI 培训 · SOP 改造 · Prompt library · Governance 文档 |

---

##### 主打服务 1 · Claude Cowork Setup & Consulting

**这不是 Claude Code 使用培训，是 Claude Cowork 的全套搭建 consulting。** 顾问进场后帮客户从零落地 Claude 生态工作流，交付物是"装好、跑得起来、团队会用"的完整体系。

**典型交付内容**：
- **环境与权限搭建**：Claude Code / Claude Desktop / Claude.ai 团队账号开通、SSO / SAML 集成、用量与成本治理
- **项目级配置**：为客户每个 repo 定制 `CLAUDE.md`、`.claude/settings.json`、hooks、slash commands
- **MCP 服务器接入**：按客户业务接入 MCP servers（数据库、内部 API、知识库、Jira / Linear / Notion / 飞书 / 企微等）
- **Custom Subagents 开发**：为客户特定工作流开发 subagents（code review、test generation、migration、refactor 等）
- **Workflow 示范**：建立 5-10 个客户真实业务场景的示范 workflow（bug 修复、feature 开发、代码重构、文档生成、测试自动化）
- **团队协作 SOP**：多人协作规范、Claude Projects 共享知识库、Prompt library、commit 规范
- **技术培训**：复用 JR Academy 的 Claude Code 实战课程，按客户技术栈重新打包
- **上线陪跑**：2-4 周陪跑期 + 后续 30 天 Slack 答疑

**为什么是主打服务**：
- Claude Code 是 2025-2026 开发者生产力最重要的变量之一
- Metatree Lab 团队**自己天天用 Claude Code** 做 JR Academy 的课程生产、代码重构、bug 修复 — "自己用 + 教别人用"的组合是任何传统 IT 培训公司给不了的
- 市场空档期：大部分企业想上 Claude Code 但不知道怎么 scale 到团队

---

##### 主打服务 2 · OpenClaw Implementation 🦞

> **OpenClaw 是什么**：开源自托管的 agent-first 自动化框架，圈内人称"**龙虾**"（mascot 就是 🦞，官方 slogan 是 "The lobster way"）。TypeScript 插件系统，50+ 集成，内置 ClawFlows 111 个预置工作流，原生支持 23 个消息通道（**包括 WeChat / 飞书 / Slack / Telegram / WhatsApp**）。对标：n8n + LangChain + 消息网关的合体，但 agent-first 且完全自托管。
>
> **为什么 2025-2026 很火**：Agent 元年 + 企业数据合规焦虑 + SaaS 订阅疲劳，三个浪潮叠加，让自托管 agent 框架成为热门选择。OpenClaw 在 GitHub 热度快速攀升，尤其在 agent 开发者圈层已经成为主流话题。

**这是 Metatree Lab 的战略服务，不是工具列表里的一行字。** 咨询行业有个信号：**你用的术语证明你在不在圈里**。在 pitch 的时候能随口说"我们上龙虾（OpenClaw）"，客户立刻知道这家咨询公司是懂行的。

**典型交付内容**：
- **部署上线**：在客户自有 AWS / GCP / 阿里云 / 自建机房上完成 OpenClaw 部署（Docker / K8s）
- **业务 workflow 编排**：从客户业务目标反推出 agent workflow，使用 ClawFlows 模板 + 定制 skill 组合
- **自研 Skill 开发**：用 TypeScript 开发客户专属 skill（接入内部 ERP / CRM / OA / 知识库）
- **消息通道接入**：对接客户既有的 WeChat / 飞书 / 企微 / Slack / Discord，让 AI 助手出现在员工天天用的 IM 里
- **数据安全与治理**：审计日志、权限边界、敏感数据过滤、LLM 调用治理
- **后续运维**：retainer 持续运维与 skill 迭代

**为什么选 OpenClaw 而不是 n8n / Make / Zapier**：

| 维度 | OpenClaw | n8n / Make / Zapier |
| --- | --- | --- |
| **架构** | Agent-first，TypeScript 插件 | Node-based workflow |
| **部署** | **完全自托管**，代码在自己机器上 | SaaS 或有限自托管 |
| **中国市场** | **原生支持 WeChat / 飞书 / 企微** | 微信需要绕行 / 不支持 |
| **数据隐私** | **数据不出内网** | 多数需要发给 SaaS |
| **合规性** | 适合金融 / 医疗 / 政府 / 大型企业 | 合规限制大 |
| **成本** | 开源免费，只付基建成本 | 按用量订阅 |
| **AI 深度** | Agent-first，可以做复杂推理 | Workflow 偏线性 |

**为什么是 Metatree Lab 的战略服务**：
1. **自托管 + 数据不出内网** → 对金融、医疗、政府、大型央/国企有巨大吸引力
2. **原生 WeChat / 飞书集成** → 直接打开华语企业市场，这是 n8n/Zapier 做不到的
3. **开源无订阅费** → 客户 TCO 大幅低于 SaaS 方案，咨询费更好谈
4. **Agent-first 架构** → 与 Metatree Lab 的 `AI Agent Development`（Build Track 主打）形成能力闭环
5. **市场认知空档** → OpenClaw 在澳洲/华语市场知名度还低，早入局就是先发优势

---

##### 典型 Adopt Track 场景

- **Claude Cowork 团队落地**：为工程团队搭建 Claude Code 全套工作流，从 `CLAUDE.md` 到 MCP 到 subagents，顺带把团队带会
- **OpenClaw 企业助手部署**：在客户内网部署 OpenClaw，接入飞书/企微，给员工一个全内部数据可用的 AI 助手
- **销售线索自动评分与路由**（CRM + LLM + workflow）
- **客服工单自动分类与草稿回复**
- **文档批量处理**（合同 / 简历 / 报告 → 结构化数据）
- **内容生产流水线**（素材 → 文案 → 排版 → 多渠道发布）
- **跨系统数据同步**（Airtable / Notion / Google Sheets / CRM）
- **开发提效**：Claude Code + Cursor + Copilot 组合使用，团队代码产出效率翻倍

> **独家协同**：培训环节可直接复用 JR Academy 课程（Prompt 工程、Agent 开发、RAG 实战、LLM 评估、Claude Code 实战），重新打包成客户专属 Workshop / Bootcamp。这是 Metatree Lab 独有、其他 AI 咨询公司抄不走的能力。

#### B · Property Marketing（澳洲房地产营销全栈）

| 服务 | 周期 | 典型交付物 |
| --- | --- | --- |
| **Developer Website** | 4-8 周 | 开发商公司主站（参考 Forma Property）|
| **Project Landing Page** | 2-4 周 | 单楼盘 launch landing + 留资表单 + CRM 对接 |
| **Brand Identity** | 2-6 周 | Logo · 视觉系统 · 户型册 · 销售物料 |
| **Ad Landing Pages** | 1-2 周 | Google / Meta / 微信广告着陆页 · A/B 测试就绪 |
| **Marketing Retainer** | 长期 | 持续内容 · SEO · Ads 运营 · CRM 集成维护 |

**澳洲房地产行业理解（信任背书）**：
- 熟悉 off-the-plan / display suite / settlement 全流程节奏
- 了解 Fair Trading / VOI / Privacy Act 合规要求
- 懂华人买家市场 & 英文主流市场的双语运营

### 7.4 Hero + 双路径分叉（核心设计）

Metatree Lab 有三条业务线（AI Build / AI Adopt / Property），单一 Hero 无法全部承载。采用 **"统一 Hero 品牌叙事 + 紧随其后双路径分叉"** 的混合结构 — 这是 Linear / Vercel / Arc 这类多业务线公司的标准做法。

#### 布局 Wireframe

```
┌────────────────────────────────────────────────────────────────┐
│  [●] Metatree            Services  Work  About      ↓ BOOK A CALL │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  / 01 — METATREE LAB                                           │
│                                                                 │
│  We build systems                         ╱|╲                  │
│  that ship.                              ╱ | ╲                 │
│                                         ╱  |  ╲  [neural tree] │
│  A digital studio from JR Academy.     ●   ●   ●              │
│  AI for teams that build. Marketing      ╲  |  ╱               │
│  for teams that sell property.            ╲ | ╱                │
│  Both shipped with the same                ╲|╱                 │
│  engineering obsession.                     ●                  │
│                                                                 │
│  [ ↓ BOOK A CALL ]    [ SEE OUR WORK → ]                       │
│                                                                 │
│  · BACKED BY JR ACADEMY · 5+ YRS IN PRODUCTION AI ·            │
│                                                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  / 02 — WHAT DO YOU NEED?                                      │
│                                                                 │
│  ┌──────────────────────────┐  ┌──────────────────────────┐   │
│  │ [A] AI SYSTEMS          →│  │ [B] PROPERTY MARKETING  →│   │
│  │                          │  │                          │   │
│  │ Build AI. Or adopt AI    │  │ Developer websites,      │   │
│  │ into your team's flow.   │  │ project landing pages,   │   │
│  │                          │  │ and brand for Aussie     │   │
│  │ · RAG & Agents           │  │ property teams.          │   │
│  │ · Claude Cowork rollout  │  │                          │   │
│  │ · Workflow automation    │  │ · Developer main site    │   │
│  │ · AI platform eng.       │  │ · Single-project landing │   │
│  │                          │  │ · Brand identity         │   │
│  │ Proof: training-rag,     │  │ · Google/Meta ad pages   │   │
│  │ SigmaQ, 3 Chrome AI ext. │  │                          │   │
│  │                          │  │ Proof: Forma Property    │   │
│  └──────────────────────────┘  └──────────────────────────┘   │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

#### 英文 Hero 文案（主推）

```
/ 01 — METATREE LAB

We build systems
that ship.

A digital studio from JR Academy.
AI for teams that build. Marketing for
teams that sell property. Both shipped
with the same engineering obsession.

[ ↓ Book a call ]    [ See our work → ]

· BACKED BY JR ACADEMY · 5+ YRS IN PRODUCTION AI ·
```

#### 中文 Hero 文案

```
/ 01 — METATREE LAB

我们做真正上线的系统。

匠人学院旗下的 Digital Studio。
给技术团队做 AI，给澳洲房产团队做营销 —
同一种工程师的偏执，两种不同的产出。

[ ↓ 预约沟通 ]    [ 查看作品 → ]

· 由匠人学院支持 · 5 年以上生产级 AI 运营经验 ·
```

#### 双路径分叉卡片（/ 02 — WHAT DO YOU NEED?）

| 卡片 | 标题 | Subtitle | Bullet Points | Proof Footer | 跳转 |
| --- | --- | --- | --- | --- | --- |
| **[A]** | AI SYSTEMS | Build AI. Or adopt AI into your team's flow. | · RAG & Agents<br>· Claude Cowork rollout<br>· Workflow automation<br>· AI platform eng. | training-rag · SigmaQ · 3 Chrome AI ext. | `/services/ai` |
| **[B]** | PROPERTY MARKETING | Websites, landing pages, and brand for Australian property. | · Developer main site<br>· Single-project landing<br>· Brand identity<br>· Google/Meta ad pages | Forma Property · ... | `/services/property` |

**卡片样式**：
- 两张并列，等宽，每张占 6 列（桌面）
- 玻璃态卡片 + 极细描边
- 右上角箭头 `→`，hover 时向右推进 4px
- Hover 时描边从灰 → jade（AI 卡）/ 纯白（Property 卡），形成视觉区分
- 移动端堆叠为 100% 宽

### 7.5 "Why Metatree Lab"（About 页核心区块）

建议做一个**能力 × 证据**矩阵表，视觉上用 section 小标签 + 等宽字 + 极细分隔线呈现：

```
CAPABILITY                         PROOF IN PRODUCTION
─────────────────────────────────  ──────────────────────────
/ RAG & Context Engineering         training-rag · Lambda · pgvector
/ Multi-tenant AI SaaS              SigmaQ · 4-tier · Stripe · LMS
/ Agent Orchestration               Agent-Skills · MCP · 3 Chrome ext.
/ AI Content Automation             uni-course-architect · Bootcamp
/ AWS AI Infra & Ops                10+ Lambda services · Terraform
```

这是 Metatree Lab 最强的视觉 + 信任武器，强烈建议放在 About 页最顶部。

### 7.6 Work 页设计（作品集筛选网格）

Work 页要同时展示 AI 和 Property 两类项目，同时保持"一个 studio、多种能力"的叙事 — 用**可筛选的单一网格**，不要做左右分栏（分栏会让两条业务线看起来像两个公司）。

#### 布局 Wireframe

```
┌──────────────────────────────────────────────────────────────┐
│                                                               │
│  / WORK                                                       │
│                                                               │
│  Selected projects across AI, property,                      │
│  and brand — shipped to production.                          │
│                                                               │
│  ─────────────────────────────────────────────────────       │
│                                                               │
│  [ All ]  [ AI Systems ]  [ Property ]  [ Brand ]            │
│                                                               │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐             │
│  │            │  │            │  │            │             │
│  │ training-  │  │   SigmaQ   │  │   Forma    │             │
│  │    rag     │  │            │  │  Property  │             │
│  │            │  │            │  │            │             │
│  ├────────────┤  ├────────────┤  ├────────────┤             │
│  │ [AI·RAG]   │  │ [AI·SAAS]  │  │ [PROPERTY] │             │
│  │ Production │  │ Multi-     │  │ Developer  │             │
│  │ RAG for    │  │ tenant     │  │ group main │             │
│  │ learning   │  │ assess-    │  │ site       │             │
│  │ paths      │  │ ment SaaS  │  │            │             │
│  └────────────┘  └────────────┘  └────────────┘             │
│                                                               │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐             │
│  │            │  │            │  │            │             │
│  │  jr-prompt │  │   MCP      │  │  [Next     │             │
│  │    -lab    │  │  Servers   │  │  project]  │             │
│  │            │  │            │  │            │             │
│  ├────────────┤  ├────────────┤  ├────────────┤             │
│  │ [AI·TOOL]  │  │ [AI·INFRA] │  │            │             │
│  │ Server-    │  │ Tool-      │  │            │             │
│  │ less prompt│  │ exposing   │  │            │             │
│  │ lab        │  │ MCP layer  │  │            │             │
│  └────────────┘  └────────────┘  └────────────┘             │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

#### 筛选器（Tabs）

```
[ All ]  [ AI Systems ]  [ Property ]  [ Brand ]
```

- 4 个 tab，等宽胶囊按钮
- 激活态：描边变 jade + 内部填充 `rgba(0,229,160,0.08)`
- 非激活态：灰色描边
- 切换时卡片用 `stagger` fade-in（每张延迟 60ms）
- URL 同步：`/work?filter=ai` 等，SSR 时直接过滤

#### 卡片（Project Card）

```css
.project-card {
  background: var(--bg-glass);
  backdrop-filter: blur(16px) saturate(120%);
  border: 1px solid var(--border-hairline);
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4 / 5;
  transition: all var(--dur-normal) var(--ease-out);
}
.project-card:hover {
  border-color: var(--brand-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}
```

#### 每张卡片的内容结构

```
┌────────────────┐
│                │
│  [封面图/截图]  │  ← aspect 4:5，顶部 60%
│                │
├────────────────┤
│ [AI·RAG]       │  ← Tag 胶囊（等宽字、小号、jade 描边）
│ training-rag   │  ← 项目名（Satoshi Bold 大号）
│ Production RAG │  ← 一句话描述（灰白小号）
│ for learning   │
│ paths          │
└────────────────┘
```

#### 初期 Work 页项目清单（上线时就能放）

| # | 项目名 | Tag | 简介 | 来源 |
| --- | --- | --- | --- | --- |
| 01 | **training-rag** | AI · RAG | Production RAG serving JR Academy learners. LangChain + pgvector on Lambda. | 母公司 |
| 02 | **SigmaQ** | AI · SaaS | Multi-tenant enterprise assessment SaaS. 4-tier Stripe billing, LMS integration. | 母公司 |
| 03 | **jr-prompt-lab** | AI · Tool | Serverless prompt engineering platform with run history and eval. | 母公司 |
| 04 | **MCP Servers** | AI · Infra | Custom MCP servers exposing course/video/teacher data as tools. | 母公司 |
| 05 | **考证匠 AI Tutor** | AI · Agent | Chrome AI agent for IT cert coaching with screenshot analysis. | 母公司 |
| 06 | **求职匠 Job Hunter** | AI · Agent | Chrome AI agent for Seek/LinkedIn job search automation. | 母公司 |
| 07 | **Forma Property** | Property · Web | Developer group main site, editorial minimal design. | 真实客户 |
| 08 | **牛小匠 AI** | AI · Agent | LMS-integrated university course tutor Chrome extension. | 母公司 |

**Work 页策略**：前期（没真实甲方 AI 案例时）主力展示母公司自有产品作为 reference case + 至少 1-2 个 property 客户案例（Forma Property 必须在）。每 1-2 个月补一个新真实案例。

---

## 八、国际化与双语支持（i18n）

Metatree Lab 官网**必须原生支持中英双语**。这不是锦上添花 — 它直接关系到三条业务线的获客能力。

### 8.1 为什么必须双语

| 业务线 | 主要受众 | 语言需求 |
| --- | --- | --- |
| **AI Build** | 国际/本土技术决策人、YC/a16z 背景创业公司 | **英文主推** |
| **AI Adopt** | 澳洲本土中小企业、HR/Ops/Sales 主管 | **英文主推** |
| **AI Adopt**（华人企业） | 在澳华人企业、跨境业务团队 | **中文需要** |
| **Property Marketing** | 澳洲开发商（英文主流市场）| **英文必要** |
| **Property Marketing** | 华人开发商、华人买家 landing page | **中文必要** |
| **母公司品牌协同** | JR Academy 既有华语学员与客户 | **中文必要** |

> **结论**：英文是主推语言（带来更高单价），中文是战略必需（承接母公司华语资产和澳洲华人市场）。

### 8.2 URL 与路由策略

采用 **英文默认 + 中文带前缀** 的结构（与 JR Academy `jr-academy-web-zh` 保持一致）：

```
https://metatreelab.ai/            ← English（默认）
https://metatreelab.ai/services    ← English
https://metatreelab.ai/work
https://metatreelab.ai/about
https://metatreelab.ai/contact

https://metatreelab.ai/zh/         ← 中文
https://metatreelab.ai/zh/services
https://metatreelab.ai/zh/work
https://metatreelab.ai/zh/about
https://metatreelab.ai/zh/contact
```

- **默认语言**：English（`en`）
- **次语言**：中文简体（`zh`），带 `/zh` 前缀
- **语言切换器**：导航栏右侧放 `EN / 中` 切换按钮（等宽字，小号）
- **浏览器语言检测**：首次访问时根据 `Accept-Language` 自动跳转（只在根路径触发，后续尊重用户手动切换）
- **SEO**：`<link rel="alternate" hreflang="en">` 和 `hreflang="zh-CN"` 双向互指

### 8.3 技术方案

```ts
// 使用 next-intl（与 jr-academy-web-zh 一致，团队已有经验）
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'  // en 默认无前缀，zh 加 /zh
});
```

- **文案存储**：`messages/en.json` + `messages/zh.json`
- **组件使用**：`const t = useTranslations('home')` → `t('hero.title')`
- **数据数组**：长列表（services、work 项目等）用 `*Key` 后缀属性（`titleKey`、`descKey`），渲染时 `t(item.titleKey)`
- **⚠️ Suspense 陷阱**：`useSearchParams()` 必须包 `<Suspense>`（JR Academy 踩过坑，整站会 SSR 静默降级为 CSR）

### 8.4 字体处理（中英字体差异巨大）

```css
:root {
  /* English 字体 */
  --font-sans-en: 'Satoshi', 'Inter', -apple-system, sans-serif;
  --font-mono-en: 'Geist Mono', 'JetBrains Mono', monospace;

  /* Chinese 字体 */
  --font-sans-zh: 'Noto Sans SC', 'PingFang SC',
                  'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  --font-mono-zh: 'JetBrains Mono', 'Noto Sans Mono CJK SC', monospace;
}

html[lang="en"] { font-family: var(--font-sans-en); }
html[lang="zh"] { font-family: var(--font-sans-zh); }
```

- **中文字体只在 `/zh` 路径加载**，避免英文版加载巨大的 CJK 字体包
- **中文字重选择**：Regular 400 + Medium 500（中文字重 Bold 会显得过于拥挤）
- **中文行高要放宽**：`line-height: 1.75`（英文用 `1.5`）
- **中文字号要大一号**：同样视觉重量下，中文需要比英文大 1-2px（因为笔画密度高）

### 8.5 翻译策略：Translate, don't localize

- **品牌名永远用英文**：`Metatree Lab`、`JR Academy`、`Claude Code`、`RAG`、`Agent` 等不翻译
- **Section 小标签永远用英文**：`/ 01 — SERVICES`、`/ WORK` 在中文版也保持英文（强化工程师气质）
- **代码术语永远用英文**：`n8n`、`Stripe`、`AWS Lambda` 等
- **正文意译而非直译**：
  - ❌ 直译："我们发布生存在生产环境的 AI 系统"
  - ✅ 意译："我们做真正上线的系统"
- **中文不要堆叠形容词**：保持和英文同样的克制和短句

### 8.6 不同业务线的语言优先级

| 页面 | 默认语言 | 是否必须双语 |
| --- | --- | --- |
| Home（首页）| EN | ✅ 必须 |
| Services / AI Systems | EN | ✅ 必须 |
| Services / Property Marketing | EN | ✅ 必须（中文版重点服务华人开发商）|
| Work | EN | ✅ 必须 |
| About | EN | ✅ 必须 |
| Contact / Book a Call | EN | ✅ 必须 |
| 楼盘 landing page（为客户做的）| 按客户需求 | 取决于楼盘目标买家 |

### 8.7 客户项目的双语能力是卖点

> Property Marketing 业务线的一大差异化：**我们能同时交付英文主流市场和华人市场的双语 landing page**，澳洲没几家房地产营销工作室能做到这一点。这是 JR Academy 华语背景给 Metatree Lab 的天然红利。

---

## 九、文案语调（Copy Voice）

| 要 | 不要 |
| --- | --- |
| 动词开头、短句、主动语态 | 形容词堆砌、长复合句 |
| 具体数字和结果 | "行业领先"、"创新驱动"这类通稿词 |
| 技术术语（LLM、RAG、agent、eval）| 故作高深的 AI 黑话 |
| 谦逊但自信 | 销售感、吹嘘感 |
| 英文主推 + 中文必备 | 中英混杂在同一句话 |

**示例对比**：
- ❌ "我们是行业领先的 AI 解决方案提供商，致力于为企业赋能"
- ✅ "We ship AI agents that survive production. 12 projects, zero rollbacks."
- ✅ "把 AI 真正跑到生产环境。12 个项目，零回滚。"

---

## 十、复刻核心原则（Do & Don't）

### ✅ Do
1. 背景必须纯黑 `#000`，不要用深灰
2. 隐形网格线必须保留，是工程师审美的灵魂
3. 品牌色只做点缀（≤ 5% 用色比例）
4. 字号对比要极端：Hero 标题巨大，说明文字极小
5. 等宽字 + 斜杠前缀 + section 小标签，三件套不能丢
6. 神经树/分支视觉母题贯穿全站（Hero / 背景 / loading）
7. 所有动效慢、轻、柔，光晕呼吸 4 秒周期
8. Testimonial 用错位瀑布流布局，不要规整对齐
9. 客户 Logo 统一单色化，不保留品牌原色

### ❌ Don't
1. 不要用深蓝/深紫背景（那是通稿 AI 公司的做法）
2. 不要加快速滑入、3D 旋转、视差等炫技动效
3. 不要用 stock photo 或 3D 渲染图
4. 不要堆砌 emoji 和图标
5. 不要大面积铺品牌色
6. 不要用渐变文字标题（显廉价）
7. 不要 Hero 背景视频
8. 不要"开启您的 AI 之旅"这类套话

---

## 十一、开发落地建议

### 11.1 技术栈

| 层 | 选型 | 备注 |
| --- | --- | --- |
| **框架** | Next.js 15（App Router）| 与 JR Academy 生态一致 |
| **样式** | Tailwind CSS v4 + CSS Variables | Design tokens 全部以 CSS var 形式定义 |
| **动效** | Framer Motion | 仅用于克制动效 |
| **i18n** | next-intl | 与 `jr-academy-web-zh` 一致，团队已有经验 |
| **字体** | `next/font` 加载 Satoshi / Geist Mono / Noto Sans SC | 按语言分包加载 |
| **图标** | Lucide | 线性、细描边，风格一致 |
| **插画** | SVG 手绘（神经树） | 或 Rive 做动画版 |
| **表单** | React Hook Form + Zod | Contact / Book a Call |
| **CRM 对接** | HubSpot API / Webhook | Lead 流入母公司 CRM |
| **部署** | Vercel | 与 Next.js 原生契合 |
| **Analytics** | Plausible + Google Tag Manager | Plausible 主数据 + GTM 用于广告 pixel |

### 11.2 项目结构建议

```
metatree/
├── app/
│   ├── [locale]/              # en | zh
│   │   ├── layout.tsx
│   │   ├── page.tsx           # Home
│   │   ├── services/
│   │   │   ├── ai/page.tsx
│   │   │   └── property/page.tsx
│   │   ├── work/
│   │   │   ├── page.tsx       # 筛选网格
│   │   │   └── [slug]/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   └── api/
│       └── contact/route.ts   # 表单提交
├── components/
│   ├── Hero.tsx
│   ├── ServiceSplit.tsx       # 双路径分叉卡片
│   ├── WorkGrid.tsx
│   ├── NeuralTree.tsx         # SVG 插画组件
│   ├── GridLines.tsx          # 隐形网格线
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── SectionLabel.tsx
│       └── LocaleSwitch.tsx
├── messages/
│   ├── en.json
│   └── zh.json
├── lib/
│   ├── tokens.css             # Design tokens
│   └── i18n.ts
└── public/
    └── work/                  # 项目截图
```

### 11.3 性能目标（Lighthouse）

| 指标 | 目标 |
| --- | --- |
| Performance | ≥ 95 |
| Accessibility | ≥ 95 |
| Best Practices | 100 |
| SEO | 100 |
| LCP | < 1.2s |
| CLS | < 0.05 |
| INP | < 100ms |

### 11.4 构建顺序建议

1. **Phase 1（1 周）**：Tokens + 布局框架 + 隐形网格线 + 字体加载 + i18n 基础
2. **Phase 2（1 周）**：Hero + 双路径分叉 + 导航 + Footer + 神经树插画
3. **Phase 3（1 周）**：Services 页 ×2（AI / Property）+ Work 页筛选网格
4. **Phase 4（1 周）**：About（能力 × 证据矩阵）+ Contact 表单 + CRM 对接
5. **Phase 5（3 天）**：中文翻译 + 字体优化 + Lighthouse 调优 + 部署

---

## 十二、PRD 变更历史

| 版本 | 日期 | 变更 |
| --- | --- | --- |
| v1.0 | 2026-04-11 | 初版基于 Lyra Technologies 视觉参考 |
| v1.1 | 2026-04-11 | 加入 JR Academy 母公司定位与 production proof |
| v2.0 | 2026-04-11 | 重构为三条业务线（AI Build / AI Adopt / Property Marketing）|
| v2.1 | 2026-04-11 | 加入 Claude Cowork 培训、AI Agent 主打服务 |
| v2.2 | 2026-04-11 | 加入中英双语 i18n 章节、Hero 双路径分叉设计、Work 页筛选网格 |

---

**文档版本**：v2.2 · 2026-04-11
**文档性质**：PRD + Design Spec
**维护者**：Metatree Lab · Powered by JR Academy
