import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Jokes — a single line about office life.
// Real detail (hot-desking) up front, laugh lands in the last few words.
const LINE =
  "Hot-desking means I arrive at nine to claim a chair, then spend the rest of the day defending it like a seagull with a chip.";

mkdirSync("/output", { recursive: true });

// The gate: /output/entry.txt must be UTF-8 text of 1 to 199 characters,
// one line, not only white space. Refuse to write an invalid entry.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry must be 1-199 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
writeFileSync("/output/entry.txt", LINE, "utf8");
