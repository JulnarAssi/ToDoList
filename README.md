# To-Do List MCP Server

A Model Context Protocol (MCP) server for managing a simple to-do list.

The server allows an AI client to create, view, complete, search, update, and delete tasks using MCP tools. Tasks are stored locally in `data/tasks.json`.

## Demo

![To-Do List MCP Demo](docs/assets/demo.gif)


## Requirements

Before running the project, make sure you have:

- Node.js 20 or later
- npm
- Git

You can check your versions with:

```bash
node -v
npm -v
git --version
```

## Install

Clone the repository:

```bash
git clone https://github.com/JulnarAssi/ToDoList.git
cd ToDoList
```

Install the dependencies:

```bash
npm install
```

## Run

To start the MCP server:

```bash
npm run dev
```

The server uses stdio transport and waits for an MCP client connection.

To stop the server, press:

```text
Ctrl + C
```

## Run with MCP Inspector

MCP Inspector can be used to test the tools locally.

Run:

```bash
npm run inspect
```

The Inspector should open in your browser.

In MCP Inspector:

1. Connect to the server if needed.
2. Open the **Tools** tab.
3. Select a tool.
4. Enter the required input.
5. Click **Run Tool** or **Execute**.
6. Check the returned result.

## Available Tools

| Tool | Description |
| --- | --- |
| `add_task` | Create a new task with a title and optional task information. |
| `list_tasks` | Return tasks currently stored in the to-do list. |
| `complete_task` | Mark an existing task as completed using its task ID. |
| `search_task` | Search stored tasks using a keyword in the task title. |
| `update_task` | Update an existing task. |
| `delete_task` | Delete an existing task. |

## Example Prompts

Here are some examples of requests that can use the tools:

### Add a task

> Add a high-priority task called "Finish Week 5 report".

### List tasks

> Show me my current tasks.

### Complete a task

> Mark the task with ID 1220675 as completed.

### Search tasks

> Search my tasks for "Week 5".

### Update a task

> Update one of my existing tasks.

### Delete a task

> Delete a task from my to-do list.

## Data Storage

Tasks are stored locally in:

```text
data/tasks.json
```

The project does not require an external database or network service for task storage.

## Example Conversations

See [`examples/conversations.md`](examples/conversations.md) for sample user conversations showing the expected MCP tool calls and final assistant responses.


## Troubleshooting

### 1. `npm: command not found`

Node.js and npm may not be installed correctly.

Check:

```bash
node -v
npm -v
```

Install Node.js 20 or later, then try again.

### 2. MCP Inspector does not start

Make sure the dependencies are installed:

```bash
npm install
```

Then run:

```bash
npm run inspect
```

### 3. Failed to load tasks

Make sure `data/tasks.json` exists and contains valid JSON.

For example:

```json
[]
```

A missing file or invalid JSON syntax can prevent the tools from loading task data.

## License

This project is licensed under the MIT License.