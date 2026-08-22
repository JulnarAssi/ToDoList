import { writeFile } from "node:fs/promises";
import { authenticate } from "@google-cloud/local-auth";

const KEYFILE_PATH = ".secrets/google-calendar-oauth.json";
const TOKEN_PATH = ".secrets/google-calendar-token.json";

const SCOPES = [
  "https://www.googleapis.com/auth/calendar.events",
];

async function main() {
  const authClient = await authenticate({
    scopes: SCOPES,
    keyfilePath: KEYFILE_PATH,
  });

  const credentials = authClient.credentials;

  await writeFile(
    TOKEN_PATH,
    JSON.stringify(credentials, null, 2),
    "utf-8",
  );

  console.error(`Google Calendar token saved to ${TOKEN_PATH}`);
}

main().catch((error) => {
  console.error("Google OAuth setup failed:", error);
  process.exit(1);
});