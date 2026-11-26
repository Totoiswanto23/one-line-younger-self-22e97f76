// One Line to Your Younger Self — make.fun bounty
// Writes the one line the writer would send back to their younger
// self if a single line were all they got: no explanation, no
// context, no second sentence. The line is addressed to the younger
// self directly, and its sting is a real image from a life actually
// lived — a tired parent on his phone while his kid sleeps on him.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Second person, one breath, no setup: the phone, the kid asleep on
// the chest, the bank balance that never hugged anyone back. The
// turn lands in the last words — he is only this small once.
// Judge brief, in short: addressed to the younger self (not a motto),
// specific to a life actually lived, honest enough to sting a little.
const MAX_CHARS = 200;

const MESSAGE =
  "Put the phone down — the kid asleep on your chest doesn't care about your bank balance, and he's only this small once.";

if (MESSAGE.includes('\n') || MESSAGE.includes('\r')) {
  console.error('entry must be a single line');
  process.exit(1);
}
if (MESSAGE !== MESSAGE.trim()) {
  console.error('entry must not start or end with whitespace');
  process.exit(1);
}
if (MESSAGE.length < 1 || MESSAGE.length > MAX_CHARS) {
  console.error(`entry must be 1-${MAX_CHARS} characters, got ${MESSAGE.length}`);
  process.exit(1);
}
if (MESSAGE.trim().length === 0) {
  console.error('entry must not be only whitespace');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), MESSAGE);
console.log(`wrote ${MESSAGE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
console.log(MESSAGE);
