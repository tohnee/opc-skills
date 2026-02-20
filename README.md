# opc-skills (One Person Company Skills)

`opc-skills` 是面向“一人公司”场景的全流程 Skills 集合，旨在将从创意到交付的全流程分解为可独立运行、可组合、可审计的工作流模块。

## 目标
- **全流程覆盖**：创意 -> 调研 -> 方案 -> 评审 -> PRD -> 项目管理 -> 开发 -> 测试 -> 上线 -> 运维
- **低耦合高复用**：每个 Skill 可独立使用，也可串联成流水线
- **产出可评估**：每个阶段都有明确的验收指标与反馈闭环

## 兼容性
本项目遵循通用的 Prompt/Skill 定义标准，支持在以下工具中使用：
- Claude Code
- Codex
- OpenCode
- Trae / Cursor (通过导入 `.md` 文件或配置 Prompt)
- MCP (Model Context Protocol) Servers (可作为 Prompt Resource 接入)

## 模块列表
1. **创意策划 (Creative Planning)**: 生成可执行的创意方向与核心假设
2. **市场深度调研 (Market Research)**: 验证创意方向的市场真实性与机会度
3. **方案书写 (Proposal Writing)**: 将调研结论转化为完整可执行方案
4. **方案评审 (Proposal Review)**: 系统评估方案可行性与风险
5. **PRD迭代生成 (PRD Generation)**: 将方案转化为可执行 PRD
6. **项目经理 (Project Manager)**: 拆解计划、排期、资源协调
7. **开发 (Development)**: 将 PRD 转换为可交付软件方案与代码
8. **测试 (Testing)**: 验证交付质量与需求匹配
9. **上线 (Deployment)**: 将通过测试的交付物发布到生产环境
10. **运维 (Operations)**: 保障系统稳定运行并推动持续优化

## 使用方法
每个 Skill 位于 `skills/<skill-name>/SKILL.md`，包含完整的 Prompt 定义、输入输出规范与执行步骤。
您可以直接将对应 `SKILL.md` 的内容作为 System Prompt 或 Instruction 输入给 AI Agent。

## 安装方式
通用安装（支持 Claude Code / Codex / OpenCode 等工具）：
```bash
npx skills add tohnee/opc-skills
```

安装指定技能：
```bash
npx skills add tohnee/opc-skills --skill creative-planning
npx skills add tohnee/opc-skills --skill market-research
npx skills add tohnee/opc-skills --skill proposal-writing
npx skills add tohnee/opc-skills --skill proposal-review
npx skills add tohnee/opc-skills --skill prd-generation
npx skills add tohnee/opc-skills --skill project-manager
npx skills add tohnee/opc-skills --skill development
npx skills add tohnee/opc-skills --skill testing
npx skills add tohnee/opc-skills --skill deployment
npx skills add tohnee/opc-skills --skill operations
```

## License
MIT
