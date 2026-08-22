import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";
import { registerTasksInfoResource } from "./resources/tasks-info.js";

import { registerAddTaskTool } from "./tools/add-task.js";
import { registerDeleteTaskTool } from "./tools/delete-task.js";
import { registerCompleteTaskTool } from "./tools/complete_task.js";
import { registerSearchTasksTool } from "./tools/search_task.js";
import { registerListTasksTool } from "./tools/list_tasks.js";
import { registerUpdateTaskTool } from "./tools/update-task.js";
import { registerCreateCalendarEventTool } from "./tools/create-calendar-event.js";

function createServer(): McpServer {
  const server = new McpServer({
    name: "todo-list-mcp",
    version: "0.1.0",
  });

  registerAddTaskTool(server);
  registerDeleteTaskTool(server);
  registerCompleteTaskTool(server);
  registerSearchTasksTool(server);
  registerListTasksTool(server);
  registerUpdateTaskTool(server);
  registerCreateCalendarEventTool(server);

  // Register the read-only resource
  registerTasksInfoResource(server);

  return server;
}

void serveStdio(createServer);

console.error("To-Do List MCP server running on stdio");