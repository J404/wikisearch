"use strict";
exports.__esModule = true;
var Express = require("express");
var app = Express();
var port = (process.env.PRODUCTION === 'false') ? 5000 : 3000;
app.get('/', function (req, res) {
    res.send('yay server');
});
app.listen(port);
console.log("Server is listening on port " + port);
