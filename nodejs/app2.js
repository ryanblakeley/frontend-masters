var express = require('express');
var app = express();

function authUser(request, response, next) {
    var user = {
        name: 'Kevin',
        admin: true
    };

    request.user = user;
    next();
}

app.use(authUser);

app.get('/', function (request, response) {
    response.send({
        foo: "bar",
        isAdmin: request.user.admin
    });
});

app.post('/doStuff', function (request, response) {
    var param = request.param('foo');

    response.send({
        foo: param
    });
});

app.listen(3000);