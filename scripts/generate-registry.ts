import fs from 'fs';
import path from 'path';

const SKILLS_DIR = path.join(process.cwd(), 'skills');
const REGISTRY_PATH = path.join(process.cwd(), 'registry.json');

interface SkillDefinition {
  name: string;
  description: string;
  parameters?: any;
  path: string;
  prompt_zh?: string;
  prompt_en?: string;
}

function generateRegistry() {
  if (!fs.existsSync(SKILLS_DIR)) {
    console.error('Skills directory not found');
    process.exit(1);
  }

  const skills: Record<string, SkillDefinition> = {};
  const entries = fs.readdirSync(SKILLS_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const skillName = entry.name;
      const skillPath = path.join(SKILLS_DIR, skillName);
      const jsonPath = path.join(skillPath, 'skill.json');
      const zhPath = path.join(skillPath, 'SKILL_ZH.md');
      const enPath = path.join(skillPath, 'SKILL_EN.md');

      if (fs.existsSync(jsonPath)) {
        try {
          const definition = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
          
          skills[skillName] = {
            name: definition.name,
            description: definition.description,
            parameters: definition.parameters,
            path: `skills/${skillName}`,
            // We only store paths to prompts to keep registry lightweight, 
            // or we could store content if needed. Let's store paths for now.
            prompt_zh: fs.existsSync(zhPath) ? `skills/${skillName}/SKILL_ZH.md` : undefined,
            prompt_en: fs.existsSync(enPath) ? `skills/${skillName}/SKILL_EN.md` : undefined
          };
          
          console.log(`Registered skill: ${skillName}`);
        } catch (e) {
          console.error(`Error processing ${skillName}:`, e);
        }
      }
    }
  }

  fs.writeFileSync(REGISTRY_PATH, JSON.stringify(skills, null, 2));
  console.log(`Registry generated at ${REGISTRY_PATH}`);
}

generateRegistry();
