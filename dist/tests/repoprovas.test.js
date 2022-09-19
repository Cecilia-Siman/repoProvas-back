"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var app_1 = __importDefault(require("../src/app"));
var supertest_1 = __importDefault(require("supertest"));
var database_1 = require("../src/Config/database");
var userFactory_1 = require("./factories/userFactory");
var testFactory_1 = require("./factories/testFactory");
beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.prisma.$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TRUNCATE TABLE users"], ["TRUNCATE TABLE users"])))];
            case 1:
                _a.sent();
                return [4 /*yield*/, database_1.prisma.$executeRaw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["TRUNCATE TABLE tests"], ["TRUNCATE TABLE tests"])))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1.prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
describe(' test POST /signup', function () {
    it('Must return 201 if user created correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, email, password, body, status;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, userFactory_1.userExample)()];
                case 1:
                    _a = _b.sent(), email = _a.email, password = _a.password;
                    body = { email: email, password: password, confirmPassword: password };
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/signup").send(body)];
                case 2:
                    status = (_b.sent()).status;
                    expect(status).toBe(201);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Must return 422 for empty body', function () { return __awaiter(void 0, void 0, void 0, function () {
        var body, status;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = {};
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post("/signup").send(body)];
                case 1:
                    status = (_a.sent()).status;
                    expect(status).toBe(422);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Must return 401 for email already registered', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, email, password, body, status;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, userFactory_1.userExample)()];
                case 1:
                    _a = _b.sent(), email = _a.email, password = _a.password;
                    body = { email: email, password: password, confirmPassword: password };
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signup').send(body)];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signup').send(body)];
                case 3:
                    status = (_b.sent()).status;
                    expect(status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('test POST /login', function () {
    it('Must return 200 and token if user is logged', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, email, password, bodySignup, bodyLogin, _b, status, body;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, userFactory_1.userExample)()];
                case 1:
                    _a = _c.sent(), email = _a.email, password = _a.password;
                    bodySignup = { email: email, password: password, confirmPassword: password };
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signup').send(bodySignup)];
                case 2:
                    _c.sent();
                    bodyLogin = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/login').send(bodyLogin)];
                case 3:
                    _b = _c.sent(), status = _b.status, body = _b.body;
                    expect(status).toBe(200);
                    expect(body).toBeInstanceOf(Object);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Must return 422 for empty body', function () { return __awaiter(void 0, void 0, void 0, function () {
        var body, result, status;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = {};
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/login').send(body)];
                case 1:
                    result = _a.sent();
                    status = result.status;
                    expect(status).toBe(422);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Must return 412 if email is not registered', function () { return __awaiter(void 0, void 0, void 0, function () {
        var body, status;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, userFactory_1.userExample)()];
                case 1:
                    body = _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/login').send(body)];
                case 2:
                    status = (_a.sent()).status;
                    expect(status).toBe(412);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Must return 401 for wrong password', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, email, password, bodySignup, newPassword, bodyLogin, status;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, userFactory_1.userExample)()];
                case 1:
                    _a = _b.sent(), email = _a.email, password = _a.password;
                    bodySignup = { email: email, password: password, confirmPassword: password };
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signup').send(bodySignup)];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, userFactory_1.userExample)()];
                case 3:
                    newPassword = (_b.sent()).password;
                    bodyLogin = { email: email, password: newPassword };
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/login').send(bodyLogin)];
                case 4:
                    status = (_b.sent()).status;
                    expect(status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('test POST /newTest', function () {
    it('Must return 201 if test created correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, email, password, bodySignup, bodyLogin, result, token, newTest, status;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, userFactory_1.userExample)()];
                case 1:
                    _a = _b.sent(), email = _a.email, password = _a.password;
                    bodySignup = { email: email, password: password, confirmPassword: password };
                    bodyLogin = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signup').send(bodySignup)];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/login').send(bodyLogin)];
                case 3:
                    result = _b.sent();
                    token = result.body.token;
                    return [4 /*yield*/, (0, testFactory_1.testExample)()];
                case 4:
                    newTest = _b.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/newtest').set('Authorization', 'Bearer ' + token).send(newTest)];
                case 5:
                    status = (_b.sent()).status;
                    expect(status).toBe(201);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Must return 422 for empty body', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, email, password, bodySignup, bodyLogin, result, token, body, status;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, userFactory_1.userExample)()];
                case 1:
                    _a = _b.sent(), email = _a.email, password = _a.password;
                    bodySignup = { email: email, password: password, confirmPassword: password };
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signup').send(bodySignup)];
                case 2:
                    _b.sent();
                    bodyLogin = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/login').send(bodyLogin)];
                case 3:
                    result = _b.sent();
                    token = result.body.token;
                    body = {};
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/newTest').send(body).set('Authorization', 'Bearer ' + token)];
                case 4:
                    status = (_b.sent()).status;
                    expect(status).toBe(422);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Must return 401 if no token', function () { return __awaiter(void 0, void 0, void 0, function () {
        var body, status;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = {};
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/newTest').send(body)];
                case 1:
                    status = (_a.sent()).status;
                    expect(status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('test GET /findtests/disciplines', function () {
    it('Must return 200 and array with tests', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, email, password, bodySignup, bodyLogin, result, token, _b, status, body;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, userFactory_1.userExample)()];
                case 1:
                    _a = _c.sent(), email = _a.email, password = _a.password;
                    bodySignup = { email: email, password: password, confirmPassword: password };
                    bodyLogin = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signup').send(bodySignup)];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/login').send(bodyLogin)];
                case 3:
                    result = _c.sent();
                    token = result.body.token;
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).get('/findtests/disciplines').set('Authorization', 'Bearer ' + token)];
                case 4:
                    _b = _c.sent(), status = _b.status, body = _b.body;
                    expect(status).toBe(200);
                    expect(body).toBeInstanceOf(Array);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Must return 401 if no token', function () { return __awaiter(void 0, void 0, void 0, function () {
        var status;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).get('/findtests/disciplines')];
                case 1:
                    status = (_a.sent()).status;
                    expect(status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('test GET /findtests/teachers', function () {
    it('Must return 200 and array with tests', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, email, password, bodySignup, bodyLogin, result, token, _b, status, body;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, userFactory_1.userExample)()];
                case 1:
                    _a = _c.sent(), email = _a.email, password = _a.password;
                    bodySignup = { email: email, password: password, confirmPassword: password };
                    bodyLogin = { email: email, password: password };
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signup').send(bodySignup)];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/login').send(bodyLogin)];
                case 3:
                    result = _c.sent();
                    token = result.body.token;
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).get('/findtests/teachers').set('Authorization', 'Bearer ' + token)];
                case 4:
                    _b = _c.sent(), status = _b.status, body = _b.body;
                    expect(status).toBe(200);
                    expect(body).toBeInstanceOf(Array);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Must return 401 if no token', function () { return __awaiter(void 0, void 0, void 0, function () {
        var status;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).get('/findtests/teachers')];
                case 1:
                    status = (_a.sent()).status;
                    expect(status).toBe(401);
                    return [2 /*return*/];
            }
        });
    }); });
});
var templateObject_1, templateObject_2;
