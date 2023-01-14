const { readFileSync, writeFileSync } = require('fs');

console.log('start');

//read files
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(`Read first.txt: ${first}`);
console.log(`Read second.txt: ${second}`);

//write file
writeFileSync(
  './content/result-sync.txt',
  `Here is the result (Sync) : ${first}, ${second}`,
  { flag: 'a' }
);
// flag -> https://nodejs.org/api/fs.html#file-system-flags
// 'a': Open file for appending. The file is created if it does not exist.

console.log('done: write file result-sync.txt');

//after write file task was done, start next task
console.log('starting the next one');