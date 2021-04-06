"use strict";
exports.__esModule = true;
var express_1 = require("express");
var students_list_controller_1 = require("./students-list.controller");
var StudenstListsRoutes = /** @class */ (function () {
    function StudenstListsRoutes() {
        this.studentsListController = new students_list_controller_1.StudentsListController;
        this.router = express_1.Router();
        this.init();
    }
    StudenstListsRoutes.prototype.init = function () {
        this.router.get("/", this.studentsListController.getUser);
        this.router.post("/add", this.studentsListController.createStudent);
        this.router.get("/:id", this.studentsListController.getStudentById);
        // this.router.post("/add", upload.single('userLogo'), this.userController.createUser);
        this.router.put("/update", this.studentsListController.updateUser);
        this.router["delete"]("/:id", this.studentsListController.deleteUser);
    };
    return StudenstListsRoutes;
}());
var studentsListController = new StudenstListsRoutes();
studentsListController.init();
exports["default"] = studentsListController.router;
