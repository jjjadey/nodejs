// __dirname - path to current directory
// __filename - file name
// require - function to use moduled (CommonJS)
// module - info about current module (file)
//process - info about env where the program is being executed

//CommonJS, every file is module (by default)
//Modules - Encapsulated code (only share minimum)

const names = require('./4-names');
const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');
sayHi(names.john);
sayHi(names.peter);
sayHi(john);
sayHi(peter);


const data = require('./6-alternative-flavor');
console.log(data)

