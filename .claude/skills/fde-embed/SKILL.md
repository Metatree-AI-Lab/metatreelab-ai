---
name: fde-embed
description: 签约后的交付驱动 skill — 基于已签 SOW（来自 proposals/{slug}-{date}/），按交付阶段 (K0-K4) 决定输出 1-5 件 markdown 物料到 delivery/{slug}/ 目录。物料包括 kickoff / sprint-plan / status-report / change-order / milestone-gate / handoff。强制只引用已签 SOW 真实 scope/价格/milestone — 0 编造。Use when 用户说"客户签了 SOW 帮我准备 kickoff"、"出本周客户 status"、"客户要加需求做个 change order"、"M1 准备 gate review"、"项目结束做交付 handover"。NOT for pre-sale 提案（用 /proposal）、NOT for 单纯内部 sprint 管理（用 issue tracker）、NOT for 客户邮件草稿（手写）、NOT for 财务发票生成（手动走 Xero）。
argument-hint: "[可选: 客户名 或 一句话场景，如 'TechCorp 下周 kickoff' 或 'M1 gate review']"
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
---

# Metatree FDE Embed · 交付期物料生成器

> Forward Deployment Engineer pattern — 销售线索 → 提案 → 签约（`/proposal` 覆盖）→ **kickoff → sprint → M-gate → change order → handoff（本 skill 覆盖）**。
> 核心定位：让客户看到的"交付纪律"和承诺的"专业感"对齐，让顾问看到的"交付边界"和合同对齐。

---

## 🚨 8 条铁律（违反任一条都要重做）

| # | 红线 | 反例 | 正确做法 |
|---|------|------|---------|
| 1 | ❌ **禁止偏离已签 SOW scope** | 客户口头加需求就直接做 | 不在 `sow.md §01 In-scope` 里的事 → 必须先生成 `change-order.md` 给客户签字才能动 |
| 2 | ❌ **禁止编造 milestone / 价格 / 时间线** | 凭感觉写 "M1 大概下周交" | 全部从 `sow.md §05 Milestones` 表里抄，日期按真实交付日，不臆测 |
| 3 | ❌ **禁止 silent acceptance** | M1 交付后没收到客户回复就当过了 | 严格走 SOW §05.acceptance — Day 5 + Day 8 主动 reminder，10 BD 内无书面动作 → 进入 joint review |
| 4 | ❌ **禁止"内部坏消息客户不知道"** | sprint 延迟 / 关键人离职 / 第三方 API 涨价，等出事再说 | 任何影响交付 timeline / cost / quality 的事，**当周 status-report 必须如实写**。客户晚一天知道 = 信任少一天 |
| 5 | ❌ **禁止 status report 含敏感内部信息** | 客户 status 里写"成本压力大、毛利不够" | 客户看到的 status = 进度 + 风险 + 决策需求；财务 / 利润 / 内部 retro 只写在 `delivery/{slug}/internal/` 里 |
| 6 | ❌ **禁止跳过 milestone gate 评审** | M1 觉得做完就直接 M2 | 每个 milestone 都要生成 `milestone-gate.md` — 含 evidence package + acceptance checklist + 客户签字位 |
| 7 | ❌ **禁止 change order 不报价 / 不签字就开工** | "这个先做着，价格回头算" | 任何 CO 必须含金额 + 时间影响 + 客户书面同意才能动一行代码 |
| 8 | ❌ **禁止漏掉 handoff retro** | 项目完结发完 handover doc 就停 | M4 / final delivery 必须含 retro（内部）+ case-study seed（mining `projects.ts` 弹药）+ testimonial ask（客户邮件草稿） |

---

## 📋 强制工作流（5 步，不许跳）

### Step 0 · 读真实数据（必读 4 件）

每次触发前都要重新读，因为合同状态、milestone 进度、积压问题都在变：

