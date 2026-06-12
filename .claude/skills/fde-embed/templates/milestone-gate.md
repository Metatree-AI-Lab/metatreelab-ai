---
client: "{{client-company-name}}"
stage: K2
milestone: "{{M1}}"
sow_ref: "proposals/{{slug}}-{{YYYY-MM-DD}}/sow.md v1.0"
gate_date: "{{YYYY-MM-DD}}"
generated: "{{YYYY-MM-DD}}"
review_deadline: "{{YYYY-MM-DD}} (10 BD)"
status: "Awaiting Client acceptance"
artifact: milestone-gate
locale: "{{zh|en}}"
---

# Milestone {{M1}} · Gate Review · {{客户公司名}}

> **Engagement**：{{Project name}} — Phase 1
> **Milestone**：{{M1 — short name}}
> **Original SOW reference**：v1.0 §05 row for {{M1}}
> **Planned completion**：Week {{N}} ({{YYYY-MM-DD}})
> **Actual completion**：{{YYYY-MM-DD}}
> **Variance**：{{on time / early {{N}} days / late {{N}} days because {{reason}}}}
> **Milestone fee (due upon acceptance)**：AUD ${{X,XXX}} + GST
> **Document audience**：Client PO + technical reviewer + Supplier
> **Status**：Awaiting Client written acceptance

---

## 01 · Scope — 本 milestone 承诺要交付什么

直接引用 SOW v1.0 §05 关于 {{M1}} 的描述（一字不差）：

> {{M1 scope text from SOW §05, e.g., "RAG 检索链路 + 数据 ingestion pipeline + chat UI prototype，可对 NSW ePlanning 数据集 1,000 条法规查询给出引用回答"}}

---

## 02 · Acceptance Criteria — 验收清单

每项都有 status + 证据：

| # | 验收项 | 状态 | 证据 / 链接 |
|---|--------|------|------------|
| 1 | {{e.g., RAG 检索 top-5 准确率 ≥ 80% (内部 50 条测试集)}} | ✅ | {{eval report PDF / Notion page URL}} |
| 2 | {{e.g., chat UI 可点击，3 个 demo prompt 全过}} | ✅ | {{staging URL + Loom 录屏}} |
| 3 | {{e.g., 数据 ingestion 5,000 条文档 embed 完成}} | ✅ | {{ingestion log + count screenshot}} |
| 4 | {{e.g., API endpoint 文档 + Postman collection}} | ✅ | {{Notion / GitHub README link}} |
| 5 | {{e.g., security checklist 全过 (OWASP top 10)}} | 🟡 | {{checklist link, 7/10 完成, 3 项延到 M2}} |
| 6 | {{e.g., 单元测试 coverage ≥ 70%}} | ✅ | {{coverage report link}} |

**Legend**：✅ = 通过 · 🟡 = 部分通过（见 §03） · 🔴 = 未通过（见 §03）

---

## 03 · 已知 deviations / open defects

如所有 acceptance 全过：写"本 milestone 所有 acceptance criteria 通过，无 known defects。"

如有偏差：

| Item | 状态 | 计划 / 协议 |
|------|------|-----------|
| {{e.g., security checklist 3 项未完成}} | 🟡 部分 | 与 Client 商定：本 milestone 接受，3 项纳入 M2 acceptance criteria（不另加 CO，因属同范围） |
| {{e.g., M1 demo 中文 prompt 准确率 65%}} | 🔴 偏差 | 已开 CO-001 中文 RAG 优化（已签），M2 acceptance 时验收 |

---

## 04 · Evidence Package（Client 验收时要看的东西）

**Demo session**：
- **Live demo**：{{Day, YYYY-MM-DD, HH:MM AEST, Zoom link}} - 30 min
- **录屏 backup**：{{Loom URL}}

**Code & Documentation**：
- Repo branch：`{{repo-url}}/tree/m1-release`
- Architecture doc：{{Notion / GitHub link}}
- API spec：{{Postman / Swagger link}}
- Eval report：{{report URL}}

