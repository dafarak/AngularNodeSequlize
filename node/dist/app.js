"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var useragent = require("express-useragent");
var login_router_1 = require("./src/api/login/login.router");
var users_list_router_1 = require("./src/api/users-list/users-list.router");
var students_list_router_1 = require("./src/api/students-list/students-list.router");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
        this.router();
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use('/assets', express.static('assets'));
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Expose-Headers", "x-total-count");
            res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
            res.header("Access-Control-Allow-Headers", "Content-Type,authorization");
            next();
        });
    };
    App.prototype.router = function () {
        this.app.use(useragent.express());
        this.app.use('/admin-login', login_router_1["default"]);
        this.app.use('/users-list', users_list_router_1["default"]);
        this.app.use('/students-list', students_list_router_1["default"]);
    };
    return App;
}());
exports["default"] = new App().app;
