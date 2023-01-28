const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('home page');
    }
    if (req.url === '/about') {
        for (let i = 0; i < 50000; i++) {
            console.log('.');
        }
        res.end('about page');
    }
});

server.listen(5000, () => {
    console.log('Server listening on port : 5000....');
});
