import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";

import { registerAddTaskTool } from "./tools/add-task.js";
<<<<<<< Updated upstream
import { registerDeleteTaskTool } from "./tools/delete-task.js";
import { registerCompleteTaskTool } from "./tools/complete_task.js";
=======
>>>>>>> Stashed changes
import { registerSearchTasksTool } from "./tools/search_task.js";

/**
 * Factory used by stdio (and later HTTP) so every connection gets a fresh server.
 * Register all tools inside this function — never on a shared global instance.
 */
function createServer(): McpServer {
  const server = new McpServer({
    name: "mcprepo",
    version: "0.2.0",
  });

<<<<<<< Updated upstream
  // Register tools
  registerAddTaskTool(server);
  registerDeleteTaskTool(server);
  registerCompleteTaskTool(server);
  registerSearchTasksTool(server);
=======
  // Register only your addTask tool
  registerAddTaskTool(server);
  registerSearchTasksTool(server)
>>>>>>> Stashed changes

  return server;
}

void serveStdio(createServer);
console.error("To-Do List MCP server running on stdio");