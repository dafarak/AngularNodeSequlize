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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDirectory = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const fs = __importStar(require("fs-extra"));
const multer_1 = __importDefault(require("multer"));
let folderName = "user";
let datenow = Date.now;
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        var dateVar = new Date();
        let current_month = dateVar.getUTCMonth() + 1;
        let current_year = dateVar.getFullYear();
        CreateDirectory('assets/images', folderName);
        let imagePathYear = "assets/users/";
        CreateDirectory(imagePathYear, current_year);
        let imagePathMonth = "assets/images/" + current_year + "/";
        CreateDirectory(imagePathMonth, current_month);
        let UplodaName = folderName + "/" + current_year + "/" + current_month;
        cb(null, `'assets/images'${UplodaName}/`);
    },
    filename: function (req, file, cb) {
        var data = file.originalname.split('.').pop();
        cb(null, `${datenow()}${"." + data}`);
    }
});
function CreateDirectory(dest, directoryName, vendorId) {
    const path = `${dest}${directoryName}`;
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
    if (vendorId) {
        let vendorFolderPath = `${path}/${vendorId}`;
        if (!fs.existsSync(vendorFolderPath)) {
            fs.mkdirSync(vendorFolderPath);
        }
    }
}
exports.CreateDirectory = CreateDirectory;
const upload = multer_1.default({ storage: storage });
class UserRoutes {
    constructor() {
        this.userController = new user_controller_1.UserController;
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.post("/", this.userController.getUser);
        this.router.post("/add", upload.single('userLogo'), this.userController.createUser);
        this.router.post("/update", upload.single('userLogo'), this.userController.updateUser);
        this.router.delete("/:id", this.userController.deleteUser);
    }
}
const userRoutes = new UserRoutes();
userRoutes.init();
exports.default = userRoutes.router;
