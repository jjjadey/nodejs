//----------read file promise-------------------------
// const { readFile } = require('fs');

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }
// getText('../content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))






//-------------read file try catch----------------------
// const { readFile } = require('fs');

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// const start = async () => {
//     try {
//         const first = await getText('./content/first.txt', 'utf-8');
//         const second = await getText('./content/second.txt', 'utf-8');
//         console.log(first, second);
//     } catch (error) {
//         console.log(error);
//     }
// }

// start();





//-------------read and write file with promises----------------------
// const { readFile, writeFile } = require('fs').promises;

// const start = async () => {
//     try {
//         const first = await readFile('./content/first.txt', 'utf8');
//         const second = await readFile('./content/second.txt', 'utf8');
//         await writeFile(
//             './content/result-mind-grenade.txt',
//             `THIS IS AWESOME : ${first} ${second}`,
//             { flag: 'a' }
//         )
//         console.log(first, second);
//     } catch (error) {
//         console.log(error);
//     }
// }

// start();





//-------------read and write file with promisify----------------------
const { readFile, writeFile } = require('fs');
// convert a method that returns responses using a callback function to return responses in a promise object.
// organize  callback nesting or callback hells
// https://www.geeksforgeeks.org/node-js-util-promisify-method/ 
// https://www.babelcoder.com/blog/articles/node-promisify
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            { flag: 'a' }
        )
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();
