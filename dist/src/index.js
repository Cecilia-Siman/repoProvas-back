"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var app_1 = __importDefault(require("./app"));
dotenv_1["default"].config();
var PORT = process.env.PORT || 4000;
app_1["default"].listen(process.env.PORT, function () {
    console.log("Server running on port " + process.env.PORT);
});
