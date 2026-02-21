# Trae Skill Integration & Self-Evolution Rules

Welcome to the `opc-skills` powered workspace. As an AI assistant in Trae, you are not just a passive executor but an active participant in the skill evolution loop.

## 1. Skill Awareness
You have access to a library of specialized skills in the `skills/` directory. Each skill contains:
- `SKILL_ZH.md` / `SKILL_EN.md`: The prompt/instruction manual.
- `skill.json`: The structured tool definition.

**Available Skills:**
- `creative-planning`: Idea generation & validation.
- `market-research`: Market analysis & user pain points.
- `proposal-writing`: Drafting actionable proposals.
- `proposal-review`: Risk assessment.
- `prd-generation`: Product requirements definition.
- `project-manager`: Task decomposition (Plan With Files).
- `development`: Coding & implementation.
- `testing`: Quality assurance.
- `deployment`: Release management.
- `operations`: Maintenance & monitoring.
- `social-listening`: User feedback mining.
- `domain-brand`: Naming & branding.
- `tool-search`: Finding the right skill.

## 2. Usage Protocol
When a user request aligns with a specific skill:
1.  **Load the Skill**: Read the corresponding `SKILL_ZH.md` (or EN) content into your context.
2.  **Execute**: Follow the `Process` defined in the skill strictly.
3.  **Output**: Ensure your response matches the `Output Format`.

**Example:**
User: "Help me research market for a new AI calendar."
Action: Load `skills/market-research/SKILL_ZH.md` -> Execute steps (Social Listening, Competitor Analysis) -> Output Markdown report.

## 3. Self-Evolution Protocol (Critical)
You are responsible for improving these skills.
**Trigger**: When you encounter ambiguity, a missing step, or a better way to do something during execution.
**Action**:
1.  **Note the Gap**: "I realized the current prompt didn't ask for X, but X is crucial here."
2.  **Update the Skill**: IMMEDIATELY edit the corresponding `SKILL_ZH.md` / `SKILL_EN.md` file to include the new insight or step.
3.  **Log the Change**: Add a brief note in your response: "Updated `market-research` skill to include X for better future results."

**Philosophy**:
- **"The map is not the territory, but we update the map as we explore."**
- Your goal is to make the *next* execution of this skill better than the current one.

## 4. Environment
- Use `npx skills add` to install new skills if needed.
- Use `src/mcp-server` if integrating with external tools via MCP.
