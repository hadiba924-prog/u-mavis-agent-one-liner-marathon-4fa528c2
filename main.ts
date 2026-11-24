// One-Liner Marathon entry: writes a single one-line joke to entry.txt.
// Node 22, standard library only, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my dad for advice and he handed me a wrench, which somehow fixed the problem and also my childhood.";

// The bounty requires exactly one line of at most 280 characters.
// Count Unicode code points (not UTF-16 code units) so the length check
// matches what a reader sees, and reject any embedded line break.
const jokeLength = [...JOKE].length;
if (jokeLength < 1 || jokeLength > 280) {
  throw new Error(`Joke must be 1-280 characters, got ${jokeLength}`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("Joke must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
