import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "You will deploy on Friday, and production will teach you what 'works on my machine' truly means.";

if (ENTRY.length > 120 || ENTRY.trim().length === 0) {
  console.error(`entry invalid: ${ENTRY.length} chars`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, ENTRY + "\n", "utf8");
} catch (error) {
  console.error(`failed to write ${outFile}:`, error);
  process.exit(1);
}

console.log(`wrote ${outFile} (${ENTRY.length} chars)`);
