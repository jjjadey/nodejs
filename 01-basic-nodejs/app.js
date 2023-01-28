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



// -----------------Threads, Event Loop, Call Stack and Task Queue-----------------
// Example 1
// const fn1 = (time) => {
//     setTimeout(() => {
//         console.log('fn1:',time)
//     }, time);
// }

// const fn2 = () => {
//     fn1(5000);
//     setTimeout(() => {
//         console.log('fn2')
//     }, 100);
//     fn1(100);
// }

// const fn3 = () => {
//     fn2();
// }

// fn3();


// Example 2
// https://www.youtube.com/watch?v=d3OVNw_Qmik
// console.log('start')

// setTimeout(() => {
//     console.log(1)
// }, 5);

// setTimeout(() => {
//     setTimeout(() => {
//         console.log(2)
//     }, 10000);
// }, 5);

// setTimeout(() => {
//     console.log(3)
// }, 5);

// const msg = () => {
//     console.log('msg')
// }

// msg();

// -----------------end Threads, Event Loop, Call Stack and Task Queue-----------------