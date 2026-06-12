---
client: "{{client-company-name}}"
stage: K4
sow_ref: "proposals/{{slug}}-{{YYYY-MM-DD}}/sow.md v1.0"
project_start: "{{YYYY-MM-DD}}"
project_end: "{{YYYY-MM-DD}}"
generated: "{{YYYY-MM-DD}}"
final_milestone: "{{M4}}"
artifact: handoff
locale: "{{zh|en}}"
---

# Project Handover · {{客户公司名}}

> **Engagement**：{{Project name}} — Phase 1
> **Project duration**：{{YYYY-MM-DD}} → {{YYYY-MM-DD}} ({{N}} weeks)
> **Final milestone**：{{M4 — handover}} — accepted {{YYYY-MM-DD}}
> **Total contract value**：AUD ${{X,XXX}} + GST (含 {{N}} 个 CO 合计 +${{X,XXX}})
> **Status**：Handover in progress
> **Document audience**：Client PO + ops team + Supplier
> **From**：{{Lightman}}, Metatree Lab (JR Academy Pty Ltd)

---

## 01 · Engagement Summary — 我们一起完成了什么

**原 SOW 承诺**（v1.0 §01）：
- {{D1}}
- {{D2}}
- {{D3}}

**实际交付**（含所有 milestone 和 CO）：
- ✅ {{D1 — 状态 / 关键指标}}
- ✅ {{D2}}
- ✅ {{D3}}
- ✅ {{CO-001：xxx}}
- ✅ {{CO-002：xxx}}

**未交付项 / 移到 Phase 2 的项**（如有）：
- {{e.g., Mobile-native app — 移到 Phase 2 SOW，独立合同}}
- {{e.g., 第三方系统深度集成 — Client 决定自行实现}}

---

## 02 · Final Deliverables Map — 一切产出在哪

**Codebase**：
- Production repo：{{GitHub URL}} — branch `main` 是当前 prod 版本
- Tag for handover：`v1.0-handover-{{YYYY-MM-DD}}`
- Code IP：按 SOW §08 — Client 永久、非独占、可转让的使用权

**Documentation**：
- Architecture overview：{{Notion / GitHub link}}
- API reference：{{Postman / Swagger / OpenAPI link}}
- Data schema：{{ERD / DBML link}}
- Runbook：{{Notion link}} (详见 §03)
- Decision log：{{Notion link}} — 所有架构决策的 ADR

**Infrastructure-as-Code**：
- Terraform / CDK repo：{{URL}}
- 所有云资源在 Client 自己的 {{AWS / Azure}} 账户下
- 部署 + secrets management runbook：{{link}}

**Data**：
- Production database：Client 自己的 {{AWS RDS / Azure PostgreSQL}}
- Daily automated backup：{{S3 bucket URL}}（Client-owned）
- Data export package：{{link to one-click export script}}
- 第三方数据：原始 GeoJSON / JSON / CSV 都已存 Client S3，无 proprietary format

---

## 03 · Runbook — 运维操作手册

| 操作 | 文档链接 | Owner (post-handover) |
|------|---------|----------------------|
| Day-to-day operation | {{runbook URL}} | Client ops |
| 部署新版本 | {{deploy guide URL}} | Client ops |
| 监控 + 告警 | {{dashboard URL}} + alert rules | Client ops |
| 数据库 backup + restore | {{runbook}} | Client DBA |
| Secrets rotation | {{runbook}} | Client security |
| Incident response | {{IR playbook}} | Client on-call |
| Cost monitoring | {{dashboard}} | Client finance |

**已知 limitations / known issues**：
- {{e.g., RAG 检索冷启动首次查询慢 (~5s)，subsequent 正常}}
- {{e.g., 凌晨 2-3 AEST 期间 ingestion job 跑批，response time 短暂升高}}

---

## 04 · Training Sessions — 已安排的培训

| Session | 内容 | 时长 | 时间 | 参训人员 |
|---------|------|------|------|---------|
| 1 · Architecture walkthrough | 系统整体 / 数据流 / 关键设计决策 | 60 min | {{date, time}} | Client tech team |
| 2 · Day-to-day operation | 部署 / 监控 / 排障 | 90 min | {{date, time}} | Client ops |
| 3 · Customization & extension | 如何在现有架构上加新功能 | 60 min | {{date, time}} | Client dev team |
| 4 · Q&A + 案例答疑 | 任何 follow-up 问题 | 60 min | {{date, time}} | All |

每场都有录屏 + 文档，Client 内部可重复用于新人 onboarding。

---

## 05 · Post-Handover Support — 30 天 read-only 期

按 SOW §09，handover 后 30 天内：

- **Supplier 保留 read-only 访问权限** — 不主动改任何代码 / 数据
- **响应时间**：P1 issue → 24h，其他 → best effort
- **支持范围**：仅限"是不是按 SOW 交付了"类问题，不含 Phase 2 新需求
- **超出 30 天**：进入有偿 retainer（{{$X/month}}）或按 hourly bill（{{$X/h}}）

**30 天到期日**：{{YYYY-MM-DD}}

**期满后 Client 应已完成**：
- [ ] 内部 ops 团队接管所有日常运维
- [ ] 至少 1 次 production deploy 由 Client 自己完成
- [ ] 一份"我们能自主维护"的内部 readiness 评估

---

