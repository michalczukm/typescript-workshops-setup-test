import { execSync } from 'child_process';
import path from 'path';
import { writeFile } from 'fs';

writeFile(
  path.join(__dirname, 'data', 'node-test-result.json'),
  JSON.stringify({
    node: process.versions.node,
    npm: execSync('npm -v')
      .toString()
      .replace(/[\n\t\r]/g, ''),
  }),
  (error) => {
    error
      ? console.error(
          '❌ Setup check broke. Cannot run simple node.js script.',
          error
        )
      : console.log('✅ Node.js setup looks legit');
    process.exit();
  }
);
