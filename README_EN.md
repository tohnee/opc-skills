# opc-skills (One Person Company Skills)

[中文](README.md) | [English](README_EN.md)

**The AI Operating System for Solopreneurs, distilled from generations of Silicon Valley wisdom.**

`opc-skills` is not just a collection of Prompts; it is an "Operating System" that integrates methodologies from generations of Silicon Valley thought leaders (from Y Combinator founders to modern Indie Hackers). It decomposes the entire process from idea to delivery into independently executable, composable, and auditable AI Skills.

---

## 🧠 Core Philosophy: The Silicon Valley Solopreneur OS

We have deeply deconstructed the battle-tested core ideas of the Silicon Valley startup ecosystem and internalized them into executable code and instructions:

| Layer | Core Philosophy | Corresponding Skill |
| :--- | :--- | :--- |
| **Strategy** | **The Niche is You**<br>Don't chase trends. Solve your own problems, then sell the solution to your past self. | `creative-planning` |
| | **Productize Yourself**<br>Leverage "Code" and "Media" as permissionless leverage. | `creative-planning` |
| | **Do things that don't scale**<br>Manually serve your first user before writing a single line of code. | `market-research` |
| **Execution** | **Ship Fast**<br>The best code is no code. Launch your MVP in 24 hours. | `development` |
| | **Map Before Territory**<br>Plan with files (`task_plan.md`) before executing actions. | `project-manager` |
| **Growth** | **Content OS**<br>Content is not art; it's a matrixed system. Create once, repurpose infinitely. | `growth-hacker` |
| | **Volume & Authenticity**<br>In the AI era, human authenticity is scarce. Volume begets quality. | `growth-hacker` |
| **System** | **Atomic Habits**<br>The core of a one-person company is the owner's habits. 1% improvement daily. | `operations` |
| **Decision** | **Mental Models**<br>Use "Inversion" and "Second-Order Thinking" to avoid stupid decisions. | `proposal-review` |

---

## 🧩 Skill Modules

### 🚀 Core Pipeline
1. **Creative Planning**: Excavate your "Specific Knowledge" and generate high-leverage ideas.
   - *Methodology*: Naval's Specific Knowledge + Musk's First Principles
2. **Market Research**: Verify "Real Needs" vs "Fake Needs".
   - *Methodology*: Dan Koe's Niche is You + The Mom Test
3. **Proposal Writing**: Convert research into executable proposals.
4. **Proposal Review**: The decision quality gatekeeper with stress tests and pre-mortems.
   - *Methodology*: Shane Parrish's Inversion
5. **PRD Generation**: Translate proposals into actionable PRDs.
6. **Project Manager**: File-based task decomposition and scheduling.
   - *Methodology*: **Plan With Files** + Tiago Forte's PARA
   - *SOP*: Mandates creation of `task_plan.md`.
7. **Development**: Ship software fast.
   - *Methodology*: Pieter Levels' Ship Fast + **Plan With Files**
   - *SOP*: Mandates creation of `implementation_plan.md`.
8. **Testing**: Validate quality & requirement matching.
9. **Deployment**: Safely release to production.
10. **Operations**: Automated monitoring & habit formation.
    - *Methodology*: James Clear's Atomic Habits

### 🛠 Tactical Tools
11. **Social Listening**: Mine genuine complaints from Reddit/X/HN.
12. **Domain & Brand**: Minimalist naming & brand asset building.
    - *Methodology*: Paul Graham's Simple Naming

### 🎓 Expert Advisors
13. **Legal Advisor**: Replace full-time legal counsel; avoid contract traps.
14. **Growth Hacker**: Replace marketing managers; 0-budget cold start.
    - *Methodology*: Lean Startup + Justin Welsh's Content OS

---

## 📖 Detailed Usage Guide (Step-by-Step Workflow)

Choose the right skill combination based on your current project stage. Here are three classic workflows:

### Scenario 1: Zero to One
*For when you have a vague idea or just want to start something.*

```mermaid
graph LR
    A[Creative Planning] --> B[Market Research]
    B --> C[Proposal Writing]
    C --> D[Proposal Review]
```

1.  **Excavate Superpower**:
    - Call `creative-planning`.
    - Input: Your interests, skills, what feels like "play".
    - Output: 3 creative directions based on your "Specific Knowledge".
2.  **Verify Reality**:
    - Call `market-research`.
    - Input: Your favorite idea.
    - Output: Pain point validation report. If it's a fake need, loop back to Step 1.
3.  **Decision**:
    - Call `proposal-review`.
    - Input: Your proposal.
    - Output: Go / No Go decision.

### Scenario 2: Build & Ship
*For when the plan is set, and you need to launch an MVP in a weekend.*

```mermaid
graph LR
    A[PRD Generation] --> B[Project Manager]
    B --> C[Development]
    C --> D[Deployment]
```

1.  **Define Requirements**:
    - Call `prd-generation` to generate a detailed PRD.
2.  **Establish Order (Critical)**:
    - Call `project-manager`.
    - **SOP**: It will generate `task_plan.md` in your root. This is your command center.
    - Output: Task list decomposed to the file level.
3.  **Code**:
    - Call `development`.
    - **SOP**: Before coding, it requires `implementation_plan.md`.
    - Input: The first task from `task_plan.md`.
    - Output: Working code.
4.  **Loop**: Repeat Step 3 until all boxes in `task_plan.md` are checked.

### Scenario 3: Growth & System
*For when the product is live, and you need users and stability.*

1.  **Cold Start**:
    - Call `growth-hacker`.
    - Input: Product type and target audience.
    - Output: 0-budget marketing plan with "Hooks" and "Distribution Channels".
2.  **Build Systems**:
    - Call `operations`.
    - Input: Your daily repetitive tasks.
    - Output: Automation suggestions and "Atomic Habits" checklist.

---

## 🛠 Installation & Integration

### Method 1: CLI Tool (Recommended)
Suitable for AI coding assistants like Claude Code, Codex, Trae, etc.

```bash
# Install full skill pack
npx skills add tohnee/opc-skills

# Install specific skill only
npx skills add tohnee/opc-skills --skill creative-planning
```

### Method 2: MCP Server (Claude Desktop)
Connect all Skills as MCP Prompts and Tools to Claude Desktop.

```bash
cd src/mcp-server && npm install && npm run build
node dist/index.js
```

### Method 3: Agent Framework (OpenClaw)
Configure Skill links in `config.yaml` for fully automated Function Calling.

### Method 4: Developer Integration (PTC)
Use `registry.json` to dynamically load Skill definitions in your code.

---

## License
MIT
