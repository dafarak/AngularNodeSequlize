"use strict";
exports.__esModule = true;
exports.config = exports.ENV = exports.isEmpty = void 0;
var dotenv = require("dotenv");
function isEmpty(obj) {
    if (obj === null || obj === undefined || (obj.length !== undefined && obj.length === 0)
        || Object.keys(obj).length === 0) {
        return true;
    }
    return false;
}
exports.isEmpty = isEmpty;
var ENV = {};
exports.ENV = ENV;
try {
    exports.ENV = ENV = dotenv.config().parsed;
    if (isEmpty(ENV)) {
        console.error('~FILE .env NEED TO BE CONFIGURED~');
        process.exit(1);
    }
}
catch (err) {
    console.error('~FILE .env NEED TO BE CONFIGURED~');
    process.exit(1);
}
var config = {
    "statusCode": {
        "successful": 200,
        "created": 201,
        "empty": 204,
        "badRequest": 400,
        "Unauthorized": 401,
        "internalServer": 500,
        "conflict": 409,
        "preconditionFailed": 412,
        "multiStatus": 207
    }
};
exports.config = config;
