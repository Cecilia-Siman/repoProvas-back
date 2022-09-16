"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var signupSchema = joi_1["default"].object({
    email: joi_1["default"].string().pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i).required(),
    password: joi_1["default"].string().min(6).required(),
    confirmPassword: joi_1["default"].string().valid(joi_1["default"].ref('password')).required()
});
exports["default"] = signupSchema;
