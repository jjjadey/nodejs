const path = require('path');

console.log(`Path.sep: ${path.sep}`);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(`File path: ${filePath}`);

const base = path.basename(filePath);
console.log(`Base: ${base}`);

// __dirname is path to current directory
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(`Absolute ${absolute}`);