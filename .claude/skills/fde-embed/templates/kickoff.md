---
client: "{{client-company-name}}"
contact: "{{contact-name}}, {{contact-role}}"
stage: K0
generated: "{{YYYY-MM-DD}}"
sow_ref: "proposals/{{slug}}-{{YYYY-MM-DD}}/sow.md"
engagement_name: "{{Project name}} — Phase 1"
total_fee_aud: "{{X,XXX}}"
kickoff_date: "{{YYYY-MM-DD}}"
artifact: kickoff
locale: "{{zh|en}}"
---

# Project Kickoff · {{客户公司名}}

> **Engagement**：{{Project name}} — Phase 1
> **Total contract value**：AUD ${{X,XXX}} + GST
> **SOW reference**：v1.0 signed {{YYYY-MM-DD}}
> **Kickoff date**：{{YYYY-MM-DD}}, {{HH:MM}} AEST
> **Document audience**：双方 — Client PO + Supplier delivery team
> **Distribution**：发送给 Client PO + cc relevant stakeholders

---

## 01 · 我们要在 12 周里一起完成什么

引用 SOW §01 In-scope（一字不差，让客户重新确认理解一致）：

- {{Deliverable 1}}
- {{Deliverable 2}}
- {{Deliverable 3}}

**成功标准**（SOW §05 milestone acceptance criteria 浓缩版）：
- M0 (Week {{N}})：{{技术方案锁定}}
- M1 (Week {{N}})：{{第一可演示产出}}
- M2 (Week {{N}})：{{第二可演示产出}}
- M3 (Week {{N}})：{{calibration + UAT 通过}}
- M4 (Week {{N}})：{{cutover + handover + training 完成}}

---

## 02 · RACI Matrix

| 工作项 | Supplier (Metatree) | Client ({{客户公司}}) |
|--------|---------------------|----------------------|
| 架构设计 | **R**, **A** — {{Lead engineer}} | **C** — {{Client CTO}} |
| 数据 schema 设计 | **R**, **A** | **C** |
| 数据准备 / 清洗 | **C** | **R**, **A** — {{Client data team}} |
| 第三方 API 申请 + 账号 | **C** — 提供 spec | **R**, **A** — {{Client procurement}} |
| 业务规则 / domain knowledge | **C** | **R**, **A** — {{Client SME}} |
| Sprint demo + acceptance | **R** — 演示 | **A** — 验收签字 |
| Production cutover | **R**, **A** | **C** — 提供 prod 账号权限 |
| End-user training | **R**, **A** — 培训交付 | **C** — 安排参训人员 |
| Post-handover operation | **C** — 30 天 read-only support | **R**, **A** |

R = Responsible（动手做） · A = Accountable（最终负责） · C = Consulted（被咨询） · I = Informed（被告知）

**关键人**：
- **Supplier PM / lead contact**：{{Lightman / Lead consultant}}, {{phone / email}}
- **Client PO (nominated)**：{{Client PO name}}, {{title}}, {{email}}
- **Escalation contact (Supplier)**：Lightman, Director, JR Academy
- **Escalation contact (Client)**：{{Client exec sponsor}}

---

## 03 · Communication Cadence

| 频率 | 形式 | 时长 | Owner | 用途 |
|------|------|------|-------|------|
| 每日 | Slack / 微信 async | — | Both | 实时问题、进度同步 |
| 每周 | Video sync | 30 min | Supplier | 进度回顾 + 下周计划 + 阻塞决策 |
| 双周 | Demo session | 45 min | Supplier | 当前可演示产出，Client SME 反馈 |
| 每 milestone | Gate review | 60 min | Supplier | M-gate review + 客户书面 acceptance |
| Ad-hoc | 电话 / 紧急会议 | — | Either | P1 issue / 关键决策 |

