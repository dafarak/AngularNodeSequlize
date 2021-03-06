"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.StudentsListsRepository = void 0;
var common_1 = require("../../../../config/common");
var mysql_config_1 = require("../../../../config/mysql-config");
var StudentsListsRepository = /** @class */ (function () {
    function StudentsListsRepository() {
        this.tableName = "users";
    }
    StudentsListsRepository.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    //   console.log("Hello", body);
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var query = "SELECT * FROM students";
                            console.log("query", query);
                            mysql_config_1.pool.query(query, function (error, results) {
                                if (error) {
                                    reject(error);
                                    console.log(error);
                                }
                                resolve(results);
                            });
                        })];
                }
                catch (error) {
                    throw new Error(error);
                }
                return [2 /*return*/];
            });
        });
    };
    StudentsListsRepository.prototype.addUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var insertStudent, addStudent, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(user);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        insertStudent = "INSERT INTO students (name, standard,subject, marks)\n        VALUES (" + ("'" + user.studentName + "'") + ", " + ("'" + user.standard + "'") + ", " + ("'" + user.subject + "'") + "," + ("'" + user.marks + "'") + ")";
                        console.log("insertStudent", insertStudent);
                        return [4 /*yield*/, mysql_config_1.pool.query(insertStudent)];
                    case 2:
                        addStudent = _a.sent();
                        //   console.log("addStudent",addStudent);
                        if (addStudent) {
                            return [2 /*return*/, common_1.ReturnValue.Success];
                        }
                        else {
                            return [2 /*return*/, common_1.ReturnValue.Failed];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StudentsListsRepository.prototype.editUser = function (edituser) {
        return __awaiter(this, void 0, void 0, function () {
            var udateStudentQuery, addStudent, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("editUser", edituser);
                        udateStudentQuery = "UPDATE students SET\n                               name=" + ("'" + edituser.studentName + "'") + ", \n                               standard=" + ("'" + edituser.standard + "'") + ",\n                               subject=" + ("'" + edituser.subject + "'") + ",\n                               marks=" + ("'" + edituser.marks + "'") + "\n                               WHERE id = " + edituser.id;
                        console.log("udateStudentQuery", udateStudentQuery);
                        return [4 /*yield*/, mysql_config_1.pool.query(udateStudentQuery)];
                    case 1:
                        addStudent = _a.sent();
                        console.log("addStudent", addStudent);
                        //   let editUser = await UserEntity.update(
                        //     { userName: edituser.userName },
                        //     {
                        //       where: {
                        //         id: edituser.userId,
                        //       },
                        //     }
                        //   );
                        if (addStudent) {
                            return [2 /*return*/, common_1.ReturnValue.Success];
                        }
                        else {
                            return [2 /*return*/, common_1.ReturnValue.Failed];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentsListsRepository.prototype.deleteUser = function (deleteuser) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteStudentQuery, deleteStudent, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("deleteuser", deleteuser);
                        deleteStudentQuery = "DELETE FROM students WHERE id=" + deleteuser;
                        return [4 /*yield*/, mysql_config_1.pool.query(deleteStudentQuery)];
                    case 1:
                        deleteStudent = _a.sent();
                        console.log("deleteStudent", deleteStudent);
                        if (deleteStudent) {
                            return [2 /*return*/, common_1.ReturnValue.Success];
                        }
                        else {
                            return [2 /*return*/, common_1.ReturnValue.Failed];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentsListsRepository.prototype.getStudentById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    console.log("Hello", id);
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var query = "SELECT * FROM students WHERE id=" + id;
                            console.log("query", query);
                            mysql_config_1.pool.query(query, function (error, results) {
                                if (error) {
                                    reject(error);
                                    console.log(error);
                                }
                                resolve(results);
                            });
                        })];
                }
                catch (error) {
                    throw new Error(error);
                }
                return [2 /*return*/];
            });
        });
    };
    return StudentsListsRepository;
}());
exports.StudentsListsRepository = StudentsListsRepository;
