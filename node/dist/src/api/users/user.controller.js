"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const config_json_1 = require("../../../config/config.json");
const user_repository_1 = require("../../repository/mariaDB/users/user.repository");
const config_json_2 = require("../../../config/config.json");
const user_constants_1 = require("./user.constants");
const user_validator_1 = require("./user.validator");
const common_1 = require("../../../config/common");
class UserController {
    async getUser(req, res, next) {
        try {
            let userModel, statusCode;
            let userRepository = new user_repository_1.UserRepository;
            userModel = await userRepository.getUser();
            statusCode = config_json_2.isEmpty(userModel) ? config_json_1.config.statusCode.empty : config_json_1.config.statusCode.successful;
            res.status(statusCode).json({ data: userModel });
        }
        catch (err) {
            res.status(config_json_1.config.statusCode.internalServer).json({ error: err.message });
        }
    }
    async createUser(req, res, next) {
        try {
            let validate = user_validator_1.UserValidator.Validate(req.body);
            if (validate === null) {
                let userRepository = new user_repository_1.UserRepository;
                let isUserAdded = await userRepository.addUser(validate);
                if (isUserAdded === common_1.ReturnValue.Success) {
                    res.status(config_json_1.config.statusCode.successful).json({ message: user_constants_1.MSGS.USER_ADD });
                }
                else if (isUserAdded === common_1.ReturnValue.AlreadyExist) {
                    res.status(config_json_1.config.statusCode.conflict).json({ message: user_constants_1.MSGS.USER_ALREADY_EXIST });
                }
                else {
                    res.status(config_json_1.config.statusCode.badRequest).json({ message: user_constants_1.MSGS.USER_FAIL });
                }
            }
            else {
                res.status(config_json_1.config.statusCode.badRequest).json({ message: validate });
            }
        }
        catch (err) {
            res.status(config_json_1.config.statusCode.internalServer).json({ error: err.message });
        }
    }
    async updateUser(req, res, next) {
        try {
            let validate = user_validator_1.UserValidator.Validate(req.body);
            if (validate === null) {
                let userRepository = new user_repository_1.UserRepository;
                let isUserUpdated = await userRepository.editUser(validate);
                if (isUserUpdated === common_1.ReturnValue.Success) {
                    res.status(config_json_1.config.statusCode.successful).json({ message: user_constants_1.MSGS.USER_UPDATE });
                }
                else if (isUserUpdated === common_1.ReturnValue.AlreadyExist) {
                    res.status(config_json_1.config.statusCode.conflict).json({ message: user_constants_1.MSGS.USER_ALREADY_EXIST });
                }
                else {
                    res.status(config_json_1.config.statusCode.badRequest).json({ message: user_constants_1.MSGS.USER_ALREADY_EXIST });
                }
            }
            else {
                res.status(config_json_1.config.statusCode.badRequest).json({ message: validate });
            }
        }
        catch (err) {
            res.status(config_json_1.config.statusCode.internalServer).json({ error: err.message });
        }
    }
    async deleteUser(req, res, next) {
        try {
            let userRepository = new user_repository_1.UserRepository;
            let userDelete = await userRepository.deleteUser(req.params.id);
            if (userDelete === common_1.ReturnValue.IdNotFound) {
                res.status(config_json_1.config.statusCode.empty).json({ message: user_constants_1.MSGS.USER_ID_NOT_EXISTS });
            }
            else if (userDelete === common_1.ReturnValue.Success) {
                res.status(config_json_1.config.statusCode.successful).json({ message: user_constants_1.MSGS.USER_DELETE });
            }
            else if (userDelete === common_1.ReturnValue.Failed) {
                res.status(config_json_1.config.statusCode.successful).json({ message: user_constants_1.MSGS.USER_FAIL });
            }
        }
        catch (error) {
            res.status(config_json_1.config.statusCode.badRequest).json({ message: error.message });
        }
    }
}
exports.UserController = UserController;
