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


// Result
// second task
// . . .
// next task
// first task
// third task
