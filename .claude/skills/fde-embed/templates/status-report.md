---
client: "{{client-company-name}}"
stage: K1
week_iso: "{{YYYY-WNN}}"
week_dates: "{{YYYY-MM-DD}} → {{YYYY-MM-DD}}"
generated: "{{YYYY-MM-DD}}"
audience: client
artifact: status-report
locale: "{{zh|en}}"
---

# Weekly Status · {{客户公司名}} · Week {{NN}} ({{YYYY-MM-DD}} → {{YYYY-MM-DD}})

> **Engagement**：{{Project name}} — Phase 1
> **Reporting period**：{{Mon date}} → {{Fri date}}
> **Audience**：Client PO + stakeholders
> **From**：{{Lightman / Lead consultant}}, Metatree Lab (JR Academy Pty Ltd)

---

## 01 · Headline · 一句话总结本周

{{e.g., "M1 demo 提前 2 天完成，所有 acceptance criteria 满足，可进入 review 阶段。"}}

或如有 amber/red：

{{e.g., "本周 G1 因第三方 API 限流推迟 2 天，已切换 Plan B，M1 整体 timeline 保持。"}}

---

## 02 · 本周完成 (Done)

| 项目 | 状态 | 证据 / 链接 |
|------|------|------------|
| {{e.g., RAG 检索链路端到端 demo}} | ✅ | {{Loom 链接 / staging URL}} |
| {{e.g., 数据 ingestion 5,000 文档}} | ✅ | {{Notion 报告链接}} |
| {{e.g., chat UI prototype}} | 🟡 80% | {{Figma / staging 链接}} — UI tweak 留到 W{{NN+1}} |
| {{...}} | | |

---

## 03 · 下周计划 (Planned for W{{NN+1}})

| 项目 | Owner | Target |
|------|-------|--------|
| {{e.g., M1 acceptance test dry-run}} | Supplier | W{{NN+1}} Mon |
| {{e.g., Client SME 业务规则 sign-off}} | Client SME | W{{NN+1}} Wed |
| {{e.g., M1 gate review session}} | Both | W{{NN+1}} Thu |

---

## 04 · 风险与阻塞 (Risks & Blockers)

**Active blockers**：

- 🔴 {{e.g., 第三方 API 配额未批 — Client procurement 需协助申请 — 目标 W{{NN+1}} Tue 前}}
- 🟡 {{e.g., domain SME 上周缺席，需补 1h Q&A — Client 安排}}

如无 active blocker，写："本周无 active blocker。"

**Risks being watched**：

- {{e.g., M2 涉及第三方系统集成，对方 API 文档不全 — 已发起三方沟通，目标 W{{NN+2}} 解决}}

---

## 05 · 需要 Client 决策 / 协助 (Decisions Needed)

| 决策项 | Context | 推荐选项 | Deadline |
|--------|---------|---------|---------|
| {{e.g., 是否对 chat history 持久化}} | M2 设计需要 | **A: 持久化到 PG** (+1d 工作量) / B: 仅 session 内 | W{{NN+1}} Tue |
| {{e.g., M1 acceptance reviewer 是谁}} | M1 gate 需要 | 建议：{{Client CTO + PO}} | W{{NN+1}} Mon |

如无 decision needed，写："本周无新决策需求。"

---

## 06 · Milestone 进度

| Milestone | Scope | Target | Status | Note |
|-----------|-------|--------|--------|------|
| M0 | Technical Solution Package | Week {{N}} | ✅ Done {{date}} | Accepted, invoice paid |
| M1 | {{First deliverable}} | Week {{N}} | 🟢 On track | Gate review W{{NN+1}} |
| M2 | {{Second deliverable}} | Week {{N}} | ⚪ Not started | M1 后启动 |
| M3 | {{...}} | Week {{N}} | ⚪ | |
| M4 | {{Handover}} | Week {{N}} | ⚪ | |

---

## 07 · 财务 (Financial snapshot)

| Item | Amount (AUD) | Status |
|------|-------------|--------|
| Total contract value | ${{X,XXX}} | Signed |
| Invoiced to date | ${{X,XXX}} | {{N}} milestones billed |
| Paid to date | ${{X,XXX}} | net-14 |
| Outstanding | ${{X,XXX}} | — |
| Change Orders to date | ${{X,XXX}} ({{N}} CO) | All signed |
| Pass-through (OpenAI/AWS) | n/a | Paid directly by Client |

**Burn vs progress**：合同进度约 {{X}}% · 已开 invoice {{X}}% · 同步合理。

---

## 08 · Open Change Orders

如有：

| CO# | Subject | Price impact | Status | Signed |
|-----|---------|-------------|--------|--------|
| CO-001 | {{e.g., Multilingual UI}} | +${{X,XXX}} | Approved | {{date}} |
| CO-002 | {{e.g., Mobile responsive layout}} | +${{X,XXX}} | **Pending Client review** | — |

如无：写 "No open Change Orders this week."

---

## 09 · 下次 sync

- **Next weekly sync**：{{Day, YYYY-MM-DD, HH:MM AEST}} — {{Zoom 链接}}
- **Next demo session**：{{date if applicable}}
- **Next milestone gate**：M{{N}} gate review {{date}}

---

## 10 · 备注 (Notes from Supplier)

{{留给写一些客户应该看到但不属于以上类目的事，比如：
- "本周新增团队成员 X 加入 backend work"
- "因公共假期 W{{NN+1}} 的 sync 顺延到 Tue"
- "感谢 Client 数据团队上周加班配合，让 G1 提前完成"
}}

---

> **本 status report 发送给**：{{Client PO email}}, cc {{stakeholders}}
> **下一份**：{{YYYY-MM-DD next Friday}} EOD
> **如本 status 与签订 SOW 任何条款冲突**：以 SOW v1.0 为准

---

> **⚠️ 给 Supplier 团队的提醒**（写完发出前最后检查一次）：
> - 本文档**只含客户应该看到的内容** — 没有成本 / 利润 / 人事 / 内部 retro
> - 任何"我们做不到""毛利紧""人手不够"的话 → 移到 `delivery/{slug}/internal/retro-W{{NN}}.md`
> - 数字诚实：burn vs progress 不夸大不藏着
> - 如本周有大红警（M1 必延），客户该**先于 status report 通过电话知道** — 不要让客户从 status 第一次读到坏消息