```
proposals/{slug}-{date}/sow.md                ⭐ 已签 SOW — 这是交付期的"宪法"
                                               读：§01 scope, §05 milestones, §06 governance, §07 fees
proposals/{slug}-{date}/tech-solution.md      ⭐ M0 技术方案（如已生成）— 架构 / stack / API design
proposals/{slug}-{date}/internal-notes.md     ⭐ pre-sale 内部备忘 — 客户决策链 / 价格底线 / 已知风险
delivery/{slug}/log.md                        ⭐ 本项目历次 fde-embed 决策日志（首次触发不存在则跳过）
src/data/services.ts                          ⭐ 真实服务目录 — 如客户后续要加服务 (CO)，必须从这里挑
```

如果 `proposals/{slug}-{date}/` 不存在（客户走线下签的 SOW，没用 `/proposal` 生成）：
- **不要硬跑** — 先停下问用户："这单没走 /proposal 流程，能否粘贴 SOW 文本？至少需要 milestones / scope / fees 三段"
- 把客户提供的 SOW 内容**先存成** `proposals/{slug}-MANUAL/sow.md`，再继续

读完在心里建 4 张表：
1. **Milestone 表**：M0/M1/M2/M3/M4 → 计划日期 → 实际状态 → 已开 invoice？
2. **Scope 边界表**：哪些是 In-scope（直接做）、哪些是 Out-of-scope（要 CO）、哪些模糊（先和客户对齐）
3. **风险 / 已知坑表**：来自 `internal-notes.md` 的 watch-out 项 — 比如"客户 PO 上次催得急但决策慢"
4. **§04 前置依赖表**：SOW §04 里所有 Client-provided 输入（Stripe 开户/KYC、印章书面授权、表单规格、素材…）→ 各自 deadline → **K0 kickoff 当天逐项发 checklist 邮件**；某项前置没到 = 对应模块不启动、不影响其他模块验收，写进 kickoff.md 风险区（AISA 先例：印章授权没拿到 = B.5 盖章 PDF 不启动）

---

### Step 1 · 识别交付阶段 (K0-K4)

5 个阶段，触发场景不同 — 不许把 5 件物料一次性都生成：

| 阶段 | 触发场景 | 典型用户 prompt |
|------|---------|---------------|
| **K0 · 启动 (Kickoff)** | 客户刚签 SOW，要准备启动会和 week-1 | "TechCorp 签了，下周一 kickoff"、"准备 kickoff 包" |
| **K1 · 运行期 (Sprint cadence)** | 项目在跑，每周例行 status / sprint plan | "出本周 status"、"下周 sprint plan"、"周五 sync 准备" |
| **K2 · Milestone Gate** | 某个 M0/M1/M2/M3/M4 完成，要做 gate review + 收钱 | "M1 准备 gate"、"客户要验收 M2" |
| **K3 · Change Order** | 客户提出超出 SOW scope 的需求 / 上游变化触发 | "客户要加多语言"、"OpenAI 涨价我们怎么办"、"做个 CO" |
| **K4 · Handoff / Closeout** | 最后一个 milestone 完成或合同终止，要交付 + 收尾 | "项目完结"、"做 handover"、"客户准备自己接手" |

如果用户没明说阶段，**先问一句**：现在客户在哪个阶段？把上面这张表给他看。

---

### Step 2 · 决定本次 bundle 出哪几件物料

按阶段对应物料矩阵（最小 1 件，最大 3 件一次出）：

| 阶段 | 必出物料 | 可选物料 | 不出（在别的阶段出） |
|------|---------|---------|------------------|
| **K0** | `kickoff.md` + `sprint-plan.md` (sprint-1) | — | status-report (要等 sprint-1 跑完) |
| **K1** | `status-report.md` (本周) + `sprint-plan.md` (下周) | — | milestone-gate (没到 M-边界) |
| **K2** | `milestone-gate.md` | + `status-report.md`（如果同时是周末） | sprint-plan (等 gate 过了再发下个 sprint) |
| **K3** | `change-order.md` | + `status-report.md`（CO 说明放本周 status 附注） | milestone-gate (除非 CO 触发 milestone 调整) |
| **K4** | `handoff.md` | + `milestone-gate.md` (final milestone gate)、`status-report.md` (final report) | sprint-plan、change-order |

