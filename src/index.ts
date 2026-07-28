import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";

import { completeTaskTool } from "./tools/complete_task.js";

/**
 * Factory used by stdio so every connection gets a fresh server.
 * Register all tools inside this function.
 */
function createServer(): McpServer {
  const server = new McpServer({
    name: "todo-list-mcp",
    version: "0.1.0",
  });

  completeTaskTool(server);

  return server;
}

void serveStdio(createServer);

console.error("To-Do List MCP server running on stdio");