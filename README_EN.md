# opc-skills (One Person Company Skills)

[中文](README.md) | [English](README_EN.md)

**The AI Operating System for Solopreneurs, distilled from the wisdom of Silicon Valley's top minds.**

`opc-skills` is not just a collection of Prompts; it is an "Operating System" that integrates the methodologies of 10 top thought leaders in the "One-Person Company" space. It decomposes the entire process from idea to delivery into independently executable, composable, and auditable AI Skills.

---

## 🧠 Core Philosophy: The Silicon Valley Solopreneur OS

We have deeply deconstructed the core ideas of 10 influential "Solopreneur" influencers on X (Twitter) and internalized them into executable code and instructions:

| Layer | Thought Leader | Core Philosophy | Corresponding Skill |
| :--- | :--- | :--- | :--- |
| **Strategy** | **Dan Koe** | **The Niche is You**<br>Don't chase trends. Solve your own problems, then sell the solution to your past self. | `creative-planning` |
| | **Naval Ravikant** | **Productize Yourself**<br>Leverage "Code" and "Media" as permissionless leverage. | `creative-planning` |
| | **Paul Graham** | **Do things that don't scale**<br>Manually serve your first user before writing a single line of code. | `market-research` |
| **Execution** | **Pieter Levels** | **Ship Fast**<br>The best code is no code. Launch your MVP in 24 hours. | `development` |
| | **Tiago Forte** | **Second Brain / PARA**<br>Projects(P)-Areas(A)-Resources(R)-Archives(A). Manage chaos with file structures. | `project-manager` |
| **Growth** | **Justin Welsh** | **Content OS**<br>Content is not art; it's a matrixed system. Create once, repurpose infinitely. | `growth-hacker` |
| | **Tim Denning** | **Volume & Authenticity**<br>In the AI era, human authenticity is scarce. Volume begets quality. | `growth-hacker` |
| | **Roberto Blake** | **Video First**<br>Video builds the highest trust and is the source for content repurposing. | `growth-hacker` |
| **System** | **James Clear** | **Atomic Habits**<br>The core of a one-person company is the owner's habits. 1% improvement daily. | `operations` |
| **Decision** | **Shane Parrish** | **Mental Models**<br>Use "Inversion" and "Second-Order Thinking" to avoid stupid decisions. | `proposal-review` |

---

## 🧩 Skill Modules

Each Skill includes Chinese (`SKILL_ZH.md`), English (`SKILL_EN.md`) versions, and standard tool definition (`skill.json`).

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
7. **Development**: Ship software fast.
   - *Methodology*: Pieter Levels' Ship Fast + **Plan With Files**
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

## 🛠 Usage

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
