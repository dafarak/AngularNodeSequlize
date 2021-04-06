"use strict";
exports.__esModule = true;
exports.pool = void 0;
var mysql = require("mysql");
exports.pool = mysql.createConnection({
    host: 'localhost',
    user: 'satish',
    password: 'Satish12',
    database: 'practical'
});
exports.pool.connect();
exports.pool = exports.pool;
