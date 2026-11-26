// The Robot Vacuum's Funniest Excuse — one line, at most 120 characters.
// The program writes the excuse to /output/entry.txt for the judge.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My cliff sensor mistook the rug fringe for a staircase, so I braked, apologised, and left the dust as a tip.";

// The gate only accepts 1–120 characters, so refuse to write an entry
// that could never be judged instead of submitting it silently.
if (entry.length < 1 || entry.length > 120 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters; the gate needs 1–120`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
