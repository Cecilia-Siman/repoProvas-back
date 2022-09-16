"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var usersController_1 = require("../Controllers/usersController");
var signupSchema_1 = __importDefault(require("../Schemas/signupSchema"));
var loginSchema_1 = __importDefault(require("../Schemas/loginSchema"));
var schemaValidator_1 = require("../Middlewares/schemaValidator");
var express_1 = require("express");
var userRouter = (0, express_1.Router)();
userRouter.post('/signup', (0, schemaValidator_1.validateSchema)(signupSchema_1["default"]), usersController_1.signup);
userRouter.post('/login', (0, schemaValidator_1.validateSchema)(loginSchema_1["default"]), usersController_1.login);
exports["default"] = userRouter;