**周 sync 默认时间**：每周 {{Weekday}} {{HH:MM}} AEST，{{Zoom / Teams 链接}}
**Comms channel**：{{Slack #channel-name / 微信群名}}
**文档协作**：{{Notion workspace URL / GitHub repo / shared drive}}

**升级路径**：
- 普通 issue → 当周 sync 提出
- 重要 issue → 24h 内 PM-to-PM
- P1（生产 down / 关键交付 blocked）→ 立即电话 Lightman

---

## 04 · Week-1 计划（前 5 个工作日）

**Day 1 (Mon, {{YYYY-MM-DD}}) — Kickoff session**
- Supplier：演示本 kickoff doc，确认所有人对 scope/milestone/cadence 理解一致
- Client：确认 PO + Escalation contact + SME 名单
- Both：建立 Slack channel + Notion workspace + 第一周 sync 时间

**Day 2-3 — Onboarding & access provisioning**
- Client：按 §05 onboarding checklist 提供账号、数据样本、SME 联系方式
- Supplier：环境搭建（dev / staging）、repo initialization、CI/CD 模板

**Day 4 — Architecture deep-dive**
- Supplier：第一版架构图 + tech stack 选择 + data flow draft
- Client SME：审 architecture 是否覆盖关键业务规则

**Day 5 — Week-1 retro + Week-2 sprint plan**
- Both：30 min sync 复盘 Week-1，Supplier 出 Week-2 sprint plan

---

## 05 · Client Onboarding Checklist（Client 在 Week-1 内交付）

引用 SOW §04 Assumptions 里的 client dependencies — 这些**没按时交付会延迟整个项目**：

- [ ] 数据样本：{{spec — 至少 N 条真实/脱敏数据，格式 X}}
- [ ] API 权限：{{第三方账号 + 内部系统 API key}}
- [ ] 测试环境：{{staging URL / sandbox access}}
- [ ] 业务 SME 联系方式 + 每周可用时间承诺（SOW §04 假设的 {{N}} 小时/周）
- [ ] 已签 NDA（如未签）
- [ ] Slack / 微信群成员名单确认
- [ ] Prod 部署的云账户访问权限（M4 时需要，可以晚点）

**关键**：以上任何一项延迟 > 5 BD → 触发 SOW §07.4 client dependency 延迟条款 → 可能进入 Change Order

---

## 06 · 已知风险 watchlist（来自 pre-sale internal-notes）

从 `proposals/{slug}-{date}/internal-notes.md` 提取的需持续盯防的事项：

| 风险 | 来源 | 应对计划 |
|------|------|---------|
| {{e.g., 客户 PO 决策慢}} | pre-sale Stage B | 每周 sync 主动给 3 个 option + 推荐项，避免开放性问题 |
| {{e.g., 第三方 API 文档不清}} | tech-solution.md M0 open question | Week 2 前完成 spike，搞不定就拉客户 + 第三方供应商三方会议 |
| {{e.g., Client legal review 漫长}} | pre-sale Stage E | 任何法律相关文档（DPA、合规模板）提前 2 周发起 review |

**对外暴露原则**：这些风险**不写进发客户的 status report**（除非演变成 active blocker）。它们在 `delivery/{slug}/internal/risk-watchlist.md` 持续维护。

---

## 07 · 钱

- **付款节奏**：milestone-based — 每个 milestone acceptance 后 Supplier 开 invoice，net-14
- **首笔预付？**：{{有/无}} — {{e.g., 签约时 30% 预付 AU$X,XXX，Week-1 开 invoice}}
- **Pass-through 第三方费用**：OpenAI / AWS / 第三方 API 由 Client 账户直接支付，不 mark up
- **GST**：10% 已含在合同 fee 里 / 另加（按 SOW §07 写法）

**财务联系人**：
- Supplier 财务：{{accounts@jiangren.com.au}}
- Client AP：{{Client accounts payable contact}}

---

## 08 · 双方下一步动作

**Supplier 在 Day 1 前完成**：
- [ ] 发送本 kickoff doc 给 Client PO
- [ ] 建立 Slack channel + Notion workspace
- [ ] 准备 kickoff session deck（基于本文档）
- [ ] dev 环境模板初始化

**Client 在 Day 1 前完成**：
- [ ] 确认 PO + Escalation contact + SME 名单（回 email 即可）
- [ ] 安排 kickoff session 参会人
- [ ] 收到本文档确认无异议（或提出修改）

**Day 1 kickoff session 议程**（60 min）：
1. (10 min) 双方人员介绍 + 角色明确
2. (15 min) 走 §01 scope + §02 RACI + §05 onboarding checklist
3. (15 min) §04 Week-1 计划 + Client 提供时间承诺
4. (10 min) §06 风险讨论 + 应对决议
5. (10 min) Q&A + 下次 sync 时间敲定

---

## 09 · Sign-off

确认本 kickoff plan 与签订 SOW v1.0 一致，双方按本文档执行：

| Party | Name | Title | Confirmed | Date |
|-------|------|-------|-----------|------|
| Supplier | Lightman | Director, JR Academy Pty Ltd | | {{YYYY-MM-DD}} |
| Client | {{Client PO name}} | {{Title}} | | |

> 本 kickoff doc 是 SOW v1.0 的执行附件，不修改 SOW 任何条款。任何与 SOW 冲突之处，以 SOW 为准。
> 后续每周 status report 在 `delivery/{slug}/sprints/{YYYY-WNN}-status.md`。
