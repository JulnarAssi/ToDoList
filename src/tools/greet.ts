import type { McpServer } from "@modelcontextprotocol/server";

import { greetInputSchema } from "../schemas/Hello.js";

/**
 * Week 1 starter tool — proves your stack, Inspector, and Zod validation work.
 * Keep this tool until your Week 2 project tools are registered and verified.
 */
export function registerHelloTool(server: McpServer): void {
  server.registerTool(
    "Helloooooo",
    {
      description:
        "Return a welcom messaege for these names.",
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
