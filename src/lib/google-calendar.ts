import { readFile } from "node:fs/promises";
import { google } from "googleapis";

const OAUTH_FILE = ".secrets/google-calendar-oauth.json";
const TOKEN_FILE = ".secrets/google-calendar-token.json";

export async function getGoogleCalendarClient() {
  const credentialsText = await readFile(OAUTH_FILE, "utf-8");
  const tokenText = await readFile(TOKEN_FILE, "utf-8");

  const credentials = JSON.parse(credentialsText);
  const token = JSON.parse(tokenText);

  const { client_id, client_secret, redirect_uris } = credentials.installed;

  const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0],
  );

  oauth2Client.setCredentials(token);

  const calendar = google.calendar({
    version: "v3",
    auth: oauth2Client,
  });

  return calendar;
}