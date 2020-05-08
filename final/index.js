const http = require('http');
const express = require('express');
const app = express();

http.createServer(app).listen(
    3000,

    () => {
        console.log('An http server is listening on port 3000.');
    }
);

app.get(
    ['/', '/index', '/index.html', '/index.htm'],

    (_req, res, _next) => {
        res.send('<h1>Hello from our little web server!</h1>\n');
        console.log('We sent a response.');
    }
);
