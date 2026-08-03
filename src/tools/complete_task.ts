import type { McpServer } from "@modelcontextprotocol/server";

import { completeTaskInputSchema } from "../schemas/complete_task.js";

// Week 2 stub — marks a task as completed.
export function registerCompleteTaskTool(server: McpServer): void {
  server.registerTool(
    "complete_task",
    {
      description:
        "Marks an existing task as completed using its task ID and returns the updated task.",
      inputSchema: completeTaskInputSchema,
    },
    async ({ id }) => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                stub: true,
                tool: "complete_task",
                task: {
                  id,
                  completed: true,
                },
                message:
                  "The task was marked as completed. Replace this stub with the real task storage logic in Week 3.",
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