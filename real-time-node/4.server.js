function handleHTTP(request, response) {
    if (request.method === 'GET') {
        if (request.url === '/') {
            response.writeHead(200, {
                'Content-type': 'text/plain'
            });
            response.write("Hello World: ");
            response.end(Math.random().toString());
        } else {
            response.writeHead(403);
            response.end("Get outta here!");
        }
    } else {
        response.writeHead(403);
        response.end("Get outta here!");
    }
}

var host = 'localhost',
    port = 8006,
    http = require('http'),
    http_server = http.createServer(handleHTTP).listen(port, host);
    