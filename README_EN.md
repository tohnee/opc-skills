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

### Expert Advisors - *New!*
13. **Legal Advisor**: Contract review & IP protection
    - *Philosophy*: Mitigate risks without a full-time lawyer.
14. **Growth Hacker**: 0-budget marketing & cold start
    - *Philosophy*: Lean Startup + Engineering Growth (replacing Marketing Manager).

## Usage

Each Skill is located in `skills/<skill-name>/`:
- Chinese Prompt: `SKILL_ZH.md`
- English Prompt: `SKILL_EN.md`
- Tool Definition (JSON Schema): `skill.json`

You can choose to use Prompt (Markdown) or Tool Definition (JSON) depending on the target platform.

## Detailed Installation & Usage Guide

### Scenario A: Using CLI Tools (Claude Code / Codex / Trae)

These tools typically serve as coding assistants, using `npx` to load Skills as context or prompt templates.

**1. Installation**
Run in your project root:

```bash
# Install the full skill pack
npx skills add tohnee/opc-skills

# Or install specific skills (Recommended)
npx skills add tohnee/opc-skills --skill creative-planning
```

**2. Usage**
Once installed, the Skill content is loaded into your current context or `.cursorrules` / `.trae/rules`.
You can invoke them directly in the chat using natural language:

> "Help me brainstorm a SaaS idea for indie developers based on the creative-planning guidelines."
> "Analyze the feasibility of this idea using the market-research methodology."

**3. Advanced: Chaining Skills**
You can chain multiple skills together:
> "First, use creative-planning to generate 3 directions, then use domain-brand to name the best one."

---

### Scenario B: Using Agent Framework (OpenClaw)

OpenClaw is a fully autonomous Agent Framework that not only reads prompts but also performs **Function Calling** via `skill.json`, enabling true automated execution.

**1. Configuration**
Open your OpenClaw configuration file (usually `config.yaml` or `agent.yaml`) and add repository links under the `skills` section:

```yaml
skills:
  # Core Pipeline
  - url: https://github.com/tohnee/opc-skills/tree/main/skills/creative-planning
    version: latest
  - url: https://github.com/tohnee/opc-skills/tree/main/skills/market-research
    version: latest
  # Tactical Tools
  - url: https://github.com/tohnee/opc-skills/tree/main/skills/social-listening
    version: latest
```

*Note: OpenClaw will automatically detect `skill.json` in the directory and register it as a callable tool.*

**2. Usage**
You don't need to instruct the Agent on specific steps; just provide the goal, and the Agent will automatically select the appropriate Skill to call:

> **User**: "Help me research the reception of the 'Notion for Kids' idea on Reddit."
>
> **OpenClaw (Thinking)**: User needs research -> Matches `social-listening` tool -> Calls tool with arguments `{ keywords: "Notion for Kids", platform: "Reddit" }`.
>
> **OpenClaw (Executing)**: (Automatically runs scraper or search API) -> Returns pain point report.

### Scenario C: Manual Integration (Cursor / Obsidian)

If you don't use the tools above, you can also use them manually:

1. Navigate to the `skills/` directory.
2. Copy the content of `SKILL_EN.md`.
### Scenario D: MCP Server (Model Context Protocol) - *New!*

This project provides full **Model Context Protocol (MCP)** support, exposing all Skills as Prompts and Tools to MCP-compatible clients (e.g., Claude Desktop).

**1. Start MCP Server**
```bash
cd src/mcp-server
npm install
npm run build
node dist/index.js
```

**2. Features**
- **Prompts**: All Skill markdown content is available as MCP Prompts.
- **Tools**: All Skills are registered as MCP Tools, supporting parameterized calls.
- **Tool Search**: Built-in `tool-search` tool for semantic skill discovery.

### Scenario E: Programmatic Tool Calling (PTC)

For developers, a `registry.json` is provided, aggregating metadata and paths for all Skills for dynamic loading in code.

```javascript
import registry from 'opc-skills/registry.json';

// Dynamically lookup tool
const skill = registry['market-research'];
console.log(skill.parameters); // Get JSON Schema
```

## License
MIT
