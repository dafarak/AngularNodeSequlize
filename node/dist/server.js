"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var http = require("http");
// import { MongoDB } from './config/mongo-config';
var port = 3000;
http.createServer(app_1["default"]).listen(port, function () {
    console.log('Express server listening on port ' + port);
    // const mdb = new MongoDB();
    // mdb.connectMongoDB();
});
