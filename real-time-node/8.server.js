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

function handleIo(socket) {
    function disconnect() {
        console.log('client disconnected');
        clearInterval(intv);
    }

    console.log('client connected');

    socket.on('disconnect', disconnect);

    var intv = setInterval(function () {
        socket.emit('hello', Math.random());
    }, 1000);
}

var host = 'localhost',
    port = 8006,
    http = require('http'),
    http_server = http.createServer(handleHTTP).listen(port, host),
    node_static = require('node-static'),
    static_files = new node_static.Server(__dirname),
    io = require('socket.io').listen(http_server);

io.on('connection', handleIo);

io.configure(function(){
    io.enable("browser client minification"); // send minified client
    io.enable("browser client etag"); // apply etag caching logic based on version number
    io.set("log level", 1); // reduce logging
    io.set("transports", [
        "websocket",
        "xhr-polling",
        "jsonp-polling"
    ]);
});