import * as z from "zod/v4";

export const createCalendarEventInputSchema = z.object({
  title: z
    .string()
    .min(1, "Event title is required.")
    .max(200, "Event title must be 200 characters or fewer.")
    .describe("The title of the calendar event."),

  start_time: z
    .string()
    .datetime({ offset: true })
    .describe(
      "Event start date and time in ISO 8601 format with timezone offset, for example 2026-08-23T16:00:00+03:00.",
    ),

  end_time: z
    .string()
    .datetime({ offset: true })
    .describe(
      "Event end date and time in ISO 8601 format with timezone offset, for example 2026-08-23T17:00:00+03:00.",
    ),

  description: z
    .string()
    .max(1000, "Description must be 1000 characters or fewer.")
    .optional()
    .describe("Optional description for the calendar event."),
});