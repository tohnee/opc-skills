# opc-skills (One Person Company Skills)

[中文](README.md) | [English](README_EN.md)

`opc-skills` is a comprehensive collection of Skills for "One-Person Companies" (Solopreneurs), designed to decompose the entire process from idea to delivery into independently executable, composable, and auditable workflow modules.

**Philosophy Core**: Infused with the philosophies of **Naval Ravikant** (Leverage & Productization), **Dan Koe** (One-Person Business), **Elon Musk** (First Principles), and **Steve Jobs** (Taste & Design).

**Methodology Integration**: Absorbed core concepts of **Superpower (Specific Knowledge)** and **Plan With Files (Map Before Territory)** into all workflows.

## Goals
- **End-to-End Coverage**: Creative Planning -> Market Research -> Proposal Writing -> Review -> PRD -> Project Management -> Development -> Testing -> Deployment -> Operations
- **Low Coupling, High Reuse**: Each Skill can be used independently or chained into a pipeline.
- **Measurable Output**: Each stage has clear acceptance criteria and feedback loops.

## Compatibility
This project follows standard Prompt/Skill definitions and supports:
- Claude Code
- Codex
- OpenCode (Interpreter)
- **OpenClaw (Agent Framework)**: Provides full `skill.json` definitions for Function Calling support.
- Trae / Cursor (via `.md` import or Prompt config)
- MCP (Model Context Protocol) Servers (via Prompt Resource)

## Module List (Bilingual Support)

Each Skill provides Chinese (`SKILL_ZH.md`), English (`SKILL_EN.md`) versions, and standard tool definition (`skill.json`).

### Core Pipeline
1. **Creative Planning**: Generate actionable creative directions & core assumptions
   - *Philosophy*: Naval (Specific Knowledge) + Musk (First Principles)
   - *New Feature*: Helps excavate user's **Superpower**.
2. **Market Research**: Verify market reality & opportunity
   - *Philosophy*: Dan Koe (Niche is You) + Jobs (Hidden Needs)
3. **Proposal Writing**: Convert research into executable proposals
4. **Proposal Review**: Systematically evaluate feasibility & risks
5. **PRD Generation**: Translate proposals into actionable PRDs
6. **Project Manager**: Decompose tasks, schedule, & resource planning
   - *Methodology*: **Plan With Files** (File-level task decomposition)
7. **Development**: Convert PRD to deliverable software & code
   - *Philosophy*: Jobs (Simplicity) + Naval (Code Leverage)
   - *Methodology*: **Plan With Files** (Map Before Territory)
8. **Testing**: Validate quality & requirement matching
9. **Deployment**: Safely release to production
10. **Operations**: Ensure stability & continuous optimization
    - *Philosophy*: Dan Koe (Automation & Freedom)

### Tactical Tools - *New!*
11. **Social Listening**: Mine genuine user pain points from Reddit/X/HN
    - *Methodology*: The Mom Test + Digital Ethnography
12. **Domain & Brand**: Generate brand names, domain suggestions, and Logo ideas
    - *Philosophy*: Paul Graham (Simple Naming) + Steve Jobs (Minimalist)

## Usage

Each Skill is located in `skills/<skill-name>/`:
- Chinese Prompt: `SKILL_ZH.md`
- English Prompt: `SKILL_EN.md`
- Tool Definition (JSON Schema): `skill.json`

You can choose to use Prompt (Markdown) or Tool Definition (JSON) depending on the target platform.

## Installation

### 1. CLI Installation (Standard)
Universal Install (Supports Claude Code / Codex / OpenCode, etc.):
```bash
npx skills add tohnee/opc-skills
```

### 2. OpenClaw Integration (Agent Framework)
OpenClaw, as an Agent Framework, can directly read the `skill.json` from the repository to implement Function Calling.

In OpenClaw config:
```yaml
skills:
  - url: https://github.com/tohnee/opc-skills/tree/main/skills/creative-planning
    version: latest
    # OpenClaw will automatically load skill.json for tool definitions
```

### 3. Manual Integration
Copy the `.md` files from `skills/` directory to your Prompt Library or Cursor Rules.

## License
MIT
