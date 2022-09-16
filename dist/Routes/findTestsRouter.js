"use strict";
exports.__esModule = true;
var findTestController_1 = require("../Controllers/findTestController");
var tokenValidator_1 = require("../Middlewares/tokenValidator");
var express_1 = require("express");
var findTestsRouter = (0, express_1.Router)();
findTestsRouter.get('/disciplines', tokenValidator_1.validateToken, findTestController_1.findDisciplineTests);
findTestsRouter.get('/teachers', tokenValidator_1.validateToken, findTestController_1.findTeacherTests);
exports["default"] = findTestsRouter;
