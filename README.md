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

## 详细安装与使用教程

### 场景 A：使用 CLI 工具 (Claude Code / Codex / Trae)

此类工具通常作为辅助编码助手，通过 `npx` 加载 Skill 作为上下文或 Prompt 模板。

**1. 安装**
在你的项目根目录下运行：

```bash
# 安装完整技能包
npx skills add tohnee/opc-skills

# 或仅安装特定技能（推荐）
npx skills add tohnee/opc-skills --skill creative-planning
```

**2. 使用方法**
安装后，Skill 的内容会被加载到当前的上下文或 `.cursorrules` / `.trae/rules` 中。
你可以直接在对话框中用自然语言调用：

> "请根据 creative-planning 的指导，帮我构思一个面向独立开发者的 SaaS 创意。"
> "基于 market-research 方法论，帮我分析一下这个想法的可行性。"

**3. 进阶：组合使用**
你可以串联多个 Skill：
> "先用 creative-planning 生成 3 个方向，然后针对最好的一个用 domain-brand 起个名字。"

---

### 场景 B：使用 Agent 框架 (OpenClaw)

OpenClaw 是一个全自动 Agent 框架，它不仅读取 Prompt，还能通过 `skill.json` 进行**函数调用 (Function Calling)**，实现真正的自动化执行。

**1. 配置**
打开 OpenClaw 的配置文件（通常是 `config.yaml` 或 `agent.yaml`），在 `skills` 部分添加仓库链接：

```yaml
skills:
  # 核心流程
  - url: https://github.com/tohnee/opc-skills/tree/main/skills/creative-planning
    version: latest
  - url: https://github.com/tohnee/opc-skills/tree/main/skills/market-research
    version: latest
  # 战术工具
  - url: https://github.com/tohnee/opc-skills/tree/main/skills/social-listening
    version: latest
```

*注意：OpenClaw 会自动检测目录下的 `skill.json` 并将其注册为可调用的工具。*

**2. 使用方法**
你不需要告诉 Agent 具体步骤，只需给出目标，Agent 会自动选择合适的 Skill 进行调用：

> **User**: "帮我调研一下 'Notion for Kids' 这个想法在 Reddit 上的反响。"
>
> **OpenClaw (思考)**: 用户需要调研 -> 匹配到 `social-listening` 工具 -> 调用工具参数 `{ keywords: "Notion for Kids", platform: "Reddit" }`。
>
> **OpenClaw (执行)**: (自动运行爬虫或搜索 API) -> 返回痛点报告。

### 场景 C：手动集成 (Cursor / Obsidian)

如果你不使用上述工具，也可以手动使用：

1. 进入 `skills/` 目录。
2. 复制 `SKILL_ZH.md` 的内容。
### 场景 D：使用 MCP Server (New!)

本项目提供了完整的 **Model Context Protocol (MCP)** 支持，可以将所有 Skills 作为 Prompts 和 Tools 暴露给支持 MCP 的客户端（如 Claude Desktop）。

**1. 启动 MCP Server**
```bash
cd src/mcp-server
npm install
npm run build
node dist/index.js
```

**2. 功能支持**
- **Prompts**: 所有 Skill 的 Markdown 内容可作为 MCP Prompt 获取。
- **Tools**: 所有 Skill 均注册为 MCP Tool，支持参数化调用。
- **Tool Search**: 内置 `tool-search` 工具，支持语义化搜索合适的 Skill。

### 场景 E：Programmatic Tool Calling (PTC)

对于开发者，本项目提供了 `registry.json`，汇总了所有 Skill 的元数据和路径，方便在代码中动态加载。

```javascript
import registry from 'opc-skills/registry.json';

// 动态查找工具
const skill = registry['market-research'];
console.log(skill.parameters); // 获取 JSON Schema
```

## License
MIT
