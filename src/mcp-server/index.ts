#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
  ListToolsRequestSchema,
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SKILLS_DIR = path.resolve(__dirname, "../../skills");

// --- Helper Functions ---

function getSkills() {
  const skills = [];
  if (fs.existsSync(SKILLS_DIR)) {
    const entries = fs.readdirSync(SKILLS_DIR, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const skillPath = path.join(SKILLS_DIR, entry.name);
        // Prioritize English for default, but support both if requested (todo)
        const promptPath = path.join(skillPath, "SKILL_EN.md");
        const jsonPath = path.join(skillPath, "skill.json");
        
        if (fs.existsSync(promptPath) && fs.existsSync(jsonPath)) {
          try {
            const definition = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
            const content = fs.readFileSync(promptPath, "utf-8");
            skills.push({
              id: entry.name,
              definition,
              content
            });
          } catch (e) {
            console.error(`Error loading skill ${entry.name}:`, e);
          }
        }
      }
    }
  }
  return skills;
}

const skills = getSkills();

// --- Server Setup ---

const server = new Server(
  {
    name: "opc-skills-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      prompts: {},
      tools: {},
      resources: {},
    },
  }
);

// --- Resources ---

server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: skills.map((skill) => ({
      uri: `opc-skills://${skill.id}/prompt`,
      mimeType: "text/markdown",
      name: skill.definition.name,
      description: skill.definition.description,
    })),
  };
});

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const url = new URL(request.params.uri);
  const skillId = url.hostname;
  const skill = skills.find((s) => s.id === skillId);

  if (!skill) {
    throw new Error(`Skill ${skillId} not found`);
  }

  return {
    contents: [
      {
        uri: request.params.uri,
        mimeType: "text/markdown",
        text: skill.content,
      },
    ],
  };
});

// --- Prompts ---

server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return {
    prompts: skills.map((skill) => ({
      name: skill.id,
      description: skill.definition.description,
      arguments: [
        {
          name: "input",
          description: "Optional structured input JSON to pre-fill the prompt context",
          required: false,
        },
      ],
    })),
  };
});

server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  const skill = skills.find((s) => s.id === request.params.name);
  if (!skill) {
    throw new Error(`Prompt ${request.params.name} not found`);
  }

  const input = request.params.arguments?.input || "{}";
  
  return {
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `${skill.content}\n\nUser Input Context:\n${input}`,
        },
      },
    ],
  };
});

// --- Tools ---

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      // 1. ToolSearchTool (Meta-Tool)
      {
        name: "tool-search",
        description: "Search for the most appropriate skill/tool for a given task.",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Description of the task or problem you want to solve.",
            },
          },
          required: ["query"],
        },
      },
      // 2. Programmatic Tool Calling (Expose all skills as tools)
      ...skills.map((skill) => ({
        name: skill.definition.name,
        description: skill.definition.description,
        inputSchema: skill.definition.parameters || { type: "object", properties: {} },
      })),
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  // Handle ToolSearchTool
  if (name === "tool-search") {
    const query = (args.query as string).toLowerCase();
    const matches = skills
      .filter((s) => 
        s.definition.name.toLowerCase().includes(query) || 
        s.definition.description.toLowerCase().includes(query) ||
        s.content.toLowerCase().includes(query)
      )
      .map((s) => ({
        name: s.definition.name,
        description: s.definition.description,
        match_score: 1 // Simple matching for now
      }));
    
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(matches, null, 2),
        },
      ],
    };
  }

  // Handle Skill Tools (PTC)
  // In a real agent scenario, this might trigger a sub-agent or return the prompt instructions.
  // For now, we return the instruction prompt combined with the arguments, 
  // signaling the agent to "execute" this logic mentally or via a sub-call.
  const skill = skills.find((s) => s.definition.name === name);
  if (!skill) {
    throw new Error(`Tool ${name} not found`);
  }

  return {
    content: [
      {
        type: "text",
        text: `EXECUTING SKILL: ${skill.definition.name}\n\nINSTRUCTIONS:\n${skill.content}\n\nINPUT PARAMETERS:\n${JSON.stringify(args, null, 2)}`,
      },
    ],
  };
});

// --- Start Server ---

const transport = new StdioServerTransport();
await server.connect(transport);
