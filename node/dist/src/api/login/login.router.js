"use strict";
exports.__esModule = true;
var express_1 = require("express");
var login_controller_1 = require("./login.controller");
var LoginRoutes = /** @class */ (function () {
    function LoginRoutes() {
        this.loginController = new login_controller_1.LoginController();
        this.router = express_1.Router();
        this.init();
    }
    LoginRoutes.prototype.init = function () {
        this.router.get("/", this.loginController.checkResponse);
        this.router.post("/", this.loginController.login);
        this.router.post("/redirect", this.loginController.redirectLogin);
    };
    return LoginRoutes;
}());
var loginRoutes = new LoginRoutes();
loginRoutes.init();
exports["default"] = loginRoutes.router;
