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
| | **Map Before Territory** (地图优先于疆域)<br>在行动前先建立文件结构（Planning With Files）。 | `project-manager` |
| **增长层** (Growth) | **Content OS** (内容操作系统)<br>内容不是艺术，是矩阵化的系统。一次创作，无限复用。 | `growth-hacker` |
| | **Volume & Authenticity** (高产出与真实感)<br>在 AI 时代，真实的人味是稀缺品。数量产生质量。 | `growth-hacker` |
| **系统层** (System) | **Atomic Habits** (原子习惯)<br>一人公司的核心是主人的习惯。每天 1% 的微小迭代。 | `operations` |
| **决策层** (Decision) | **Mental Models** (思维模型)<br>运用“逆向思维”和“二阶思维”避免愚蠢的决策。 | `proposal-review` |

---

## 🧩 模块列表 (Skill Modules)

### 🚀 核心流程 (Core Pipeline)
1. **创意策划 (Creative Planning)**: 挖掘你的“特殊知识”，生成高杠杆创意。
   - *Methodology*: Naval's Specific Knowledge + Musk's First Principles
2. **市场深度调研 (Market Research)**: 验证“真需求”与“伪需求”。
   - *Methodology*: Dan Koe's Niche is You + The Mom Test
3. **方案书写 (Proposal Writing)**: 将调研结论转化为完整可执行方案。
4. **方案评审 (Proposal Review)**: 决策质量守门人，进行压力测试与事前验尸。
   - *Methodology*: Shane Parrish's Inversion
5. **PRD迭代生成 (PRD Generation)**: 将方案转化为可执行 PRD。
6. **项目经理 (Project Manager)**: 基于文件结构的任务拆解与排期。
   - *Methodology*: **Plan With Files** + Tiago Forte's PARA
   - *SOP*: 强制生成 `task_plan.md`。
7. **开发 (Development)**: 极速交付软件方案与代码。
   - *Methodology*: Pieter Levels' Ship Fast + **Plan With Files**
   - *SOP*: 强制生成 `implementation_plan.md`。
8. **测试 (Testing)**: 验证交付质量与需求匹配。
9. **上线 (Deployment)**: 安全发布到生产环境。
10. **运维 (Operations)**: 自动化监控与习惯养成。
    - *Methodology*: James Clear's Atomic Habits

### 🛠 战术工具 (Tactical Tools)
11. **社交聆听 (Social Listening)**: 从 Reddit/X/HN 挖掘真实抱怨。
12. **品牌构建 (Domain & Brand)**: 极简主义命名与品牌资产构建。
    - *Methodology*: Paul Graham's Simple Naming

### 🎓 专家顾问 (Expert Advisors)
13. **法律顾问 (Legal Advisor)**: 替代全职法务，规避合同陷阱。
14. **增长黑客 (Growth Hacker)**: 替代市场经理，0 预算冷启动。
    - *Methodology*: Lean Startup + Justin Welsh's Content OS

---

## 📖 详细使用指南 (Step-by-Step Workflow)

你可以根据当前的项目阶段，选择相应的 Skill 组合。以下是三个经典场景的工作流：

### 场景 1：从零到一 (Zero to One)
*适用于：你只有一个模糊的想法，或者想找点事做。*

```mermaid
graph LR
    A[Creative Planning] --> B[Market Research]
    B --> C[Proposal Writing]
    C --> D[Proposal Review]
```

1.  **挖掘超能力**:
    - 调用 `creative-planning`。
    - 输入：你的兴趣、技能、觉得像“玩耍”的事。
    - 产出：3 个基于你“特殊知识”的创意方向。
2.  **验证真伪**:
    - 调用 `market-research`。
    - 输入：你最喜欢的那个创意。
    - 产出：痛点验证报告。如果发现是伪需求，回到第一步。
3.  **决策**:
    - 调用 `proposal-review`。
    - 输入：你的方案。
    - 产出：Go / No Go 决策。

### 场景 2：极速构建 (Build & Ship)
*适用于：方案已定，需要在一个周末内上线 MVP。*

```mermaid
graph LR
    A[PRD Generation] --> B[Project Manager]
    B --> C[Development]
    C --> D[Deployment]
```

1.  **定义需求**:
    - 调用 `prd-generation` 生成详细 PRD。
2.  **建立秩序 (关键步骤)**:
    - 调用 `project-manager`。
    - **SOP**: 它会在你的根目录生成 `task_plan.md`。这是你的指挥中心。
    - 产出：拆解到文件粒度的任务清单。
3.  **编码**:
    - 调用 `development`。
    - **SOP**: 在写代码前，它会要求先生成 `implementation_plan.md`。
    - 输入：`task_plan.md` 中的第一个任务。
    - 产出：可运行的代码。
4.  **循环**: 重复步骤 3，直到 `task_plan.md` 全部打钩。

### 场景 3：增长与运营 (Growth & System)
*适用于：产品已上线，需要获取用户并保持系统稳定。*

1.  **冷启动**:
    - 调用 `growth-hacker`。
    - 输入：你的产品类型和目标用户。
    - 产出：包含“钩子”和“分发渠道”的 0 预算营销计划。
2.  **建立系统**:
    - 调用 `operations`。
    - 输入：你的日常重复性工作。
    - 产出：自动化建议和“原子习惯”清单。

---

## 🛠 安装与接入

### 方式 1: CLI 工具 (推荐)
适用于 Claude Code, Codex, Trae 等 AI 辅助编程环境。

```bash
# 安装完整技能包
npx skills add tohnee/opc-skills

# 仅安装特定技能
npx skills add tohnee/opc-skills --skill creative-planning
```

### 方式 2: MCP Server (Claude Desktop)
将所有 Skill 作为 MCP Prompts 和 Tools 接入 Claude Desktop。

```bash
cd src/mcp-server && npm install && npm run build
node dist/index.js
```

### 方式 3: Agent 框架 (OpenClaw)
在 `config.yaml` 中配置 Skills 链接，实现全自动 Function Calling。

### 方式 4: 开发者集成 (PTC)
使用 `registry.json` 在代码中动态加载 Skill 定义。

---

## License
MIT
