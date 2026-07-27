import type { McpServer } from "@modelcontextprotocol/server";

import { greetInputSchema } from "../schemas/greet.js";

/**
 * Week 1 starter tool — proves your stack, Inspector, and Zod validation work.
 * Keep this tool until your Week 2 project tools are registered and verified.
 */
export function registerGreetTool(server: McpServer): void {
  server.registerTool(
    "maysam_greet",
    {
      description:
        "A custom greeting tool by Maysam Abu Eid to verify the MCP server is running.",
      inputSchema: greetInputSchema,
    },
    async ({ name }) => {
      return {
        content: [
          {
            type: "text",
            text: `Hello, ${name}! Your MCP server is running.`,
          },
        ],
      };
    },
  );
}
