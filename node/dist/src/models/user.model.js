"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.UserEntity = exports.UserModel = void 0;
var sequelize_1 = require("sequelize");
var sequelize_db_config_1 = require("../../config/sequelize-db.config");
var sequelize_sync_config_1 = require("../../config/sequelize-sync.config");
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel(userId, userName, userLogo, isActive) {
        var _this = _super.call(this) || this;
        _this.userId = userId;
        _this.userName = userName;
        _this.userLogo = userLogo;
        _this.isActive = isActive;
        return _this;
    }
    return UserModel;
}(sequelize_1.Model));
exports.UserModel = UserModel;
var UserEntity = sequelize_db_config_1.SQLize.define(sequelize_sync_config_1.UsersTableName, {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    userLogo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    createdAt: {
        type: 'TIMESTAMP',
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        type: 'TIMESTAMP',
        allowNull: true
    }
}, { freezeTableName: true });
exports.UserEntity = UserEntity;
