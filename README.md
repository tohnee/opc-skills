# opc-skills (One Person Company Skills)

[中文](README.md) | [English](README_EN.md)

`opc-skills` 是面向“一人公司”场景的全流程 Skills 集合，旨在将从创意到交付的全流程分解为可独立运行、可组合、可审计的工作流模块。

**哲学内核**：融合了 **Naval Ravikant** (杠杆与产品化)、**Dan Koe** (一人企业)、**Elon Musk** (第一性原理) 与 **Steve Jobs** (品味与设计) 的思想。

**方法论集成**：吸收了 **Superpower (特殊知识)** 与 **Plan With Files (地图优先于疆域)** 的核心理念，将其内化到各个流程中。

## 目标
- **全流程覆盖**：创意 -> 调研 -> 方案 -> 评审 -> PRD -> 项目管理 -> 开发 -> 测试 -> 上线 -> 运维
- **低耦合高复用**：每个 Skill 可独立使用，也可串联成流水线
- **产出可评估**：每个阶段都有明确的验收指标与反馈闭环

## 兼容性
本项目遵循通用的 Prompt/Skill 定义标准，支持在以下工具中使用：
- Claude Code
- Codex
- OpenCode (Interpreter)
- **OpenClaw (Agent Framework)**: 提供完整的 `skill.json` 定义以支持 Function Calling。
- Trae / Cursor (通过导入 `.md` 文件或配置 Prompt)
- MCP (Model Context Protocol) Servers (可作为 Prompt Resource 接入)

## 模块列表 (Bilingual Support)

每个 Skill 均提供中文 (`SKILL_ZH.md`)、英文 (`SKILL_EN.md`) 版本，以及标准工具定义 (`skill.json`)。

### 核心流程 (Core Pipeline)
1. **创意策划 (Creative Planning)**: 生成可执行的创意方向与核心假设
   - *Philosophy*: Naval (Specific Knowledge) + Musk (First Principles)
   - *New Feature*: 帮助挖掘用户的 **Superpower**。
2. **市场深度调研 (Market Research)**: 验证创意方向的市场真实性与机会度
   - *Philosophy*: Dan Koe (Niche is You) + Jobs (Hidden Needs)
3. **方案书写 (Proposal Writing)**: 将调研结论转化为完整可执行方案
4. **方案评审 (Proposal Review)**: 系统评估方案可行性与风险
5. **PRD迭代生成 (PRD Generation)**: 将方案转化为可执行 PRD
6. **项目经理 (Project Manager)**: 拆解计划、排期、资源协调
   - *Methodology*: **Plan With Files** (文件级任务拆解)
7. **开发 (Development)**: 将 PRD 转换为可交付软件方案与代码
   - *Philosophy*: Jobs (Simplicity) + Naval (Code Leverage)
   - *Methodology*: **Plan With Files** (文件结构先行)
8. **测试 (Testing)**: 验证交付质量与需求匹配
9. **上线 (Deployment)**: 将通过测试的交付物发布到生产环境
10. **运维 (Operations)**: 保障系统稳定运行并推动持续优化
    - *Philosophy*: Dan Koe (Automation & Freedom)

### 战术工具 (Tactical Tools) - *New!*
11. **社交聆听 (Social Listening)**: 从 Reddit/X/HN 挖掘真实的用户痛点
    - *Methodology*: The Mom Test + Digital Ethnography
12. **品牌构建 (Domain & Brand)**: 生成品牌名称、域名建议与 Logo 灵感
    - *Philosophy*: Paul Graham (Simple Naming) + Steve Jobs (Minimalist)

## 使用方法

每个 Skill 位于 `skills/<skill-name>/` 目录下：
- 中文版 Prompt：`SKILL_ZH.md`
- 英文版 Prompt：`SKILL_EN.md`
- 工具定义 (JSON Schema)：`skill.json`

您可以根据目标平台的特性选择使用 Prompt (Markdown) 或 Tool Definition (JSON)。

## 安装方式

### 1. 命令行安装 (Standard)
通用安装（支持 Claude Code / Codex / OpenCode 等工具）：
```bash
npx skills add tohnee/opc-skills
```

### 2. OpenClaw 集成 (Agent Framework)
OpenClaw 作为一个 Agent 框架，可以直接读取仓库中的 `skill.json` 来实现 Function Calling。

在 OpenClaw 配置文件中：
```yaml
skills:
  - url: https://github.com/tohnee/opc-skills/tree/main/skills/creative-planning
    version: latest
    # OpenClaw will automatically load skill.json for tool definitions
```

### 3. 手动集成 (Manual)
将 `skills/` 目录下对应的 `.md` 文件复制到你的 Prompt 库或 Cursor Rules 中。

## License
MIT
