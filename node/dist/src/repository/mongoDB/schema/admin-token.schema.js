"use strict";
exports.__esModule = true;
exports.AdminTokenSchema = void 0;
var mongoose_1 = require("mongoose");
exports.AdminTokenSchema = new mongoose_1.Schema({
    userName: String,
    userEmail: String,
    token: String
});
