---
client: "{{client-company-name}}"
stage: K3
co_number: "CO-{{NNN}}"
co_subject: "{{short-name-kebab}}"
sow_ref: "proposals/{{slug}}-{{YYYY-MM-DD}}/sow.md v1.0"
trigger_date: "{{YYYY-MM-DD}}"
generated: "{{YYYY-MM-DD}}"
status: "For Client review"
artifact: change-order
locale: "{{zh|en}}"
---

# Change Order CO-{{NNN}} · {{客户公司名}}

> **Engagement**：{{Project name}} — Phase 1
> **Original SOW**：v1.0 signed {{YYYY-MM-DD}}
> **CO number**：CO-{{NNN}}
> **CO subject**：{{e.g., 多语言 UI 支持 / Mobile responsive layout}}
> **Trigger date**：{{YYYY-MM-DD}}（Client 首次提出或事件触发日期）
> **Status**：For Client review
> **Document version**：v1.0
> **Prepared by**：{{Lightman}}, Metatree Lab (JR Academy Pty Ltd · ABN 26 621 887 572)
> **Prepared for**：{{Client PO name}}, {{Title}}, {{Client legal entity}}

---

## 01 · Trigger（这个 CO 为什么存在）

**Client 提出 / 事件触发**：

{{e.g., "2026-05-22 周三 sync，Client PO 提出希望系统支持中文 UI，目标 Phase 1 上线时即可对国内办公室开放。"}}

或：

{{e.g., "2026-05-20 OpenAI 公布 GPT-4o-mini 涨价 30%，按当前预估流量每月成本超出 SOW §07 cloud cost budget AU$X。"}}

**为什么这不在原 SOW scope**：

引用 SOW v1.0 §01 In-scope 和 §02 Scope (Out)：
- 原 §01 列举的 deliverable {{D1, D2, D3}} 均不含 {{中文 UI / mobile layout / 多模型 fallback}}
- 原 §02 没有 explicit exclusion 中文 UI（属于 Phase 2 隐含 scope），但根据 SOW §07 Change Order policy，新增需求按 CO 处理

---

## 02 · Scope delta

**新增 / 修改**：

| 类别 | 描述 |
|------|------|
| 新增 | {{e.g., 中文 i18n 框架接入 (next-intl)}} |
| 新增 | {{e.g., 所有用户可见文案 zh + en 双语 entries}} |
| 新增 | {{e.g., 中文 input 的 RAG retrieval 优化 (jieba 分词)}} |
| 修改 | {{e.g., chat UI 头部新增语言切换组件}} |
| 修改 | {{e.g., admin UI label 同步改造}} |

**不在本 CO 范围**（避免下一轮争议）：

- {{e.g., 繁体中文 / 粤语 / 其他亚洲语言}} — 如需另开 CO
- {{e.g., 日文 / 韩文}} — 同上
- {{e.g., 数据库内业务数据本身的翻译}} — Client 自行准备

---

## 03 · 影响评估

### 价格影响

| 项目 | 工作量 (days) | 费率 (AUD/day) | 小计 (AUD) |
|------|--------------|---------------|-----------|
| {{i18n 框架接入}} | {{2}} | {{1,200}} | {{2,400}} |
| {{文案双语化}} | {{1.5}} | {{1,200}} | {{1,800}} |
| {{RAG retrieval 优化}} | {{2}} | {{1,500}} | {{3,000}} |
| {{UI + admin 改造}} | {{1}} | {{1,200}} | {{1,200}} |
| **CO total** | **{{6.5}} days** | | **${{8,400}} + GST** |

**累计 CO 占比**：本 CO + 已签 CO 合计 ${{X,XXX}} = 原合同 ${{X,XXX}} 的 {{X}}%（SOW §07 上限 10% = ${{X,XXX}}）{{是否已超}}

### 时间影响

| Milestone | 原计划 (SOW v1.0) | 新计划 (post-CO) | 变化 |
|-----------|------------------|-----------------|------|
| M1 | Week {{N}} | Week {{N+1}} | +1 week |
| M2 | Week {{N}} | Week {{N+1}} | +1 week |
| M3 | Week {{N}} | Week {{N+1}} | +1 week |
| M4 | Week {{N}} | Week {{N+1}} | +1 week |

或：本 CO 不影响 M-timeline，可与现有 sprint 并行交付。{{二选一明确写}}

### 质量 / 风险影响

- {{e.g., 中文 RAG retrieval 准确率初期可能低于英文，需在 M1 acceptance 加 zh 测试集（10% 抽样）}}
- {{e.g., 字符宽度差异可能影响某些 UI 组件，已计入工作量}}

---

## 04 · 交付物（CO 验收标准）

按 SOW §05 acceptance process，本 CO 的 acceptance criteria：

- [ ] {{e.g., 系统语言切换功能可用，5 个核心页面 zh/en 完整}}
- [ ] {{e.g., 50 条中文测试 prompt 通过 retrieval 测试}}
- [ ] {{e.g., admin UI label 100% zh 覆盖}}
- [ ] {{e.g., 文档（runbook / API docs）保持英文，UI 文案双语}}

**Definition of done for CO**：随 M{{N}} gate review 一起验收，不单独走 acceptance 流程。

---

## 05 · 付款 (Payment for this CO)

- **CO fee**：${{X,XXX}} + GST
- **Invoice trigger**：随 M{{N}} acceptance 一起 invoice（不单独开 invoice）
- **Payment terms**：net-14，与主 SOW 一致

---

## 06 · 引用 SOW 条款

本 CO 遵循 SOW v1.0 以下条款：

- **§07 Change Order policy** — 触发条件 / 上限 / 流程
- **§05 Milestone acceptance** — CO 交付物的验收方式
- **§08 Legal — IP** — CO 产出的 IP 归属与主 SOW 一致
- **§08 Legal — Liability cap** — CO fee 计入 total fees paid for liability cap 计算

如 CO 累计超出 §07 的 10% 上限，本 CO 不能直接生效，需双方签订 SOW Amendment v1.{{x}}。

---

## 07 · Sign-off

| Party | Name | Title | Signature | Date |
|-------|------|-------|-----------|------|
| Supplier | Lightman | Director, JR Academy Pty Ltd | | {{YYYY-MM-DD}} |
| Client | {{Client PO name}} | {{Title}} | | |

**签字后**：
- Supplier 在 `delivery/{slug}/log.md` 记录 CO 生效日期
- Supplier 启动 CO 范围内工作
- 下周 status report 在 §08 Open Change Orders 反映本 CO 状态

**未签字前**：
- Supplier **不动工** — 任何已有 sprint 不包含 CO scope 的工作
- 如 Client 要求"先做着 CO 后补"——书面拒绝（违反 SOW §07.2）

---

> **配套文档**：
> - 原 SOW：`proposals/{slug}-{date}/sow.md`
> - 本 CO 影响的 sprint plan：`delivery/{slug}/sprints/{YYYY-WNN}-plan.md`
> - 本 CO 涉及 milestone gate：`delivery/{slug}/milestones/M{N}-gate.md`

---

> **⚠️ 给 Supplier 团队的提醒**（生成 CO 后内部 review）：
> - 工作量估算是否含 testing + buffer？建议 +20% buffer
> - Client 是否真的会签？如果 < 50% 概率，要不要先发"informal estimate"而不是 formal CO？
> - 这个 CO 是否实际上应该拒绝？（scope 过大、影响主 timeline、毛利不够）
> - 该 CO 的细节同步记录到 `internal/co-{{NNN}}-rationale.md`（含成本 / 决策思路）
