# To-Do List MCP Server

A **Model Context Protocol (MCP) server** built with TypeScript that allows an AI assistant to manage tasks through structured and validated tools.

Developed as a team project during the **NextFlows Academy – Building an MCP for an AI Engine** program.

---

## How It Works

```text
User
  ↓
AI Assistant
  ↓
MCP Server
  ↓
Validated Tools
  ↓
data/tasks.json
```

The AI does not interact directly with the stored data. It calls defined MCP tools, where inputs are validated before task data is read or modified.

---

## Tools

| Tool            | Purpose                  |
| --------------- | ------------------------ |
| `add_task`      | Create a new task        |
| `list_tasks`    | List stored tasks        |
| `complete_task` | Mark a task as completed |
| `update_task`   | Update a task            |
| `delete_task`   | Delete a task            |
| `search_task`   | Search for tasks         |

### Main Demo Flow

```text
add_task
    ↓
list_tasks
    ↓
complete_task
```

---

## Tech Stack

| Technology    | Purpose                              |
| ------------- | ------------------------------------ |
| TypeScript    | Server implementation                |
| MCP SDK       | MCP tools and server                 |
| Zod           | Input validation                     |
| JSON          | Local task storage                   |
| MCP Inspector | Testing and debugging                |
| Git & GitHub  | Team development and version control |

---

## Quick Start

```bash
git clone https://github.com/JulnarAssi/ToDoList.git
cd ToDoList
npm install
npm run inspect
```

Then open **Tools** in MCP Inspector and test the available tools.

---

## Project Structure

```text
ToDoList/
├── data/          # Task data
├── docs/          # Project documentation
├── examples/      # Example tool inputs
├── src/
│   ├── schemas/   # Zod validation
│   └── tools/     # MCP tools
├── SECURITY.md
└── README.md
```

---

## Reliability & Security

The server includes:

* Zod input validation
* Input limits and controlled values
* Safe local data access
* Output limits
* Clear error handling
* Local storage with no required API keys

See [`SECURITY.md`](SECURITY.md) for more details.

---

## Team & Development

This project was built collaboratively by:

* **Julnar Assi**
* **Lana Al-Sayes**
* **Maysam Abu Eid**

The project gave us practical experience with **MCP development, TypeScript, validation, Git branches, commits, pull requests, code review, testing, and collaborative software development**.

### Development Workflow

```text
Design → Implement → Test → Review → Improve → Demo
```

The project demonstrates not only a working MCP server, but also a complete team-based development workflow using Git and GitHub.

---

## Documentation

| Document                   | Purpose                        |
| -------------------------- | ------------------------------ |
| `docs/design.md`           | Tool design                    |
| `docs/data-plan.md`        | Data plan                      |
| `docs/threat-model.md`     | Security risks and mitigations |
| `docs/review-checklist.md` | Peer review                    |
| `SECURITY.md`              | Security policy                |

---

## License

MIT