**Running environment**：
- Staging URL：{{https://staging.example.com}}
- Test accounts：{{credentials in shared password vault}}
- Test data：{{description of what's loaded}}

**Test results**：
- Unit test report：{{coverage URL}}
- Integration test report：{{URL}}
- {{Domain-specific}} eval：{{URL}}

---

## 05 · Acceptance Process（按 SOW §05）

**Review window**：10 BD from today

| Day | Date | Event | Owner |
|-----|------|-------|-------|
| Day 0 | {{YYYY-MM-DD}} (today) | Gate review session + 本文档发送 Client | Supplier |
| Day 5 | {{YYYY-MM-DD}} | **Reminder #1** — Supplier 主动 email | Supplier |
| Day 8 | {{YYYY-MM-DD}} | **Reminder #2** — Supplier 主动 ping | Supplier |
| Day 10 | {{YYYY-MM-DD}} | **Acceptance deadline** | Client |

**Client 必须在 Day 10 前书面回应**（按 SOW §05.4）：
- **(a)** 书面 acceptance — email "I accept M{{N}}" 即可 → 触发 invoice
- **(b)** 书面 defects list — 具体可修复项 → Supplier 安排 rework + 重新 gate
- **(c)** 书面 extension request — 双方协议延长 review 窗口

**没有 silent acceptance** — 必须有书面动作。Day 10 仍未回应 → 触发 SOW §05.6 joint review。

---

## 06 · Invoice Trigger

| Item | Value |
|------|-------|
| Milestone fee | AUD ${{X,XXX}} + GST |
| Invoice number | {{INV-XXX}} (生成时间：acceptance 收到后 1 BD 内) |
| Payment terms | net-14 from invoice date |
| Recipient | {{Client AP email}} |

**当前状态**：⚪ 未发 (等 acceptance)

Acceptance 收到后，Supplier 在 `delivery/{slug}/log.md` 记录 invoice 编号 + 发送时间。

---

## 07 · 下一步

**M{{N}} acceptance 后立即启动**：
- M{{N+1}} sprint plan（W{{NN+1}}）— 见 `delivery/{slug}/sprints/{YYYY-W(NN+1)}-plan.md`
- M{{N+1}} 关键风险预案
- 如本 milestone 有 carry-over defects → 排入下个 sprint

**M{{N}} acceptance 延迟（超过 10 BD）**：
- Supplier 暂停 M{{N+1}} 工作 — 避免在未验收基础上叠加更多 scope
- 触发 SOW §05.6 joint review

---

## 08 · Client Sign-off

我已 review 上述 acceptance criteria，确认本 milestone 满足 SOW v1.0 §05 关于 {{M{{N}}}} 的要求（或在 §03 标注的偏差项达成协议下接受）。Supplier 可开 invoice {{INV-XXX}}。

| Party | Name | Title | Decision | Date |
|-------|------|-------|----------|------|
| Client | {{Client PO name}} | {{Title}} | ☐ Accept ☐ Accept with conditions ☐ Reject | |

或回 email 至 {{lightman@jiangren.com.au}}，subject：`[ACCEPT] M{{N}} {{Project name}}`，正文一行 acceptance 即可。

---

> **配套文档**：
> - SOW：`proposals/{slug}-{date}/sow.md`
> - 本 sprint 的 plan + status：`delivery/{slug}/sprints/{YYYY-WNN}-plan.md` + `-status.md`
> - 相关 Change Orders：`delivery/{slug}/change-orders/CO-*.md`
> - 内部 milestone retro（不发客户）：`delivery/{slug}/internal/retro-M{{N}}.md`

---

> **⚠️ 给 Supplier 团队的提醒**（gate session 前最后 review）：
> - Acceptance criteria 是否**直接对应 SOW §05** 的承诺？不能加新条件也不能漏
> - Evidence 链接是否都可访问？Client 点开是死链 = 信任崩塌
> - Demo session 前 1h 跑通端到端 — 现场翻车比 status report 翻车更伤
> - 如有 amber 项（§03），是否已和 Client 私下打过招呼？不要让 Client 在 gate session 第一次听到
> - Invoice 模板是否准备好？Client 一签字 1 BD 内必须发出
