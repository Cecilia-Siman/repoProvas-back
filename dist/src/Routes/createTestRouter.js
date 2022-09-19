"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var createTestController_1 = require("../Controllers/createTestController");
var createTestSchema_1 = __importDefault(require("../Schemas/createTestSchema"));
var schemaValidator_1 = require("../Middlewares/schemaValidator");
var tokenValidator_1 = require("../Middlewares/tokenValidator");
var express_1 = require("express");
var createTestRouter = (0, express_1.Router)();
createTestRouter.post('/newTest', tokenValidator_1.validateToken, (0, schemaValidator_1.validateSchema)(createTestSchema_1["default"]), createTestController_1.createTest);
exports["default"] = createTestRouter;
