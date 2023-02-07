const http = require('http');

const server = http.createServer((req, res) => {

    console.log(req.method);
    const url = req.url;

    if (url === '/') {
        // http status code -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>home page</h1>');

        //function is used to end the response proces 
        // https://www.geeksforgeeks.org/express-js-res-end-function/
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>about page</h1>');
        res.end();
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>page not found</h1>');
        res.end();
    }

});

server.listen(5000);