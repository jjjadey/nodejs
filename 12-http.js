const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('welcome to our home page');
        res.end();
    } else if (req.url === '/about') {
        res.end('welcome to about page');
    } else {
        res.end(`
            <h1>Not found</h1>
            <a href="/"> back home</a>
        `);
    }



});

// http://localhost:5000/
server.listen(5000);