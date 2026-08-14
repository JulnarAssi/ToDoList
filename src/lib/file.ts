import { readFile, writeFile } from "node:fs/promises";
import { resolve, sep } from "node:path";
import { z } from "zod";

// Each task must follow this structure.
const taskSchema = z.object({
  id: z
    .string()
    .length(7, "Task ID must contain exactly 7 digits.")
    .regex(/^\d+$/, "Task ID must contain numbers only."),

  title: z
    .string()
    .min(1, "Task title cannot be empty.")
    .max(200, "Task title must be 200 characters or fewer."),

  priority: z.enum(["high", "medium", "low"]),

  completed: z.boolean(),

  due_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Due date must use YYYY-MM-DD format.")
    .refine((val) => {
      const [year, month, day] = val.split("-").map(Number);
      const date = new Date(Date.UTC(year, month - 1, day));
      return (
        date.getUTCFullYear() === year &&
        date.getUTCMonth() === month - 1 &&
        date.getUTCDate() === day
      );
    }, "Due date must be a real calendar date.")
    .optional(),
});

const tasksSchema = z.array(taskSchema);

export type Task = z.infer<typeof taskSchema>;

// Allowed data directory.
const dataDirectory = resolve(process.cwd(), "data");

// Fixed tasks file.
const tasksFilePath = resolve(dataDirectory, "tasks.json");

// Security check: make sure the file stays inside ./data.
function ensureSafeDataPath(filePath: string): string {
  const resolvedPath = resolve(filePath);

  if (resolvedPath !== dataDirectory && !resolvedPath.startsWith(dataDirectory + sep)) {
    throw new Error("Unsafe file path rejected.");
  }

  return resolvedPath;
}

// Read tasks from data/tasks.json.
export async function readTasks(): Promise<Task[]> {
  try {
    const safePath = ensureSafeDataPath(tasksFilePath);

    const fileContent = await readFile(safePath, "utf-8");

    if (fileContent.trim() === "") {
      return [];
    }

    const parsedData: unknown = JSON.parse(fileContent);

    return tasksSchema.parse(parsedData);
  } catch (error) {
    console.error("readTasks failed:", error);

    throw new Error("Unable to read the tasks data file.");
  }
}

// Save tasks to data/tasks.json.
export async function writeTasks(tasks: Task[]): Promise<void> {
  try {
    const safePath = ensureSafeDataPath(tasksFilePath);

    const validTasks = tasksSchema.parse(tasks);

    await writeFile(
      safePath,
      JSON.stringify(validTasks, null, 2),
      "utf-8",
    );
  } catch (error) {
    console.error("writeTasks failed:", error);

    throw new Error("Unable to save the tasks data file.");
  }
}
