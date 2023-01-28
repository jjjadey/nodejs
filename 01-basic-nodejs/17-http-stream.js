let http = require('http');
let fs = require('fs');

http
    .createServer(function (req, res) {
        // const text = fs.readFileSync('./content/big.txt', 'utf8')
        // res.end(text);

        // refactor upper code -> sending data in the chunks
        // open network tab and see reponse headers
        // same size request 
        // but Transfer-Encoding: chunked 
        // instead of sending file back in one large instance, wr are sending it back in chunks
        const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
        fileStream.on('open', () => {
            fileStream.pipe(res);
        })
        fileStream.on('error', (err) => {
            res.end(err);
        });
    })
    .listen(5000);

// open http://localhost:5000/ for request