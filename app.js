// __dirname - path to current directory
// __filename - file name
// require - function to use moduled (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

//npm -global command. come with node
// global dependency - use it in any project
// npm i -g <packageName>

// package.json - manifest file (stores important info about project and packages)
// manual approach -> create package.json in root, create properties etc
// npm init (step by step, press enter or skip)
// npm init -y (everything default)


// -----------------import module--------------------------------
// const _ = require('lodash');
// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);
// -----------------end import module--------------------------------


// ----------------event loop and callbacks--------------------------------
setTimeout(() => {
    console.log('first task');
}, 0);

console.log('second task');

console.time();
for (let index = 0; index < 10000; index++) {
    if (index %10 ===0){
      console.log('.')  
    } 
}
console.timeEnd();

setTimeout(() => {
    console.log('third task');
}, 0);

console.log('next task');
// https://course-api.com/slides/
// ----------------end event loop and callbacks--------------------------------

