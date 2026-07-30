import type { McpServer } from "@modelcontextprotocol/server";

import { addTaskInputSchema } from "../schemas/add-task.js";

/** Week 2 stub — add a new task to the to-do list. */
export function registerAddTaskTool(server: McpServer): void {
  server.registerTool(
    "add_task",
    {
      description:
        "Create a new task with a title and description for the to-do list.",
      inputSchema: addTaskInputSchema,
    },
    async ({ title, description }) => {
      // Week 2: stub only — Week 3 replaces this with real data
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                ok: true,
                stub: true,
                tool: "add_task",
                title,
                descriptionPreview: description ? description.slice(0, 80) : "",
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