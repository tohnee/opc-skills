# opc-skills (One Person Company Skills)

[中文](README.md) | [English](README_EN.md)

**硅谷顶尖一人公司 (Solopreneur) 的智慧结晶，你的 AI 创业操作系统。**

`opc-skills` 不仅仅是一堆 Prompt，它是一个集成了硅谷 10 位顶尖思想领袖方法论的“操作系统”。它旨在将“一人公司”从创意到交付的全流程，分解为可独立运行、可组合、可审计的 AI Skills。

---

## 🧠 核心哲学：硅谷创业心法 OS

我们深度解构了 X (Twitter) 上 10 位最具影响力的“一人公司”博主的核心思想，将其内化为可执行的代码与指令：

| 层面 | 思想领袖 | 核心心法 | 对应 Skill |
| :--- | :--- | :--- | :--- |
| **战略层** (Strategy) | **Dan Koe** | **The Niche is You** (你就是利基市场)<br>不要寻找风口，解决你自己的问题，然后卖给两年前的自己。 | `creative-planning` |
| | **Naval Ravikant** | **Productize Yourself** (把自己产品化)<br>利用“代码”和“媒体”这类零边际成本的杠杆。 | `creative-planning` |
| | **Paul Graham** | **Do things that don't scale** (做不可扩展的事)<br>在写第一行代码前，先手动服务第一个用户。 | `market-research` |
| **执行层** (Execution) | **Pieter Levels** | **Ship Fast** (极速交付)<br>最好的代码是没有代码。24小时上线 MVP。 | `development` |
| | **Tiago Forte** | **Second Brain / PARA** (第二大脑)<br>项目(P)-领域(A)-资源(R)-归档(A)，用文件结构管理混乱。 | `project-manager` |
| **增长层** (Growth) | **Justin Welsh** | **Content OS** (内容操作系统)<br>内容不是艺术，是矩阵化的系统。一次创作，无限复用。 | `growth-hacker` |
| | **Tim Denning** | **Volume & Authenticity** (高产出与真实感)<br>在 AI 时代，真实的人味是稀缺品。数量产生质量。 | `growth-hacker` |
| | **Roberto Blake** | **Video First** (视频优先)<br>视频建立最高信任度，也是内容复用的源头。 | `growth-hacker` |
| **系统层** (System) | **James Clear** | **Atomic Habits** (原子习惯)<br>一人公司的核心是主人的习惯。每天 1% 的微小迭代。 | `operations` |
| **决策层** (Decision) | **Shane Parrish** | **Mental Models** (思维模型)<br>运用“逆向思维”和“二阶思维”避免愚蠢的决策。 | `proposal-review` |

---

## 🧩 模块列表 (Skill Modules)

每个 Skill 均包含中文 (`SKILL_ZH.md`)、英文 (`SKILL_EN.md`) 版本，以及标准工具定义 (`skill.json`)。

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
7. **开发 (Development)**: 极速交付软件方案与代码。
   - *Methodology*: Pieter Levels' Ship Fast + **Plan With Files**
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

## 🛠 使用方法

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