## 06 · Financial Closeout — 账目清算

| Item | Amount (AUD) | Status |
|------|-------------|--------|
| Total contract value (signed SOW + COs) | ${{X,XXX}} | — |
| Total invoiced | ${{X,XXX}} | {{N}} invoices |
| Total paid | ${{X,XXX}} | {{N}} settled |
| Outstanding (Final M4 invoice) | ${{X,XXX}} | INV-{{XXX}}, due {{YYYY-MM-DD}} (net-14) |
| Pass-through (OpenAI/AWS) | n/a | Client direct billing |

**Final invoice 状态**：⚪ pending / 🟢 paid

如 outstanding 已结清：明确写 "All invoices settled as of {{YYYY-MM-DD}}. Account closed."

---

## 07 · Data Exit — 数据移交确认（SOW §09）

按 SOW §09 hard commitment：

- [ ] 所有数据在 Client 自己的云账户（Supplier 不 hold）
- [ ] PostgreSQL pg_dump + S3 sync 到 Client-owned bucket 已验证可恢复
- [ ] 政府 / 第三方数据以 raw 格式存储
- [ ] On-demand export script 已交付 + 测试通过
- [ ] 30-day read-only environment 已配置

Client 在本节签字 = 确认 data exit 工作完成，未来 termination 不会出现"数据拿不出来"的风险。

---

## 08 · Testimonial / Case Study Request

如本项目交付满意，希望能获得 Client 支持：

**a) Testimonial（最低工作量）**

3-5 句话即可。我们已准备了草稿（基于本项目实际数据），Client 可直接 sign-off 或修改：

> "{{e.g., Metatree Lab 在 12 周内为我们交付了 RAG 检索系统，准确率超出预期。从 kickoff 到 production 全程透明，每周状态清晰，是我们见过最不像 vendor 的 vendor。}} — {{Client PO name}}, {{Title}}, {{Client company}}"

**b) Case study（如愿意公开）**

我们想把本项目作为公开案例放上 metatreelab.ai/work，内容：
- Client 公司名 + Logo（需 Client approval）
- 项目背景（脱敏后）
- 技术方案概要（无敏感细节）
- 量化成果（如准确率提升 X% / 人效提升 Y%）

Client 享：免费品牌曝光 + Supplier 引用对未来项目带来的 credibility

Supplier 享：销售弹药（同类目标客户更容易转化）

**c) LinkedIn referral**

如果不愿公开 case study，能否在 LinkedIn 上一句话推荐？

**Client 决定**：
- [ ] (a) Testimonial only
- [ ] (a) + (b) Full case study
- [ ] (a) + (c) Testimonial + LinkedIn referral
- [ ] (a) + (b) + (c) 全套
- [ ] 暂不便参与 — 完全理解

---

## 09 · Phase 2 / 未来合作

如果 Phase 1 交付满意，常见的 next steps：

- **Maintenance retainer** — ${{X/month}}，含 monitoring + 小修小补 + 月度 health check
- **Phase 2 SOW** — {{e.g., 加多语言 / mobile / 新数据源}} — 另签合同
- **Internal training program** — 给 Client 团队定制 AI / RAG / Agent 培训 (JR Academy bootcamp 体系)

如有兴趣，本 handover 结束 2 周后我们安排一次 30 min "Phase 2 discovery" sync。

---

## 10 · Client Sign-off — Handover Complete

确认：
1. 上述所有 deliverables / runbook / training / data exit 已完成
2. Final invoice 状态已对账
3. 30-day read-only support 期开始

| Party | Name | Title | Signature | Date |
|-------|------|-------|-----------|------|
| Supplier | Lightman | Director, JR Academy Pty Ltd | | {{YYYY-MM-DD}} |
| Client | {{Client PO name}} | {{Title}} | | |

---

> **配套文档**：
> - 原 SOW + 所有 CO：`proposals/{slug}-{date}/` + `delivery/{slug}/change-orders/`
> - 所有 milestone gates：`delivery/{slug}/milestones/`
> - 所有 sprint plans + status：`delivery/{slug}/sprints/`
> - **内部 final retro**（不发客户）：`delivery/{slug}/internal/retro-final.md`
> - **Case study seed**（待 case-study skill 转化）：`delivery/{slug}/internal/case-study-seed.md`

---

> **⚠️ 给 Supplier 团队的提醒**（handover session 后，48h 内必须完成）：
>
> **必做**：
> 1. ✅ 写 `delivery/{slug}/internal/retro-final.md` — 团队 retro：什么成了 / 什么不该再做 / 经验沉淀
> 2. ✅ 把项目要点（如 testimonial 拿到）写进 `src/data/projects.ts` 一个新 entry
> 3. ✅ 校准 `references/{slug}-pricing.md` — 实际花费 vs 预估，更新下次同类报价
> 4. ✅ Final invoice 状态：30 天后还未付清 → 升级到 Director 处理
>
> **可选**：
> - 把 retro 关键 learning 同步到 `~/.claude/projects/.../memory/` 作为 reference memory
> - 如 case study 拿到 Client approval，启动 `/case-study` skill（未来）
> - 写一条 LinkedIn 帖（个人 channel）感谢 Client，promote testimonial
>
> **30 天后**：
> - 主动 reach out 问 Phase 2 / retainer 意向
> - 如 silence → 转给 Sales 做 nurture sequence
