// ---------------------------------------------------------------------------
// MCP TOOLS
// ---------------------------------------------------------------------------
// Sourced directly from the MCP server: src/tools/*.ts and README.md
// "Available Tools" table in the main repository. Do not add tools that do
// not exist in src/tools/ — keep this in sync with the server.
//
// `example` mirrors the tool's real input/output shape for the Tools
// section hover reveal. It's illustrative copy, not live data.
// ---------------------------------------------------------------------------

export type ToolDef = {
  name: string;
  description: string;
  kind: "local" | "external";
  icon: string;
  inputs: string[];
  example: {
    input: string[];
    output: string;
  };
};

export const tools: ToolDef[] = [
  {
    name: "add_task",
    icon: "+",
    description:
      "Create a new task with a title, optional priority, and optional due date. Saves it to the task list and returns the saved task with its generated ID.",
    kind: "local",
    inputs: ["title", "priority?", "due_date?"],
    example: {
      input: [
        'title: "AI training report"',
        'priority: "high"',
        'due_date: "tomorrow"',
      ],
      output: "✓ Task created",
    },
  },
  {
    name: "list_tasks",
    icon: "\u2261",
    description:
      "Lists tasks from the saved task file, optionally filtered by completion status and priority.",
    kind: "local",
    inputs: ["status?", "priority?", "limit?"],
    example: {
      input: ['status: "pending"', 'priority: "high"'],
      output: "✓ Matching tasks returned",
    },
  },
  {
    name: "complete_task",
    icon: "\u2713",
    description:
      "Mark an existing task as completed using its task ID and return the updated task.",
    kind: "local",
    inputs: ["id"],
    example: {
      input: ["id: 1234567"],
      output: "✓ Task marked complete",
    },
  },
  {
    name: "search_task",
    icon: "\u2315",
    description: "Search stored tasks using a keyword in the task title.",
    kind: "local",
    inputs: ["keyword"],
    example: {
      input: ['keyword: "MCP report"'],
      output: "✓ 1 task found",
    },
  },
  {
    name: "update_task",
    icon: "\u21bb",
    description:
      "Updates the title, priority, or due date of an existing task using its task ID.",
    kind: "local",
    inputs: ["id", "title?", "priority?", "due_date?"],
    example: {
      input: ["id: 1234567", 'priority: "medium"'],
      output: "✓ Task updated",
    },
  },
  {
    name: "delete_task",
    icon: "\u00d7",
    description:
      "Permanently remove a task from the to-do list using its task ID. This action cannot be undone.",
    kind: "local",
    inputs: ["id"],
    example: {
      input: ["id: 1234567"],
      output: "✓ Task deleted",
    },
  },
  {
    name: "create_calendar_event",
    icon: "\u25f3",
    description:
      "Create a new event in the user's primary Google Calendar using a title, start time, end time, and optional description.",
    kind: "external",
    inputs: ["title", "start_time", "end_time", "description?"],
    example: {
      input: [
        'title: "Prepare Demo Day"',
        'start_time: "4:00 PM"',
        'end_time: "5:00 PM"',
      ],
      output: "✓ Calendar event created",
    },
  },
];
