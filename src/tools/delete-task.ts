import type { McpServer } from "@modelcontextprotocol/server";

import { deleteTaskInputSchema } from "../schemas/delete-task.js";

/** Week 2 stub — delete an existing task from the to-do list. */
export function registerDeleteTaskTool(server: McpServer): void {
  server.registerTool(
    "delete_task",
    {
      description:
        "Permanently remove a task from the to-do list using its task ID.",
      inputSchema: deleteTaskInputSchema,
    },
    async ({ id }) => {
      // Week 2: stub only — Week 3 replaces this with real data
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                ok: true,
                stub: true,
                tool: "delete_task",
                id,
                message: "not implemented yet",
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