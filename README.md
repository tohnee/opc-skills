# opc-skills (One Person Company Skills)

[中文](README.md) | [English](README_EN.md)

**硅谷几代创业者的智慧结晶，你的 AI 创业操作系统。**

`opc-skills` 不仅仅是一堆 Prompt，它是一个集成了硅谷数代思想领袖（从 Y Combinator 创始人到现代独立黑客）方法论的“操作系统”。它旨在将“一人公司”从创意到交付的全流程，分解为可独立运行、可组合、可审计的 AI Skills。

---

## 🧠 核心哲学：硅谷创业心法 OS

我们深度解构了硅谷创业生态中久经考验的核心思想，将其内化为可执行的代码与指令：

| 层面 | 核心心法 | 对应 Skill |
| :--- | :--- | :--- |
| **战略层** (Strategy) | **The Niche is You** (你就是利基市场)<br>不要寻找风口，解决你自己的问题，然后卖给两年前的自己。 | `creative-planning` |
| | **Productize Yourself** (把自己产品化)<br>利用“代码”和“媒体”这类零边际成本的杠杆。 | `creative-planning` |
| | **Do things that don't scale** (做不可扩展的事)<br>在写第一行代码前，先手动服务第一个用户。 | `market-research` |
| **执行层** (Execution) | **Ship Fast** (极速交付)<br>最好的代码是没有代码。24小时上线 MVP。 | `development` |
| | **Second Brain / PARA** (第二大脑)<br>项目(P)-领域(A)-资源(R)-归档(A)，用文件结构管理混乱。 | `project-manager` |
| **增长层** (Growth) | **Content OS** (内容操作系统)<br>内容不是艺术，是矩阵化的系统。一次创作，无限复用。 | `growth-hacker` |
| | **Volume & Authenticity** (高产出与真实感)<br>在 AI 时代，真实的人味是稀缺品。数量产生质量。 | `growth-hacker` |
| | **Video First** (视频优先)<br>视频建立最高信任度，也是内容复用的源头。 | `growth-hacker` |
| **系统层** (System) | **Atomic Habits** (原子习惯)<br>一人公司的核心是主人的习惯。每天 1% 的微小迭代。 | `operations` |
| **决策层** (Decision) | **Mental Models** (思维模型)<br>运用“逆向思维”和“二阶思维”避免愚蠢的决策。 | `proposal-review` |

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
   - *Philosophy*: Shane Parrish (Mental Models)
5. **PRD迭代生成 (PRD Generation)**: 将方案转化为可执行 PRD
6. **项目经理 (Project Manager)**: 拆解计划、排期、资源协调
   - *Methodology*: **Plan With Files** + **PARA** (Tiago Forte)
7. **开发 (Development)**: 将 PRD 转换为可交付软件方案与代码
   - *Philosophy*: Pieter Levels (Ship Fast) + Naval (Code Leverage)
   - *Methodology*: **Plan With Files** (地图优先于疆域)
8. **测试 (Testing)**: 验证交付质量与需求匹配
9. **上线 (Deployment)**: 将通过测试的交付物发布到生产环境
10. **运维 (Operations)**: 保障系统稳定运行并推动持续优化
    - *Philosophy*: James Clear (Atomic Habits) + Justin Welsh (Systems)

### 战术工具 (Tactical Tools) - *New!*
11. **社交聆听 (Social Listening)**: 从 Reddit/X/HN 挖掘真实的用户痛点
    - *Methodology*: The Mom Test + Digital Ethnography
12. **品牌构建 (Domain & Brand)**: 生成品牌名称、域名建议与 Logo 灵感
    - *Philosophy*: Paul Graham (Simple Naming) + Steve Jobs (Minimalist)

### 专家顾问 (Expert Advisors) - *New!*
13. **法律顾问 (Legal Advisor)**: 合同风险审查与 IP 保护
    - *Philosophy*: 规避霸王条款，保护核心利益，替代全职法务。
14. **增长黑客 (Growth Hacker)**: 0 预算营销策略与冷启动
    - *Philosophy*: Lean Startup + Engineering Growth，替代全职市场经理。

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
