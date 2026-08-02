import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";

import { registerAddTaskTool } from "./tools/add-task.js";
import { registerCompleteTaskTool } from "./tools/complete_task.js";
import { registerSearchTasksTool } from "./tools/search_task.js";

function createServer(): McpServer {
  const server = new McpServer({
    name: "todo-list-mcp",
    version: "0.1.0",
  });

  registerAddTaskTool(server);
  registerCompleteTaskTool(server);
  registerSearchTasksTool(server);

  return server;
}

void serveStdio(createServer);

console.error("To-Do List MCP server running on stdio");