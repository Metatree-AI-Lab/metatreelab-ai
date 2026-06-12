---
name: proposal
description: 基于 Metatree 真实服务目录（src/data/services.ts 24 项 × 4 tracks）+ pricing.ts + LandIQ 真实定价/物料锚点，对话式收集客户需求后，按销售阶段 (A-E) 决定输出 1-7 件 markdown 物料到 proposals/{slug}-{date}/ 目录。物料包括 proposal / internal-notes / sow / tech-solution / pitch-outline / brochure / client-reply。强制只引用真实服务、真实定价、真实案例 — 0 编造。Use when 用户说"帮我出个方案/proposal"、"客户问询要回复"、"做个报价方案"、"写 SOW"、"回客户 review 意见"、"给 xxx 公司写个 proposal"。NOT for 单页 quote 价格计算（让客户用网站 /quote/）、NOT for 内部 PRD（手写）、NOT for 通用模板填空（必须先对话收集需求）、NOT for HTML/PDF/Next.js 物料站渲染（手动，skill 只产 markdown 内容）。
argument-hint: "[可选: 客户名 或 一句话 brief，如 'TechCorp 想做 RAG 客服']"
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

# Metatree Proposal · 客户提案生成器

## 🚨 6 条铁律（违反任一条都要重做）

| # | 红线 | 反例 | 正确做法 |
|---|------|------|---------|
| 1 | ❌ **禁止编造服务名** | "我们提供 AI 数字孪生服务" | 必须从 `src/data/services.ts` 24 项里挑，slug 一字不差。catalog 里没有就坦诚说"这个不在标准服务包内，需要单独报价" |
| 2 | ❌ **禁止编造价格** | 凭感觉写"$15,000-25,000" | 查 `references/price-bands.md`（24 服务区间锚点）→ 用 `references/landiq-pricing.md` 类案校准 → CO/拆解用 `references/day-rates.md` 工时计算。`src/data/pricing.ts` 仅适用 property 网站类报价拆解。三个 references 文件**任何一个不存在**就停下问用户索取 |
| 3 | ❌ **禁止编造案例 / 客户** | "我们为某 Fortune 500 客户交付了…" | 只用 `services.ts` 的 `proof` 字段 + `src/data/projects.ts` 17 项真实案例 + 服务说明里点名提到的（如 `training-rag` / `JR Academy` / `Hermes Agent` / `OpenClaw`）+ `references/landiq-pricing.md` 里允许公开引用的 LandIQ pitch deck 链接。**绝对禁止**透露 LandIQ（或其他客户）的合同金额 — 那是内部锚点，不是对外筹码 |
| 4 | ❌ **禁止"我们能做任何事"承诺** | "我们可以解决任何 AI 落地问题" | 明确边界 — 推荐什么、不推荐什么、什么需要客户配合。必须含"边界与前提"小节 |
| 5 | ❌ **禁止跳过需求收集** | 用户一句话就直接生成 12 页 proposal | 至少跑完 Step 1 的 7 个核心问题，缺关键字段（预算/时间线/决策人）必须追问；客户已提供 brief 文档时可跳过对应问题 |
| 6 | ❌ **禁止偏离品牌口吻** | "我们将为您提供卓越的端到端 AI 解决方案以驱动业务增长" | Metatree 口吻是：**"不卖 slides，不讲故事"** — 直接、务实、可落地、用真实数字。模仿 `src/components/pages/ContactPage.astro` 的语气，详细规则见 [[references/landiq-stack.md#3]] |
| 7 | ❌ **禁止 skill 渲染 Next.js 物料站** | skill 自己 fork / 修改 land-iq-pitch repo | 物料站是手动后续工序 — 在 Step 5 给用户**指令**而不是替他执行。**例外**：Stage C/E 的 SOW 客户交付版允许直接产 A4 分页 HTML + headless Chrome 导 PDF（见 Step 3.5，AISA 2026-06 起的成熟做法）— 轻量、无 repo 依赖 |
| 8 | ❌ **禁止漏掉 internal-notes.md** | 只生成 proposal.md 发出去 | 每个 client bundle 都必须含 `internal-notes.md`（销售内部备忘 — 客户原话快照 / 决策日志 / 报价底线）。漏了 = 销售流程没闭环 |

---

## 📋 强制工作流（5 步，不许跳）

### Step 0 · 读真实数据（必读 5 件，每项都不许跳）

每次生成 proposal 前都要重新读，因为 catalog 可能更新过：

```
src/data/services.ts                              ⭐ 24 项服务，4 tracks（build / adopt / digital-employee / property）
                                                   字段：slug, track, duration, flagship,
                                                         title{en,zh}, subtitle{en,zh}, summary{en,zh},
                                                         deliverables{en[],zh[]}, proof?{en,zh}
                                                   ⚠️ priceBand 字段不在这里 — 查 references/price-bands.md（不公开）
src/data/pricing.ts                               ⭐ 7 个 category，模块化定价（适合 property track 的网站类项目报价拆解）
src/data/projects.ts                              ⭐ 17 个真实案例，可在 proposal "相关案例" 段引用
src/data/consultants.ts + src/data/team.ts        ⭐ 顾问 + 核心团队（如需在 proposal 里点名）
.claude/skills/proposal/references/             ⭐ 私有锚点目录（gitignored，含真实客户金额）
  price-bands.md                                 ⚠️ 24 服务价格区间锚点（必读）
  day-rates.md                                   ⚠️ 日费率 + retainer tier + 汇率折算（写 CO 必读）
  landiq-pricing.md                              ⚠️ LandIQ AU$90k 真实合同锚点
  landiq-stack.md                                ⚠️ 物料栈 + 销售阶段映射 + 文案口吻
                                                   全部文件 .gitignored。如本地不存在（新机器），停下来问用户索取
                                                   — 没有这些就只能按"区间猜"，质量大幅下降。
.claude/skills/proposal/templates/               ⭐ 7 类物料的 markdown 骨架（入 git，可分享）
  proposal.md                                    主提案
  internal-notes.md                              内部销售备忘（必出，永远不发客户）
  sow.md                                         合同前 scope 锁定
  tech-solution.md                               技术方案 deep-dive
  pitch-outline.md                               18-slide pitch deck 内容大纲
  brochure.md                                    8 页 marketing brochure 大纲
  client-reply.md                                回复客户 review 意见 / 谈判轮次
```

读完在心里建 3 张表：
1. **服务匹配表**：客户痛点 → 候选 service slug → duration（从 services.ts）→ 价格区间（从 references/price-bands.md）
2. **物料 bundle 表**：销售阶段 (A-E) → 该出哪几件 markdown（见 Step 2.5）
3. **定价锚点表**：
   - 第一步：查 `references/price-bands.md` 找到匹配服务的 band
   - 第二步：用 `references/landiq-pricing.md` 类比真实案例校准
   - 第三步：如 CO / 拆解定价 → 用 `references/day-rates.md` 按工时计算
   - **三个文件缺一不可** — `services.ts` 本身不含价格

`references/` 是 untracked 的 — metatreelab-ai 仓库是 public 的，任何客户金额一旦 commit 就全网泄露。新案例锚点按相同格式：`references/{slug}-pricing.md` + `references/{slug}-stack.md`（如有独特销售流程）。永远不要 `git add` 这个目录。

`templates/` 是可入 git 的 design IP（结构 / 章节 / 口吻规范），不含任何客户数据。

---

### Step 1 · 对话式收集需求（3 批次，禁止一次问 20 个）

如果用户已经粘贴了客户邮件 / brief 文档 / 会议纪要，**先解析里面已有的字段**，只追问空白项。

**Batch 1 — 客户与问题（4 个，最关键）**

1. **客户公司** + 行业 + 团队规模（10 人 / 100 人 / 1000+ 人，影响方案规模）
2. **联系人** + 角色（CTO / CEO / 业务负责人 / 采购，决定了 proposal 的语言深度）
3. **要解决的核心业务问题**（一句话描述，不是技术方案）
4. **现状**：现在用什么工具/流程？哪里最痛？

如果用户上来只给了 1 句话 brief（如"TechCorp 想做 RAG 客服"），先把 Batch 1 问完再继续。

**Batch 2 — 范围与约束（3 个）**

5. **预算量级**（AU$/¥）：< 5k / 5-20k / 20-50k / 50-200k / 200k+。如果客户拒答，按 brief 复杂度估一个区间，但在 proposal 里说明"建议预算区间"。
6. **时间线**：要在什么时间点之前看到价值？硬 deadline 还是软目标？
7. **决策流程**：谁拍板？要走采购流程吗？需要走法务吗？（影响合同 / SOW 复杂度）

**Batch 3 — 加分项（视情况）**

8. **数据情况**：有没有现成的文档/数据可以喂给 AI？合规要求？（GDPR / 数据出境 / 行业合规）
9. **过往尝试**：之前试过 AI 吗？什么效果？踩过什么坑？
10. **proposal 语言** + **交付格式**：中文 / 英文 / 双语；只要 .md / 还是要 PDF。默认中文 .md；**SOW 客户交付版默认英文 A4 HTML + PDF**（Lightman 2026-06-11 拍板"不要中文"— 中文 .md 只作内部工作稿，不发客户）。

**Batch 3 之后** — 复述需求，让用户确认你听懂了再生成。模板：

> 我理解的是：[公司] 现在 [现状]，希望 [目标]，预算 [区间]，时间 [节点]。最关键的成功标准是 [指标]。这个理解对吗？

---

### Step 2 · 服务匹配（在心里建表，不要直接动笔）

按以下规则从 `services.ts` 里挑服务：

| 客户场景 | 起手服务（必含） | 可选追加 |
|---------|----------------|---------|
| 第一次接触 AI，方向不清 | `ai-strategy-sprint` (1-2w) | 之后再上 build / adopt |
| 有具体业务问题，要可运行系统 | flagship 优先：`ai-agent-development` / `digital-employee-core` / `rag-knowledge-systems` | + `ai-platform-engineering` retainer |
| 已经用 AI，要规模化 / 团队上手 | `claude-cowork-setup` + `enterprise-ai-training` | + `ai-tools-rollout` |
| Slack/微信里要个会干活的 AI | `digital-employee-pilot` → `digital-employee-core` | + `enterprise-memory-platform` |
| 自动化某个流程 | `ai-agent-workflow-automation` 或 `workflow-automation` | + `openclaw-implementation` |
| 房产开发商 / 楼盘营销 | `developer-website` / `project-landing-page` | + `ai-marketing-collateral` |
| 仅需要个网站 | 直接引导客户去网站 `/quote/` 自助报价，不出 proposal |

**挑选原则**：
- 主推 **1 个旗舰服务**（`flagship: true`）+ **0-2 个支撑服务**。
- 不要一次堆 5-6 个，会让客户晕。如果需求复杂，拆"Phase 1 / Phase 2 / Phase 3"分期。
- 标 `retainer` 的服务不要做主推（除非客户已经明确要长期合作），它是 follow-on。

**价格估算**：
- 服务有 `priceBand` 字段就直接用。
- 没有就**先查 `references/landiq-pricing.md` 找最接近的锚点**，再基于 duration 微调：
  - 1-2w sprint：AU$8-20k
  - 2-6w build：AU$15-60k（参照 LandIQ 锚点 B "25%-50% Phase 1" 档）
  - 6-12w core：AU$80-200k（参照 LandIQ Phase 1 = $90k 锚点）
  - retainer：AU$800-1,800/月（直接复用 LandIQ Continuity / Continuity+ 两档）
  - Principal advisory：AU$880/hr
  - Pay-as-you-go consultant：AU$45-880/hr，按 seniority
- 大型 build 项目优先**按 milestone 分期**报价（参照 LandIQ M0-M4 拆法）— M0 Technical Solution Package 单独 ~$5k 是个开局好钩子。
- Property track 的网站类项目，从 `pricing.ts` 累加模块（基础页数 + design + features + AI + launch）后给个区间，并附 quote calculator 链接 `https://metatreelab.ai/quote/`。
- AI collateral 类项目（pitch deck / brochure / investor deck），参照 LandIQ 锚点 A 三档（5-12k / 12-25k / 25-45k）按工作量类比。
- 所有报价都说"含税前 AUD，最终以合同为准"，**禁止给精确单价**（如 "$23,500"）— 用区间（"$20-30k"）保留谈判空间。
- 合同实务（Change Order cap 10% / net-14 / 60 天 no-fault termination / Queensland 法 / liability cap = total fees paid）直接套 LandIQ 锚点 D，每份大型 build proposal 都该带。
- **小单关系价（< AU$10k 的 Phase 1 入场单）**：可用获客有效费率（≈标准价 1/3，具体数字见 `references/day-rates.md`，**不写进任何 tracked 文件**）— 前提是 internal-notes.md 如实记录真实成本与亏损额、毛利靠 follow-on（AISA 2026-06 先例，金额见该 bundle internal-notes）。
- **$0 并入项（换签约的让步）**：客户点名要、实施 ≤2 天的小项可以 $0 bundled 进当期，但必须同时做到：① SOW 在 §00/§05/§07 三处写明 *bundled at no additional charge*（一次性安排）；② 范围用 §01 正面措辞锁死（"fixed chart set" / "one standard template"），不靠排除列表；③ internal-notes 记"$0 项到此为止"底线，再加功能一律 CO / Phase 2；④ 价格不动、工期如实加（AISA：3 个 $0 项换 5→6 周）。

---

### Step 2.5 · 决定 artifact bundle（哪几件物料）

判断销售阶段（A-E）— 不用单独问客户，从已收集的信号推断：

| Stage | 信号（任一即可） | Deal band |
|-------|---------------|---------|
| **A · 询盘 / cold-warm lead** | 客户首次接触 / 表单 / Larry 转介 / 还没 30-min call | 任意 |
| **B · Active discovery** | 客户回了邮件 / 同意 call / 在比较方案 | < AU$40k 偏 A，≥ 偏 B |
| **C · Active deal** | 客户口头同意 / 让发 SOW / 法务在 stand-by | AU$40k+ |
| **D · Strategic** | Deal > AU$80k / 客户是 logo 级 / 需要内部 socialize | AU$80k+ |
| **E · Negotiation round** | 客户回了 review 意见 / 提了 13 个 numbered points | 已在 C/D 之后 |

判完阶段，按 [[references/landiq-stack.md#2]] 决策表挑物料。**最小 bundle**（任何 stage 都必出 2 件）：

```
proposals/{client-slug}-{date}/
├── proposal.md            ← 永远出
└── internal-notes.md      ← 永远出（销售内部备忘）
```

按 stage 追加：

| Stage | 追加 |
|-------|-----|
| B（active discovery） | + `tech-solution.md`（如客户决策人是技术角色） |
| C（active deal） | + `sow.md`（合同前 scope 锁定）+ `tech-solution.md`（若 B 还没出） |
| D（strategic） | + `pitch-outline.md` + `brochure.md`（内容大纲，不渲染） |
| E（negotiation） | + `client-reply.md`（取代或补充已有 bundle） |

**完整 D-stage bundle 最大形态**：

```
proposals/{client-slug}-{date}/
├── README.md              ← bundle 索引（写最后，含 stage / 文件清单 / 下一步）
├── proposal.md
├── internal-notes.md
├── tech-solution.md
├── sow.md
├── pitch-outline.md
└── brochure.md
```

E-stage（重新谈判）通常在已有 bundle 之上加 `client-reply.md`：

```
proposals/{client-slug}-{date-of-original}/
└── ...（原有文件不动）
proposals/{client-slug}-{date-of-reply}/
├── README.md              ← 说明是 round N，关联上次 bundle 路径
├── client-reply.md
└── internal-notes.md      ← 谈判 battle map（永远出）
```

**E-stage 变体 · scope 扩展轮（SOW v2.0）** — 已有签前 SOW，客户要求加模块（AISA 2026-06 先例）：

- 新建 `{slug}-{new-date}/`，核心物料 = **sow.md v2.0**（不重复出 proposal）+ internal-notes + README
- v2.0 必含：**§00 v1/v2 对照表**（范围/总价/工期/新增项逐行对比）+ supersede 条款（v2.0 生效即取代 v1.0；已开工的 milestone 按 v1.0 计费）
- 新增模块全部打包进一个**新 milestone**（如 M4 新模块包），基础包 M0-M3 逐项不动 — 客户一眼看出"原来的没变、新的多少钱"
- 客户怕月费 → §07 加 **AWS 月费逐项预估表**（数据库 RDS 独立成行、给总区间如 ≈AU$60-95/月）+ AWS Budget 告警交付项 + 上线首月账单 review；强调全在客户自己账户、pass-through 不加价
- 涉法律敏感功能（电子印章/电子签名）→ §04 假设（Client 在 Mx 启动前提供素材 + **书面授权**；拿不到 = 该项不启动、不影响其他模块验收）+ §08 免责（按授权渲染、法律效力责任在 Client）
- 客户承诺提供的输入（表单规格/学校信息/印章图样）→ 全部进 §04 假设并带 deadline（kickoff 5 BD 内 / Mx 启动前）— 拖延责任归客户

---

### Step 3 · 渲染物料 bundle

**输出目录**：`proposals/{client-slug}-{YYYY-MM-DD}/`（注意是**目录**，不是单文件）

- `client-slug` = 客户公司名 kebab-case（如 `acme-corp` / `taobao-jiankang`）
- `YYYY-MM-DD` = 今天日期（用 `date +%Y-%m-%d` 拿）
- 目录已存在 + 同一天追加新物料 → 写入同目录
- 新一轮（如 round 2 谈判物料）→ 新建 `{slug}-{new-date}/`

**生成流程（对每个 Step 2.5 决定要出的物料）**：

1. **读模板**：`Read .claude/skills/proposal/templates/{artifact}.md`
2. **填占位符**：把 `{{client-company-name}}` `{{...}}` 等 mustache-style 占位符替换为真实数据。**每个 frontmatter 字段都必须填**（client / contact / stage / generated / deal_band / artifact / locale），不留默认 `{{...}}`
3. **填正文**：每节按客户场景填具体内容 —
   - **服务 / deliverable**：从 `src/data/services.ts` 真实 service 取，不要复读 subtitle，要结合客户场景重写
   - **价格**：如本机有 `references/landiq-pricing.md`，按锚点折算；否则用 services.ts 的 `priceBand`
   - **案例**：只引用 services.ts 的 `proof` / projects.ts 真实条目 / LandIQ 公开 pitch deck（其他客户金额绝禁）
   - **客户原话**：保留原始措辞，不润色
4. **写文件**：`Write proposals/{slug}-{date}/{artifact}.md`
5. **重复**直到 Step 2.5 选的所有物料都生成完
6. **最后**生成 `README.md` — bundle 索引

**README.md 模板**（每个 bundle 都要有，最后生成）：

```markdown
# Bundle · {{客户名}} — {{YYYY-MM-DD}}

**Stage**: {{A/B/C/D/E}} · **Deal band**: {{AU$X-Yk}} · **Locale**: {{zh/en}}

## Files

- [proposal.md](./proposal.md) — 主提案（对外）
- [internal-notes.md](./internal-notes.md) — 内部销售备忘（不发客户）
{{按 stage 列出实际生成的文件链接}}

## What to do next

1. Review proposal.md §01（需求复述）+ §09（边界）— 这两段最容易出错
2. {{Stage B/C：review tech-solution.md 和 sow.md，对齐 scope}}
3. {{Stage D：手动 fork land-iq-pitch repo 做完整物料站，见下方提示}}
4. 发给客户前看 internal-notes.md §03 决策链 — 确认每个 stakeholder 都覆盖到

{{仅 Stage D bundle 才加这段：}}
## Stage D handoff to Next.js collateral site

参见 references/landiq-stack.md §6 完整步骤。简版：

1. `cp -r /Users/lightman/Documents/sites/LandIQ/land-iq-pitch ~/Documents/sites/{{client-slug}}-pitch`
2. 改 `src/app/globals.css` 里 brand tokens
3. 把本 bundle 里 pitch-outline.md / brochure.md / tech-solution.md / sow.md 各节内容填进对应 sub-app 的 page component
4. 跑各 sub-app 的 puppeteer PDF 导出脚本
5. 部署 GitHub Pages → 公开链接发客户

~1-2 天工程量。
```

**English bundle**：所有模板支持中英文 —`locale: en` 时填英文内容、frontmatter 改 en、章节标题翻译（`01 · What we heard` / `02 · Recommended approach` / `03 · Deliverables` / `04 · How we work` / `05 · Investment` / `06 · Proof` / `07 · Team` / `08 · Scope & assumptions` / `09 · Next steps`）。引用 service 的 `.en` 字段。语气模仿 `src/components/pages/ContactPage.astro` 英文版："No slides. No storytelling."

---

### Step 3.5 · SOW 客户交付版（A4 分页 HTML + PDF）— Stage C/E 可选

`sow.md` 是工作稿；要直接发客户时产 **`sow-en.html`**（默认英文，见 Step 1 Batch 3 #10）。AISA 2026-06 验证过的做法：

**设计**（LandIQ 风格）：森林绿 `#134a32` / 主绿 `#2d7a5a` / 金 `#c4952a` `#e9c46a`；字体 DM Serif Display（标题）/ Source Serif 4（正文）/ Inter（表格、标签）。

**分页结构**（客户会 Cmd+P 存 PDF，所以必须真分页）：

- `.page { width:210mm; height:297mm; overflow:hidden; padding:15mm 17mm 22mm; display:flex; flex-direction:column }` + `@page { size:A4; margin:0 }`
- 每页绝对定位 footer `.page-num`（bottom:7mm，"Page N of M" + Commercial in Confidence）
- P1 封面 full-bleed：base64 内嵌贴客户行业的真实感照片（AISA = 中学生）+ 品牌色渐变压底；封面列模块清单 + 总价 + 页数
- **每页保守填充** — 内容顶到 footer 是历史最高频返工项（AISA 改了 3 轮）；加内容宁可加页重排，逐页检查
- 大文件操作：base64 行 ~700KB，**禁止对全文 grep 通用词**，用 `grep -n "精确短语"` 或 `sed -n 'START,ENDp'`；整页重排写 python 脚本按 `<!-- PAGE N -->` 注释切块重建

**PDF 导出**（用户要 PDF 时直接跑，不算"渲染物料站"）：

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless \
  --no-pdf-header-footer --print-to-pdf="{Client}-SOW-v{X}.pdf" "file://$PWD/sow-en.html"
```

导完验证 PDF 页数 = HTML 页数（多出来 = 某页 overflow 溢出到下一页了）。

---

### Step 4 · 自检（每个生成的文件都走一遍）

写完整个 bundle 后，对每个 .md **逐条 verify**：

**通用项（所有 .md 都查）**

- [ ] frontmatter 7 个字段都填了（client / contact / stage / generated / deal_band / artifact / locale），没留 `{{...}}`
- [ ] 所有 `{{...}}` mustache 占位符都已替换（用 `grep -n "{{" file.md` 反查，应为 0）
- [ ] 服务名都能在 `src/data/services.ts` grep 到（用 Bash `grep "slug: '...'" src/data/services.ts`）
- [ ] 价格用区间，没出现精确数字（如 "$23,500" → 改 "$20-30k"）
- [ ] 没出现其他客户的合同金额（LandIQ $90k / 其他客户都是内部锚点）
- [ ] 中文版不混入英文长句（slug / 技术词允许，营销话术不允许）

**proposal.md 专项**

- [ ] §01 含客户原话或具体业务场景，不是套话
- [ ] §03 deliverables 是从 service.deliverables 复制，不是编的
- [ ] §06 案例来自 services.ts proof / projects.ts / 或 LandIQ 公开 pitch deck
- [ ] §09 边界段非空，写出了客户配合事项

**internal-notes.md 专项**

- [ ] §01 客户原话快照真有原话引用（不是改写）
- [ ] §02 销售策略含报价底线（不是空区间）
- [ ] §03 决策链至少识别出 decision maker + 1 个其他角色
- [ ] §05 下一步含具体日期（不是 "TBD"）

**sow.md 专项**

- [ ] §05 milestones 总价 = §07 合同总价
- [ ] §02 Scope (Out) 非空，至少 3 条 explicit exclusion — 但**只列贵的/高风险的**（学费级收款、日历/视频会议集成、AI 包、多语种…）。不要给每个小模块逐条写 "scope limit" 排除清单 — 客户会逐条 argue（AISA 2026-06-12 教训，三条被要求删掉）；小模块边界用 §01 正面措辞锁（"fixed chart set" / "one standard template" / "daily snapshots"）
- [ ] 有 $0 并入项时：§00 / §05 / §07 三处都写了 *bundled at no additional charge*
- [ ] 客户要提供的每项输入（素材/账户/KYC/书面授权/表单规格）都进了 §04 假设且带 deadline
- [ ] §08 法律条款没改基础默认值（Queensland 法 / net-14 / 60 天 / liability cap = fees paid）；涉电子印章/签名时含"按授权渲染、法律效力归 Client"免责
- [ ] 出了 `sow-en.html` 时：HTML 与 .md 内容一致、页脚页码连续、无页面 overflow（见 Step 3.5）

**tech-solution.md 专项**

- [ ] §02 架构图描述具体（不是 "客户系统 → 我们的方案 → 输出"）
- [ ] §04 cloud 成本估算与 services.ts / LandIQ 锚点一致
- [ ] §09 含至少 2 个 specific risk + mitigation

**pitch-outline / brochure.md 专项**

- [ ] 数字、数据源都是真实可验证的（IBISWorld / 政府数据 / 客户提供），没有"市场预计达到 X 亿"那种凭空数字
- [ ] 末尾含"如何渲染成实际 deck/PDF"的手动步骤提示

**client-reply.md 专项**

- [ ] 客户提的每个点都单独成节回应（不能合并 "对您提的几个问题，我们的回答是..."）
- [ ] 总结表覆盖所有 numbered points
- [ ] 内部 Battle Map 段标记了"不发客户"

---

### Step 5 · 输出 + 下一步建议

**最终消息模板**（输出给用户，≤7 行）：

```
✓ Bundle 已生成：proposals/{client-slug}-{date}/
  Stage {{A/B/C/D/E}} · Deal band {{AU$X-Yk}} · Locale {{zh/en}}
  Files: {{N}} 个 — {{file1, file2, ...}}
推荐主服务：{{service-slug}}（{{duration}}，{{price-band}}）
下一步：
  1. 看 proposal.md §01（需求复述）+ §09（边界）— 最容易出错
  2. 看 internal-notes.md §03 决策链 — 确认 stakeholder 全覆盖
  {{Stage C/D 时加：}} 3. 客户一旦签 SOW → 用 /fde-embed 启动交付（同 slug，读本 bundle 当上下文）
  {{Stage D 时加：}} 4. 见 README.md 末尾 — 如做完整 collateral 站，手动 fork land-iq-pitch repo
```

**何时建议升级到 Next.js 物料站（Stage D handoff）**：

只在以下任一条件满足时，README.md 才包含"fork land-iq-pitch repo"提示：
- Deal band ≥ AU$80k
- 客户是 logo-tier（行业头部 / 上市公司 / 知名 VC backed）
- 客户明确要求"在线可看的 pitch deck / 投资人想看 demo"
- 销售 timeline > 2 个月（值得投入 1-2 天做物料站）

否则不主动建议 — markdown bundle 已经够用。

---

### Step 6 · 签约后交接给 `/fde-embed`

`/proposal` 的职责在 SOW 签字那一刻结束。之后的 kickoff / sprint / status / change order / milestone gate / handoff 全部由 `/fde-embed` 接管。

**衔接规则**：

| Pre-sale 产出 | Post-sale 用法 |
|---------------|---------------|
| `proposals/{slug}-{date}/sow.md` | `/fde-embed` 读它做"交付宪法"，所有 scope/价格/milestone 以此为准 |
| `proposals/{slug}-{date}/tech-solution.md` | `/fde-embed` K0 启动时直接接 M0 deliverable 内容 |
| `proposals/{slug}-{date}/internal-notes.md` | `/fde-embed` 的 K0 kickoff §06 风险 watchlist 直接 carry over |
| 此 slug | `/fde-embed` 的输出目录是 `delivery/{slug}/`（**注意不含日期** — 交付是持续的） |

**触发提示**（Stage C/D bundle 生成后必须在最终消息里说）：

> ✓ SOW 已就绪 (proposals/{slug}-{date}/sow.md)。客户签字后，**用 `/fde-embed {{slug}} kickoff`** 启动交付，会自动读本 bundle 当上下文。

不要在 `/proposal` 里写 kickoff / status / CO 之类 — 那是 `/fde-embed` 的职责，写在这里 = 跨界 + 重复。

---

## 🔧 触发短语示例

用户说以下任意一种都应该激活此 skill：

- "帮我给 XX 公司出个 proposal"
- "客户发来需求了，写个方案"
- "做个报价方案"
- "写个 SOW"（直接跳到 Stage C，但先确认有 proposal 基础）
- "回客户 review 意见"（直接跳到 Stage E，需 client review 文档）
- "/proposal TechCorp"
- "把这封询问邮件转成 proposal"（先解析邮件再走 Step 1）

不要在以下场景误触发：
- "网站上 /quote 怎么改" → 是改前端代码，不是出 proposal
- "我们的服务有哪些" → 直接答，不要走 proposal 流程
- "写个项目 PRD" → PRD 是内部文档，手写或用其他 skill
- "做个 pitch deck"（要求渲染成实际 deck，不只大纲）→ skill 只出 outline.md，渲染要手动 fork land-iq-pitch repo

---

## 📂 输出位置约定

- 所有 bundle 落在仓库根目录 `proposals/{client-slug}-{YYYY-MM-DD}/`（**目录**，不是单文件）
- 每个 bundle 至少 2 个 .md（proposal + internal-notes），最多 7 个
- `proposals/` 已加入 `.gitignore`（含客户敏感数据）— 永远不 commit
- 如未来需要把某个 bundle 分享给同事，单独打 zip 通过私有 channel 发，不入 git
- `references/` 同样 gitignored — 含真实客户合同金额，永不 commit
- `templates/` 入 git — 是 design IP，不含任何客户数据
- 老 bundle 不要删，作为 sales playbook 内部资产长期保留
