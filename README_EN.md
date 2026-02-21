# opc-skills (One Person Company Skills)

[中文](README.md) | [English](README_EN.md)

`opc-skills` is a comprehensive collection of Skills for "One-Person Companies" (Solopreneurs), designed to decompose the entire process from idea to delivery into independently executable, composable, and auditable workflow modules.

**Philosophy Core**: Infused with the philosophies of **Naval Ravikant** (Leverage & Productization), **Dan Koe** (One-Person Business), **Elon Musk** (First Principles), and **Steve Jobs** (Taste & Design).

## Goals
- **End-to-End Coverage**: Creative Planning -> Market Research -> Proposal Writing -> Review -> PRD -> Project Management -> Development -> Testing -> Deployment -> Operations
- **Low Coupling, High Reuse**: Each Skill can be used independently or chained into a pipeline.
- **Measurable Output**: Each stage has clear acceptance criteria and feedback loops.

## Compatibility
This project follows standard Prompt/Skill definitions and supports:
- Claude Code
- Codex
- OpenCode
- Trae / Cursor (via `.md` import or Prompt config)
- MCP (Model Context Protocol) Servers

## Module List (Bilingual Support)

Each Skill provides both Chinese (`SKILL_ZH.md`) and English (`SKILL_EN.md`) versions.

1. **Creative Planning**: Generate actionable creative directions & core assumptions
   - *Philosophy*: Naval (Specific Knowledge) + Musk (First Principles)
2. **Market Research**: Verify market reality & opportunity
   - *Philosophy*: Dan Koe (Niche is You) + Jobs (Hidden Needs)
3. **Proposal Writing**: Convert research into executable proposals
4. **Proposal Review**: Systematically evaluate feasibility & risks
5. **PRD Generation**: Translate proposals into actionable PRDs
6. **Project Manager**: Decompose tasks, schedule, & resource planning
7. **Development**: Convert PRD to deliverable software & code
   - *Philosophy*: Jobs (Simplicity) + Naval (Code Leverage)
8. **Testing**: Validate quality & requirement matching
9. **Deployment**: Safely release to production
10. **Operations**: Ensure stability & continuous optimization
    - *Philosophy*: Dan Koe (Automation & Freedom)

## Usage

Each Skill is located in `skills/<skill-name>/`:
- Chinese: `SKILL_ZH.md`
- English: `SKILL_EN.md`

You can input the content of the corresponding `.md` file directly as System Prompt or Instruction to your AI Agent.

## Installation

Universal Install (Supports Claude Code / Codex / OpenCode, etc.):
```bash
npx skills add tohnee/opc-skills
```

Install specific skill:
```bash
npx skills add tohnee/opc-skills --skill creative-planning
npx skills add tohnee/opc-skills --skill market-research
# ... etc
```

## License
MIT
