import { readFile, writeFile } from "node:fs/promises";    
import { resolve } from "node:path";
import { z } from "zod";

// each task must follow this formula : 
const taskSchema = z.object({
    id: z.string(),
    title: z.string(),
    priority: z.enum(["high", "medium", "low"]),
    completed: z.boolean(),
    due_date: z.string().optional(),
});

// array of:
const tasksSchema = z.array(taskSchema);

// to let the typescript conclued the task formula Automatically from the zod schema 
export type Task = z.infer<typeof taskSchema>;

// detect the file path
const tasksFilePath = resolve(
    process.cwd(),
    "data",
    "tasks.json",
);

//reading function that returns tasks from the array.
export async function readTasks(): Promise<Task[]>{

    try{ 

    const fileContent = await readFile(tasksFilePath, "utf-8");     // read the file as a text file

    if (fileContent.trim() === "") {        // handling the error by returning empty an array
        return [];
      }

    const parseData: unknown = JSON.parse(fileContent);     // convert the text into a json, unknown is for check the data before use 

    return tasksSchema.parse(parseData);     // check the data using zod shcema, if thers an issue the zod returns a error message.
    
    }catch(error){
     console.error("readTask failed:", error);
     throw new Error("Unable to read the tasks data file.");

    }
}

//save data function

export async function writeTasks(tasks: Task[]): Promise<void> {

    const validTasks = tasksSchema.parse(tasks);
    await writeFile(
        tasksFilePath,
        JSON.stringify(validTasks, null, 2), // Converts Array to ordered JSON text.  
        "utf-8",  // encoding system
      );
}



