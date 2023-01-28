const { readFile, writeFile } = require('fs');

console.log('start');
//1.read first.txt
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  const first = result;

  //2.read second.txt
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    const second = result;

    //3. write result-async.txt
    writeFile(
      './content/result-async.txt',
      `Here is the result (Async): ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return
        }
        console.log('done: write file result-sync.txt');
      }
    );
  });
});

console.log('starting the next one');