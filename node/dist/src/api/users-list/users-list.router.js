"use strict";
exports.__esModule = true;
var express_1 = require("express");
var users_list_controller_1 = require("./users-list.controller");
var UserListsRoutes = /** @class */ (function () {
    function UserListsRoutes() {
        this.userListController = new users_list_controller_1.UsersListController;
        this.router = express_1.Router();
        this.init();
    }
    UserListsRoutes.prototype.init = function () {
        this.router.post("/", this.userListController.getUser);
        // this.router.post("/", this.userController.getUser);
        // this.router.post("/add", upload.single('userLogo'), this.userController.createUser);
        // this.router.post("/update", upload.single('userLogo'), this.userController.updateUser);
        // this.router.delete("/:id", this.userController.deleteUser);
    };
    return UserListsRoutes;
}());
var userListsRoutes = new UserListsRoutes();
userListsRoutes.init();
exports["default"] = userListsRoutes.router;