**永远不要一次出 5 件**。每个交付动作的 cadence 不同 — sprint 周节奏、M-gate 按 milestone、CO 按事件触发。混在一起 = 客户被淹没 = 没人看。

---

### Step 3 · 生成到 `delivery/{slug}/` 目录

目录结构：

```
delivery/{slug}/
├── log.md                          ⭐ 决策 / 触发日志（每次跑 /fde-embed 都追加一行）
├── kickoff.md                      K0 出一次
├── sprints/
│   ├── 2026-W22-plan.md            sprint-plan（按 ISO 周编号）
│   ├── 2026-W22-status.md          status-report（同周的对外版）
│   ├── 2026-W23-plan.md
│   └── ...
├── milestones/
│   ├── M0-gate.md
│   ├── M1-gate.md
│   └── ...
├── change-orders/
│   ├── CO-001-{short-name}.md      CO 按顺序编号 + 简短主题
│   └── CO-002-{short-name}.md
├── handoff.md                      K4 出一次
└── internal/                       ⭐ 客户永远看不到的内部资料
    ├── retro-W22.md                每周内部 retro（不发客户）
    ├── retro-M1.md                 milestone retro
    ├── financial-burn.md           成本 vs 收入跟踪
    └── risk-watchlist.md           客户不该看的内部风险（如客户 PO 决策慢、第三方供应商不稳）
```

**关键命名规则**：
- 客户对外的物料放根目录或 `sprints/`、`milestones/`、`change-orders/`
- 任何含成本 / 利润 / 客户负面评估 / 团队人事的内容 → `internal/`
- 周编号用 ISO week (`YYYY-WNN`)，月份不够精确
- CO 按 001/002/003 顺序编号，**永远不复用编号**（即使作废也要留个 `CO-003-VOID.md` 标记）

---

### Step 4 · 写决策日志到 `delivery/{slug}/log.md`

每次 `/fde-embed` 运行后，在 log.md 末尾追加一行：

```markdown
| 2026-05-23 | K1 | status-report W22 + sprint-plan W23 | 客户对 M1 demo 反应正面，下周加快推进 |
| 2026-05-24 | K3 | CO-002 (中文 UI) | 客户口头要求加中文界面，按 +AU$8k / +2w 报价 |
| 2026-05-30 | K2 | M1 gate review | 通过，invoice ${{X}} 已发 |
```

这是项目交付的"黑匣子" — 出事时（客户投诉 / 法务争议 / 团队成员换人）唯一能还原"什么时候做了什么决定"的来源。

---

### Step 5 · 自检清单（每类物料独立 verify）

生成后逐项过一遍：

**所有物料通用**：
- [ ] frontmatter 里 `client`、`stage`（K0-K4）、`week_iso` (`YYYY-WNN`) 写对
- [ ] 没有 `{{占位符}}` 残留
- [ ] 没有泄露 `references/` 里的其他客户金额
- [ ] 引用的 milestone / scope / 价格都能在 `sow.md` 里找到原文

**kickoff.md**：
- [ ] RACI 表覆盖所有 SOW deliverables，没有"待定"
- [ ] Week-1 计划是具体动作不是"启动会、了解需求"
- [ ] 客户 onboarding checklist 含数据 / 账号 / SME 联系方式 — 这些是 SOW §04 Assumptions 里写的依赖

**sprint-plan.md**：
- [ ] 本周目标可验证（"完成 X 功能" 而不是"推进 X 模块"）
- [ ] 明确列出 blocked-on-client 项 — 客户要做什么 / 几号前
- [ ] 风险项不空（哪怕写"无 known 风险"也比空着好）

**status-report.md**：
- [ ] 写给客户看 — 不含成本 / 利润 / 内部人事
- [ ] "本周完成 / 下周计划 / 风险 / 决策需求" 四段齐
- [ ] 累计 burn 对账（已用预算 / 总预算）— 客户看到才信任

