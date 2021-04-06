"use strict";
exports.__esModule = true;
exports.AdminToken = void 0;
var mongoose_1 = require("mongoose");
var admin_token_schema_1 = require("../repository/mongoDB/schema/admin-token.schema");
var AdminToken = mongoose_1.model('AdminToken', admin_token_schema_1.AdminTokenSchema);
exports.AdminToken = AdminToken;
