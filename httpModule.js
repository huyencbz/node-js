const http = require('http');
const fs = require('fs');
// const server = http.createServer((req, res) => {
//     if (req.url === '/hello') {
//         res.write('Hello world from Node js');
//         res.end();
//     } else {
//         res.write('Not found');
//         res.end();
//     }

// });
// server.listen('3000');

const readStream = fs.createReadStream('./static/index.html');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    //res object is also writable stream
    readStream.pipe(res);

}).listen('3000');

// Json file => Content-type: application/json
// Png file => Content-type: image/png