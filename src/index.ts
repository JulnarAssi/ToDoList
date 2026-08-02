import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";

import { registerAddTaskTool } from "./tools/add-task.js";
import { registerDeleteTaskTool } from "./tools/delete-task.js";
import { completeTaskTool } from "./tools/complete_task.js";
import { registerSearchTasksTool } from "./tools/search_task.js";

function createServer(): McpServer {
  const server = new McpServer({
    name: "todo-list-mcp",
    version: "0.2.0",
  });

  // Register tools
  registerAddTaskTool(server);
  registerDeleteTaskTool(server);
  completeTaskTool(server);
  registerSearchTasksTool(server);

  return server;
}

void serveStdio(createServer);

console.error("To-Do List MCP server running on stdio");