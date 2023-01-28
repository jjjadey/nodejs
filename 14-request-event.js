const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Welcome');
// })

// Using Event Emitter API
const server = http.createServer();

// emits request event 
// subcribe to it / listen for it / respond to it

// sever has method .on
// server emits the request event

server.on('request', (req, res) => {
  res.end('Welcome');
})

server.listen(5000);