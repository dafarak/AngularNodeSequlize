"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidator = void 0;
const Joi = __importStar(require("joi"));
const schema = Joi.object({
    userId: Joi.number()
        .required(),
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    isActive: Joi.number()
        .min(0)
        .max(1),
    userLogo: Joi.string()
});
class UserValidator {
    static Validate(requestBody) {
        return schema.validateAsync({
            userId: requestBody.userId,
            userName: requestBody.userName,
            isActive: requestBody.isActive,
            userLogo: requestBody.userLogo
        });
    }
}
exports.UserValidator = UserValidator;