**change-order.md**：
- [ ] 引用 SOW §07 Change Order policy
- [ ] 金额 + 时间影响 + signoff block 三件齐
- [ ] 触发 reason 含一句"为什么这不在原 SOW scope 里"

**milestone-gate.md**：
- [ ] Acceptance criteria 直接引用 SOW §05 该 milestone 的 scope 描述
- [ ] Evidence package 列了具体文件 / URL / demo 链接
- [ ] 含 10 BD review 窗口提醒 (Day 5 / Day 8 reminder 计划)
- [ ] Invoice trigger 状态：未发 / 已发（编号 + 日期）

**handoff.md**：
- [ ] Runbook 链接齐全
- [ ] 训练 session 安排
- [ ] Testimonial / case study 询问段 — 真实询问邮件草稿
- [ ] 内部 retro 单独写在 `internal/retro-final.md`，不混进 handoff

---

## 📋 物料决策矩阵（高层概览）

```
                    K0 启动     K1 运行    K2 M-gate   K3 CO     K4 收尾
                    ─────────────────────────────────────────────────────
kickoff             ●          ─          ─           ─          ─
sprint-plan         ●          ●          ─           ─          ─
status-report       ─          ●          ◐           ◐          ◐
milestone-gate      ─          ─          ●           ─          ◐
change-order        ─          ─          ─           ●          ─
handoff             ─          ─          ─           ─          ●
internal/retro      ─          ◐          ●           ─          ●
                    ─────────────────────────────────────────────────────
                    ● 必出  ◐ 视情况出  ─ 不出
```

---

## 🔄 与 /proposal 的衔接

| 时点 | 谁在主导 | skill |
|------|---------|-------|
| Stage A-E：发现 → 提案 → 谈判 → 签约 | Sales / Director | `/proposal` |
| **签约时刻** | 双方 | `/proposal` 输出最终 `sow.md` → 客户签字 → **/fde-embed 接手** |
| K0-K4：启动 → 运行 → gate → CO → 收尾 | FDE / 项目 lead | `/fde-embed` |
| 项目完结后的复盘 → 转续约 / 案例化 | Director + Sales | 手动（未来可加 `/case-study` + `/post-mortem`） |

**目录共享**：
- `proposals/{slug}-{date}/` — pre-sale 物料（不变）
- `delivery/{slug}/` — post-sale 物料（本 skill 产出）— 注意 slug 通常和 proposal 阶段一致，但**不含日期**（因为交付是持续的，pre-sale 一次性）

---

## 🛡️ 安全护栏

| 目录 | 入 git | 含敏感数据 | 备注 |
|------|--------|-----------|------|
| `.claude/skills/fde-embed/` | ✅ | ❌ | design IP，可分享 |
| `.claude/skills/fde-embed/templates/` | ✅ | ❌ | 6 类物料骨架 |
| `delivery/` | ❌ | ✅ | 客户合同执行物料，财务、CO、内部 retro |
| `delivery/{slug}/internal/` | ❌ | ✅✅ | 客户**绝对不能看到**的内部资料 — 财务、人事、客户负面评估 |

**在 `.gitignore` 中确认有**：
```
delivery/
```

`delivery/{slug}/internal/` 默认就被上面的规则覆盖了。但**如果你手动单独发某份 delivery 物料给客户**，永远只发 `delivery/{slug}/` 根目录或子目录下的文件，**永远不要发 `internal/`**。

---

## 📌 几个真实场景示范

### 场景 1：客户刚签 SOW，要 kickoff

```
User: TechCorp 签了 50k 的 RAG 客服 SOW，下周一启动。准备 kickoff
你: 
  - 读 proposals/techcorp-2026-05-15/sow.md
  - 识别为 K0 阶段
  - 出 delivery/techcorp/kickoff.md + delivery/techcorp/sprints/2026-W22-plan.md
  - log.md 追加一行
```

### 场景 2：周五出本周 status

```
User: TechCorp 出本周 status
你:
  - 读 sow.md + delivery/techcorp/sprints/2026-W21-plan.md 看上周承诺
  - 识别为 K1 阶段
  - 出 delivery/techcorp/sprints/2026-W22-status.md + 2026-W23-plan.md
  - 提示用户：要不要同时写 internal/retro-W22.md（10 分钟内部 retro，不发客户）
```

