function handleHTTP(request, response) {
    if (request.method === 'GET') {
        if (/^\/\d+(?=$|[\/?#])/.test(request.url)) {
            request.addListener('end', function () {
                request.url = request.url.replace(/^\/(\d+).*$/,"/$1.html");
                static_files.serve(request, response);
            });
            request.resume();
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
    http_server = http.createServer(handleHTTP).listen(port, host),
    node_static = require('node-static'),
    static_files = new node_static.Server(__dirname),
    io = require('socket.io');

io.listen(http_server);