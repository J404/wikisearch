"use strict";
exports.__esModule = true;
var Express = require("express");
var Path = require("path");
require('dotenv').config();
var app = Express();
var port = (process.env.PRODUCTION === 'false') ? 5000 : 3000;
if (process.env.PRODUCTION === 'true') {
    app.use(Express.static(Path.join(__dirname, './build')));
}
app.listen(port);
console.log("Server is listening on port " + port);