### 场景 3：客户口头要加多语言

```
User: TechCorp PO 在 Slack 上说想加中文界面，怎么搞
你:
  - 不要直接答应也不要直接拒绝
  - 读 sow.md §01 scope 确认"中文界面"是否在原 scope（如不在 → K3 CO 必走）
  - 估算 +AU$Xk / +N weeks 影响
  - 出 delivery/techcorp/change-orders/CO-002-zh-ui.md 给客户签
  - 提示用户：CO 走完前不要动一行代码
```

### 场景 4：M1 做完准备 gate

```
User: TechCorp M1 做完了，准备 gate
你:
  - 读 sow.md §05 找 M1 的 scope 和 acceptance criteria
  - 读 tech-solution.md 看 M1 的具体技术产出
  - 出 delivery/techcorp/milestones/M1-gate.md，含 evidence package 列表 + 10 BD review 倒数表
  - 提示用户：客户书面 acceptance 收到后，立刻在 log.md 标记 + 提醒财务出 invoice
```

### 场景 5：项目结束准备 handover

```
User: TechCorp M4 验收过了，做 handover
你:
  - 读 sow.md §05 (M4 scope) + sow.md §09 (data exit)
  - 识别为 K4 阶段
  - 出 delivery/techcorp/handoff.md，含 runbook 链接 / 训练 session / testimonial 询问邮件草稿
  - 单独出 delivery/techcorp/internal/retro-final.md（不发客户）
  - 提示用户：1) 把 internal/retro-final.md 的 win 点反馈到 references/{slug}-pricing.md 校准下次报价；2) 把项目要点写进 src/data/projects.ts
```

---

## ❓ 常见误用

| 用户说 | 不要做 | 应该做 |
|-------|--------|--------|
| "帮我写封邮件催客户回 M1" | 直接写邮件 | 提示走 SOW §05 acceptance — Day 5/Day 8 reminder 是合同义务，邮件模板在 `milestone-gate.md` 里 |
| "客户没签 SOW 但口头同意先做" | 跑 K0 出 kickoff | 拒绝 — 没有书面 SOW 就没有 scope 锚点，先用 `/proposal` 把 SOW 走完 |
| "客户问能不能下周加点东西" | 直接答应 | 走 K3 CO 流程，CO 没签字不动手 |
| "M2 做完一半发现要回头改 M1" | 默默改 M1 | 触发 K3 CO 或 milestone 调整 — 已 accepted 的 milestone 不能默默改（合同 / IP / 验收都受影响） |
| "做完了帮我写 LinkedIn 帖" | 跑 /fde-embed 写帖 | 等未来的 `/case-study` skill。当前 handoff.md 只产生 case-study seed，不产生最终对外内容 |

---

## 🚦 触发判断流程图

```
用户 prompt 进来
        │
        ▼
有 client 名 + 场景描述吗？
        │
   No ──┴─→ 问用户：客户是谁？什么阶段？
        │
   Yes
        ▼
proposals/{slug}-{date}/sow.md 存在吗？
        │
   No ──┴─→ 问用户：能粘贴 SOW 文本吗？先存 proposals/{slug}-MANUAL/sow.md
        │
   Yes
        ▼
读 SOW + tech-solution + internal-notes + delivery/{slug}/log.md
        │
        ▼
识别 K0-K4 阶段（看用户描述 + log.md 上次状态）
        │
        ▼
按矩阵决定 1-3 件物料
        │
        ▼
生成到 delivery/{slug}/[正确子目录]/
        │
        ▼
追加 log.md
        │
        ▼
自检清单 → 提示用户下一步
```

---

> **设计原则**：post-sale 交付的纪律决定了 proposal 阶段卖出去的"专业感"能不能兑现。
> 客户在 pre-sale 看 deck 是惊艳，在 post-sale 看 status 才是信任。
> 没有 fde-embed 的销售 = 卖空头支票。
