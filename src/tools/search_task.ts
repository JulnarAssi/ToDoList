import type { McpServer } from "@modelcontextprotocol/server";

import { searchTasksInputSchema } from "../schemas/search_task.js";

/** Register the search_tasks P1 tool. */
export function registerSearchTasksTool(server: McpServer): void {
  server.registerTool(
    "search_task",
    {
      description:
        "Search stored tasks using a keyword in the task title.",
      inputSchema: searchTasksInputSchema,
    },
    async ({ keyword }) => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                stub: true,
                tool: "search_task",
                keyword,
                message: "Not implemented yet.",
              },
              null,
              2,
            ),
          },
        ],
      };
    },
  );
}
