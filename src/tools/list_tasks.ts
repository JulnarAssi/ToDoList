import type { McpServer } from "@modelcontextprotocol/server";

import { listTasksInputSchema } from "../schemas/list_tasks.js";

/** Week 2 stub — list tasks from the to-do list. */
export function registerListTasksTool(server: McpServer): void {
  server.registerTool(
    "list_tasks",
    {
      description:
        "List all tasks, with optional filters for status and priority.",
      inputSchema: listTasksInputSchema,
    },
    async ({ status, priority, limit }) => {
      // Week 2: stub only — Week 3 replaces this with real data
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                ok: true,
                stub: true,
                tool: "list_tasks",
                filters: {
                  status: status ?? null,
                  priority: priority ?? null,
                  limit: limit ?? null,
                },
                tasks: [],
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