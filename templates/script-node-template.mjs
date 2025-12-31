#!/usr/bin/env node

// See the following guides for more info:
// using scripts: https://nodejs.dev/en/learn/run-nodejs-scripts-from-the-command-line/
// manipulating files: https://nodejs.dev/en/learn/nodejs-file-stats/
// n.b. The entire contents of JavaScript modules are automatically in strict mode, with no statement needed to initiate it.

import { opendir } from 'node:fs/promises';

try {
  const dir = await opendir('./');
  for await (const dirent of dir) {
    console.log(dirent.name);
  }
} catch (err) {
  console.error(err);
}
