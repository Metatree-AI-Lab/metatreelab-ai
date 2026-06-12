---
client: "{{client-company-name}}"
stage: K1
sprint_iso: "{{YYYY-WNN}}"
sprint_dates: "{{YYYY-MM-DD}} → {{YYYY-MM-DD}}"
milestone_target: "{{M1}}"
generated: "{{YYYY-MM-DD}}"
audience: internal+client
artifact: sprint-plan
locale: "{{zh|en}}"
---

# Sprint Plan · {{客户公司名}} · Week {{NN}} ({{YYYY-MM-DD}} → {{YYYY-MM-DD}})

> **Milestone target**：{{M1 — 在 Week NN 交付}}
> **Sprint goal (one sentence)**：{{e.g., 完成 RAG 检索链路端到端 demo，可对 5 类典型问题给出可引用回答}}
> **Audience**：本文档双方可见 — Supplier delivery team + Client PO

---

## 01 · 本周目标（必须可验证）

主目标 — Sprint demo 时要演示的：

- **G1**：{{e.g., 数据 ingestion pipeline 跑通 5,000 条文档}}
  - **Definition of done**：{{e.g., pgvector 表里 5,000 行 embedding，retrieval API 返回 top-5}}
  - **Demo 形式**：{{Loom 录屏 / live demo / 文档截图}}

- **G2**：{{e.g., chat UI prototype}}
  - **Definition of done**：{{e.g., 内部 staging 可点击，3 个测试 prompt 全过}}
  - **Demo 形式**：{{...}}

次目标 — 不影响 demo 但本周要推进：

- **S1**：{{e.g., security review checklist 草稿}}
- **S2**：{{e.g., M1 acceptance test plan 起草}}

---

## 02 · 团队 capacity

| 成员 | 角色 | 本周可用 | 主要负责 |
|------|------|---------|---------|
| {{Lead Engineer}} | Backend / RAG | {{X}} hours | G1 + 架构 review |
| {{FE Engineer}} | Frontend | {{X}} hours | G2 |
| {{PM / Lead}} | PM + client comms | {{X}} hours | Sync + status + 阻塞 |
| {{Consultant SME}} (如有) | Domain | {{X}} hours | 业务规则确认 + S1 |

**总 capacity**：{{XX}} hours · **预估投入** G1: {{X}}h, G2: {{X}}h, S1+S2+Sync: {{X}}h

---

## 03 · Blocked-on-Client（Client 本周要提供什么）

| 项目 | 谁负责（Client 侧） | 何时前需要 | 不给会怎样 |
|------|-------------------|-----------|-----------|
| {{e.g., 真实数据样本 5k 条}} | {{Client data team}} | {{周三 EOD}} | G1 demo 改用 dummy data，影响真实演示效果 |
| {{e.g., domain SME 1h Q&A}} | {{Client SME}} | {{周四前}} | S1 业务规则 checklist 完不成 |
| {{...}} | {{...}} | {{...}} | {{...}} |

**升级触发**：任何一项延迟 > 5 BD → 触发 SOW §07.4 Change Order

---

## 04 · 风险与应对

| 风险 | 概率 | 影响 | 应对 / 触发条件 |
|------|------|------|---------------|
| {{e.g., embedding API 限流}} | M | M | 已申请提升配额；Plan B 切换到本地模型，需 +2 days |
| {{e.g., 客户 PO 周三休假}} | H | L | 周二提前同步关键决策；备用联系人 {{X}} |
| {{...}} | | | |

如本周无 known 风险，明确写："本周无 known 风险（持续观察 watchlist）"。

---

## 05 · 上周遗留 carry-over

从 `2026-W{{NN-1}}-status.md` carry forward：

- [ ] {{e.g., 上周未完成：API 文档第二轮 review}} — 本周 {{Wed}} 前完成
- [ ] {{...}}

如无 carry-over，明确写："上周交付全部完成，无 carry-over"。

---

## 06 · Milestone 进度对账

| Milestone | Target date | Status | Risk | Note |
|-----------|-------------|--------|------|------|
| M0 | Week {{N}} | ✅ Done {{date}} | — | invoice {{INV-XXX}} 已收款 |
| M1 | Week {{N}} | 🟡 In progress | M | 本 sprint 关键路径 |
| M2 | Week {{N}} | ⚪ Not started | — | M1 acceptance 后启动 |
| M3 | Week {{N}} | ⚪ Not started | — | |
| M4 | Week {{N}} | ⚪ Not started | — | |

---

## 07 · 本周关键 sync 时点

- **Mon {{HH:MM}}** — Weekly sync (30 min)
- **Wed {{HH:MM}}** — 双周 demo (45 min){{如本周是 demo 周}}
- **Fri EOD** — 本 sprint 结束，发 status-report

---

## 08 · 下周（W{{NN+1}}）前瞻

如本周目标按计划完成，下周计划：

- {{e.g., M1 内部 dry-run + acceptance test 跑通}}
- {{e.g., 启动 M2 准备工作}}

如本周关键目标 (G1) 未达成，下周需调整：
- {{Plan B：延后 1 周 + 触发 client 沟通}}

---

> **本文档发送给**：Slack channel + 本周 sync 议程附件
> 下一份：`delivery/{{slug}}/sprints/{{YYYY-WNN}}-status.md`（周五 EOD 出）
