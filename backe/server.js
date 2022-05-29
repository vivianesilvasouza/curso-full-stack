const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.statusCode = 404;
    res.end('<h1>hello word</h1>')
});

server.listen(3002, () => {
    console.log('servidor ativo');
}) 