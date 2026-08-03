import type { McpServer } from "@modelcontextprotocol/server";

import { completeTaskInputSchema } from "../schemas/complete_task.js";
import { readTasks, writeTasks } from "../lib/file.js";

/** EXAMPLE Week 2 stub — append a new note (P0 candidate). */
export function completeTaskTool(server: McpServer): void {
  server.registerTool(
    "complete_task",
    {
      description:
        "Mark an existance task as completed using its task ID and return the updated task.",
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
                    "The task was marked as completed. replace this stub with the real task storge logic in week 3."
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