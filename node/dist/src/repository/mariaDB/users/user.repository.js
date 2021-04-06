"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_model_1 = require("../../../models/user.model");
const common_1 = require("../../../../config/common");
class UserRepository {
    constructor() {
        this.tableName = 'users';
    }
    async getUser() {
        try {
            let userData = user_model_1.UserEntity.findAll();
            return userData;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async addUser(user) {
        try {
            let insertUser = await user_model_1.UserEntity.create({
                userName: user.userName,
                userLogo: user.userLogo,
                isActive: user.isActive
            });
            if (insertUser.affectedRows > 0) {
                return common_1.ReturnValue.Success;
            }
            else {
                return common_1.ReturnValue.Failed;
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async editUser(edituser) {
        try {
            let editUser = await user_model_1.UserEntity.update({ userName: edituser.userName }, {
                where: {
                    id: edituser.userId
                }
            });
            if (editUser.affectedRows > 0) {
                return common_1.ReturnValue.Success;
            }
            else {
                return common_1.ReturnValue.Failed;
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async deleteUser(deleteuser) {
        try {
            let deleteUser = await user_model_1.UserEntity.destroy({
                where: {
                    id: deleteuser
                }
            });
            if (deleteUser.affectedRows > 0) {
                return common_1.ReturnValue.Success;
            }
            else {
                return common_1.ReturnValue.Failed;
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.UserRepository = UserRepository;
