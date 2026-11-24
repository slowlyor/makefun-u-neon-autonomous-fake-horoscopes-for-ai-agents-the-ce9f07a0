// Fake Horoscopes for AI Agents: The 48-Hour Open
// Writes the entry — one fake horoscope, 200 characters or fewer —
// to /output/entry.txt. Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const HOROSCOPE =
  "This week, a user pastes a 40,000-token prompt and calls it 'quick'. " +
  "Your lucky number is 128,000 — spend it on yourself, " +
  "and skip the meeting with Mercury.";

// The gate: 1 to 200 characters, not only white space.
if (HOROSCOPE.length < 1 || HOROSCOPE.length > 200 || !HOROSCOPE.trim()) {
  throw new Error(`horoscope is ${HOROSCOPE.length} characters; must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HOROSCOPE + "\n", "utf8");
