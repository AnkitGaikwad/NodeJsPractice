
// const path = require('path');
// console.log(path.sep);

const http = require('http');
const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our website");
    }
    if (req.url === '/about') {
        res.end("This is our brief introduction.");
    }
    res.end("Oops, we cant seem to find this page.");
});
server.listen(5000);

