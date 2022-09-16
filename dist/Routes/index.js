"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var userRouter_1 = __importDefault(require("./userRouter"));
var createTestRouter_1 = __importDefault(require("./createTestRouter"));
var findTestsRouter_1 = __importDefault(require("./findTestsRouter"));
var router = (0, express_1.Router)();
router.use('/', userRouter_1["default"]);
router.use('/', createTestRouter_1["default"]);
router.use('/findtests', findTestsRouter_1["default"]);
exports["default"] = router;
