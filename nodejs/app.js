var http = require('http');
var logger = require('./logger');
var Point = require('./Point');
var pt = new Point();
var twilio = require('twilio');
var client = twilio();

logger.info('heeeeello');
pt.print(50, 60);

http.createServer(function (request, response) {
    response.writeHead({
        'Content-Type': 'text/plain'
    });
    response.end('hello world');
}).listen(3000);

// Notes
// nodemon or supervisor for watching code changes
// node-inspector

// client.sendMessage({
//     to: '+16512080532',
//     from: '+18016917578',
//     body: 'hello world'
// }, function (err, message) {
    
// });
