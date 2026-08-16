import type { McpServer } from "@modelcontextprotocol/server";

import { searchTasksInputSchema } from "../schemas/search_task.js";
import { readTasks } from "../lib/file.js";

/** Register the search_task tool. */
export function registerSearchTasksTool(server: McpServer): void {
  server.registerTool(
    "search_task",
    {
      description:
        "Search stored tasks using a keyword in the task title.",
      inputSchema: searchTasksInputSchema,
    },
    async ({ keyword }) => {
      try {
        const tasks = await readTasks();

        const normalizedKeyword = keyword.trim().toLowerCase();

        const matchingTasks = tasks.filter((task) =>
          task.title.toLowerCase().includes(normalizedKeyword),
        );

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: true,
                  tool: "search_task",
                  keyword,
                  count: matchingTasks.length,
                  tasks: matchingTasks,
                },
                null,
                2,
              ),
            },
          ],
        };
      } catch (error) {
        console.error("search_task failed:", error);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: false,
                  tool: "search_task",
                  error: "Failed to search tasks.",
                },
                null,
                2,
              ),
            },
          ],
          isError: true,
        };
      }
    },
  );
}