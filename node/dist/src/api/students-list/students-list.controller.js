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
exports.StudentsListController = void 0;
var common_1 = require("../../../config/common");
var config_json_1 = require("../../../config/config.json");
var config_json_2 = require("../../../config/config.json");
var students_list_repository_1 = require("../../repository/mariaDB/students-list/students-list.repository");
var user_constants_1 = require("../users/user.constants");
var StudentsListController = /** @class */ (function () {
    function StudentsListController() {
    }
    StudentsListController.prototype.getUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var statusCode, studentsListsRepository, userModel, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("hello");
                        statusCode = void 0;
                        studentsListsRepository = new students_list_repository_1.StudentsListsRepository;
                        return [4 /*yield*/, studentsListsRepository.getUser()];
                    case 1:
                        userModel = _a.sent();
                        console.log("Hi");
                        console.log(userModel);
                        statusCode = config_json_2.isEmpty(userModel) ? config_json_1.config.statusCode.empty : config_json_1.config.statusCode.successful;
                        res.status(200).json({ data: userModel });
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        res.status(config_json_1.config.statusCode.internalServer).json({ error: err_1.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentsListController.prototype.createStudent = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var studentsListsRepository, isUserAdded, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        studentsListsRepository = new students_list_repository_1.StudentsListsRepository;
                        console.log("req.body", req.body);
                        return [4 /*yield*/, studentsListsRepository.addUser(req.body)];
                    case 1:
                        isUserAdded = _a.sent();
                        if (isUserAdded === common_1.ReturnValue.Success) {
                            res.status(config_json_1.config.statusCode.successful).json({ message: user_constants_1.MSGS.USER_ADD });
                        }
                        else if (isUserAdded === common_1.ReturnValue.AlreadyExist) {
                            res.status(config_json_1.config.statusCode.conflict).json({ message: user_constants_1.MSGS.USER_ALREADY_EXIST });
                        }
                        else {
                            res.status(config_json_1.config.statusCode.badRequest).json({ message: user_constants_1.MSGS.USER_FAIL });
                        }
                        res.status(config_json_1.config.statusCode.badRequest).json({ message: 'Error' });
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        res.status(config_json_1.config.statusCode.internalServer).json({ error: err_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentsListController.prototype.updateUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var studentRepository, isUserUpdated, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // let validate = UserValidator.Validate(req.body);
                        // if (validate === null) {
                        console.log("req.body", req.body);
                        studentRepository = new students_list_repository_1.StudentsListsRepository;
                        return [4 /*yield*/, studentRepository.editUser(req.body)];
                    case 1:
                        isUserUpdated = _a.sent();
                        if (isUserUpdated === common_1.ReturnValue.Success) {
                            res.status(config_json_1.config.statusCode.successful).json({ message: user_constants_1.MSGS.USER_UPDATE });
                        }
                        else if (isUserUpdated === common_1.ReturnValue.AlreadyExist) {
                            res.status(config_json_1.config.statusCode.conflict).json({ message: user_constants_1.MSGS.USER_ALREADY_EXIST });
                        }
                        else {
                            res.status(config_json_1.config.statusCode.badRequest).json({ message: user_constants_1.MSGS.USER_ALREADY_EXIST });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        res.status(config_json_1.config.statusCode.internalServer).json({ error: err_3.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentsListController.prototype.deleteUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var studentListRepository, userDelete, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        studentListRepository = new students_list_repository_1.StudentsListsRepository;
                        console.log("req.params.id", req.params.id);
                        return [4 /*yield*/, studentListRepository.deleteUser(req.params.id)];
                    case 1:
                        userDelete = _a.sent();
                        if (userDelete === common_1.ReturnValue.IdNotFound) {
                            res.status(config_json_1.config.statusCode.empty).json({ message: user_constants_1.MSGS.USER_ID_NOT_EXISTS });
                        }
                        else if (userDelete === common_1.ReturnValue.Success) {
                            res.status(config_json_1.config.statusCode.successful).json({ message: user_constants_1.MSGS.USER_DELETE });
                        }
                        else if (userDelete === common_1.ReturnValue.Failed) {
                            res.status(config_json_1.config.statusCode.successful).json({ message: user_constants_1.MSGS.USER_FAIL });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(config_json_1.config.statusCode.badRequest).json({ message: error_1.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //get user by id
    StudentsListController.prototype.getStudentById = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var statusCode, studentsListsRepository, getStudentById, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statusCode = void 0;
                        studentsListsRepository = new students_list_repository_1.StudentsListsRepository;
                        return [4 /*yield*/, studentsListsRepository.getStudentById(req.params.id)];
                    case 1:
                        getStudentById = _a.sent();
                        statusCode = config_json_2.isEmpty(getStudentById) ? config_json_1.config.statusCode.empty : config_json_1.config.statusCode.successful;
                        res.status(200).json({ data: getStudentById });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.status(config_json_1.config.statusCode.badRequest).json({ message: error_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return StudentsListController;
}());
exports.StudentsListController = StudentsListController;
