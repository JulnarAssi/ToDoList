import type { McpServer } from "@modelcontextprotocol/server";

import { createCalendarEventInputSchema } from "../schemas/create-calendar-event.js";
import { getGoogleCalendarClient } from "../lib/google-calendar.js";

export function registerCreateCalendarEventTool(server: McpServer): void {
  server.registerTool(
    "create_calendar_event",
    {
      description:
        "Create a new event in the user's primary Google Calendar using a title, start time, end time, and optional description.",
      inputSchema: createCalendarEventInputSchema,
    },
    async ({ title, start_time, end_time, description }) => {
      try {
        const calendar = await getGoogleCalendarClient();

        const response = await calendar.events.insert({
          calendarId: "primary",
          requestBody: {
            summary: title,
            description,
            start: {
              dateTime: start_time,
            },
            end: {
              dateTime: end_time,
            },
          },
        });

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: true,
                  tool: "create_calendar_event",
                  event: {
                    id: response.data.id,
                    title: response.data.summary,
                    start: response.data.start,
                    end: response.data.end,
                    htmlLink: response.data.htmlLink,
                  },
                },
                null,
                2,
              ),
            },
          ],
        };
      } catch (error) {
        console.error("create_calendar_event failed:", error);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: false,
                  tool: "create_calendar_event",
                  error: "Failed to create calendar event.",
                },
                null,
                2,
              ),
            },
          ],
          isError: true,
        };
      }
    },
  );
}