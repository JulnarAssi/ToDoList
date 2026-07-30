import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";

import { registerAddTaskTool } from "./tools/add-task.js";
import { registerDeleteTaskTool } from "./tools/delete-task.js";

/**
 * Factory used by stdio (and later HTTP) so every connection gets a fresh server.
 * Register all tools inside this function — never on a shared global instance.
 */
function createServer(): McpServer {
  const server = new McpServer({
    name: "mcprepo",
    version: "0.1.0",
  });

  // Register  tools
  registerAddTaskTool(server);
   registerDeleteTaskTool(server);

  return server;
}

void serveStdio(createServer);
console.error("mcprepo MCP server running on stdio");