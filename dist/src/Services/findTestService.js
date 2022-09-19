"use strict";
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
exports.__esModule = true;
exports.teacherTests = exports.disciplineTests = void 0;
var findTestsRepository_1 = require("../Repositories/findTestsRepository");
var findTableDataRepository_1 = require("../Repositories/findTableDataRepository");
function disciplineTests() {
    return __awaiter(this, void 0, void 0, function () {
        var terms, disciplines, categories, listReturn, _i, terms_1, i, termObj, _a, disciplines_1, j, disciplineObj, _b, categories_1, k, listTests, categoryObj;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, findTableDataRepository_1.findTerms)()];
                case 1:
                    terms = (_c.sent()).terms;
                    return [4 /*yield*/, (0, findTableDataRepository_1.findDisciplines)()];
                case 2:
                    disciplines = (_c.sent()).disciplines;
                    return [4 /*yield*/, (0, findTableDataRepository_1.findCategories)()];
                case 3:
                    categories = (_c.sent()).categories;
                    listReturn = [];
                    _i = 0, terms_1 = terms;
                    _c.label = 4;
                case 4:
                    if (!(_i < terms_1.length)) return [3 /*break*/, 13];
                    i = terms_1[_i];
                    termObj = { term: i.number, testsByDiscipline: [] };
                    _a = 0, disciplines_1 = disciplines;
                    _c.label = 5;
                case 5:
                    if (!(_a < disciplines_1.length)) return [3 /*break*/, 11];
                    j = disciplines_1[_a];
                    disciplineObj = { discipline: j.name, testsByCategory: [] };
                    _b = 0, categories_1 = categories;
                    _c.label = 6;
                case 6:
                    if (!(_b < categories_1.length)) return [3 /*break*/, 9];
                    k = categories_1[_b];
                    return [4 /*yield*/, (0, findTestsRepository_1.testsByDiscipline)(i.number, j.name, k.name)];
                case 7:
                    listTests = _c.sent();
                    if (listTests.length !== 0) {
                        categoryObj = { category: k.name, tests: listTests };
                        disciplineObj.testsByCategory.push(categoryObj);
                    }
                    _c.label = 8;
                case 8:
                    _b++;
                    return [3 /*break*/, 6];
                case 9:
                    if (disciplineObj.testsByCategory.length !== 0) {
                        termObj.testsByDiscipline.push(disciplineObj);
                    }
                    _c.label = 10;
                case 10:
                    _a++;
                    return [3 /*break*/, 5];
                case 11:
                    if (termObj.testsByDiscipline.length !== 0) {
                        listReturn.push(termObj);
                    }
                    _c.label = 12;
                case 12:
                    _i++;
                    return [3 /*break*/, 4];
                case 13: return [2 /*return*/, listReturn];
            }
        });
    });
}
exports.disciplineTests = disciplineTests;
function teacherTests() {
    return __awaiter(this, void 0, void 0, function () {
        var teachers, categories, listReturn, _i, teachers_1, i, teacherObj, _a, categories_2, j, listTests, categoryObj;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, findTableDataRepository_1.findTeachers)()];
                case 1:
                    teachers = (_b.sent()).teachers;
                    return [4 /*yield*/, (0, findTableDataRepository_1.findCategories)()];
                case 2:
                    categories = (_b.sent()).categories;
                    listReturn = [];
                    _i = 0, teachers_1 = teachers;
                    _b.label = 3;
                case 3:
                    if (!(_i < teachers_1.length)) return [3 /*break*/, 9];
                    i = teachers_1[_i];
                    teacherObj = { teacher: i.name, testsByCategory: [] };
                    _a = 0, categories_2 = categories;
                    _b.label = 4;
                case 4:
                    if (!(_a < categories_2.length)) return [3 /*break*/, 7];
                    j = categories_2[_a];
                    return [4 /*yield*/, (0, findTestsRepository_1.testsByTeachers)(i.name, j.name)];
                case 5:
                    listTests = _b.sent();
                    if (listTests.length !== 0) {
                        categoryObj = { category: j.name, tests: listTests };
                        teacherObj.testsByCategory.push(categoryObj);
                    }
                    _b.label = 6;
                case 6:
                    _a++;
                    return [3 /*break*/, 4];
                case 7:
                    if (teacherObj.testsByCategory.length !== 0) {
                        listReturn.push(teacherObj);
                    }
                    _b.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 3];
                case 9: return [2 /*return*/, listReturn];
            }
        });
    });
}
exports.teacherTests = teacherTests;
