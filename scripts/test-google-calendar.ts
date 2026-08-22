import { getGoogleCalendarClient } from "../src/lib/google-calendar.js";

async function main() {
  const calendar = await getGoogleCalendarClient();

  const now = new Date();

  const response = await calendar.events.list({
    calendarId: "primary",
    timeMin: now.toISOString(),
    maxResults: 5,
    singleEvents: true,
    orderBy: "startTime",
  });

  const events = response.data.items ?? [];

  console.error(`Found ${events.length} upcoming event(s).`);

  for (const event of events) {
    console.error(
      `- ${event.summary ?? "(No title)"} | ${event.start?.dateTime ?? event.start?.date ?? "No start time"}`
    );
  }
}

main().catch((error) => {
  console.error("Google Calendar test failed:", error);
  process.exit(1);
});