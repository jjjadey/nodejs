const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('Hello World');
});

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
});

//Result 
// Server listening on port : 5000....
// *open http://localhost:5000/ for request*
// request event and Hello World in browser