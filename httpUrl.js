const http = require('http');

const server = http.createServer( (req, res)=> {
    console.log("user hit the server");
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Home Page</h1>");
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>About Page</h1>");
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("<h1>404 Not Found</h1>");
        res.end();
    }
    
});

server.listen(3000);
 