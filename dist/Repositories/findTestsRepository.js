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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.testsByTeachers = exports.teachersAndCategories = exports.testsByDiscipline = void 0;
var database_1 = require("../Config/database");
var postgres_1 = __importDefault(require("../Config/postgres"));
function testsByDiscipline(disciplineId) {
    return __awaiter(this, void 0, void 0, function () {
        var disciplineTests;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.prisma.test.findMany({
                        include: {
                            TeachersDisciplines: {}
                        }
                    })];
                case 1:
                    disciplineTests = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.testsByDiscipline = testsByDiscipline;
function teachersAndCategories() {
    return __awaiter(this, void 0, void 0, function () {
        var teachers, categories;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1["default"].query('select name from teachers')];
                case 1:
                    teachers = (_a.sent()).rows;
                    return [4 /*yield*/, postgres_1["default"].query('select name from categories')];
                case 2:
                    categories = (_a.sent()).rows;
                    return [2 /*return*/, { teachers: teachers, categories: categories }];
            }
        });
    });
}
exports.teachersAndCategories = teachersAndCategories;
function testsByTeachers(teacher, category) {
    return __awaiter(this, void 0, void 0, function () {
        var testList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1["default"].query('select teachers.name as teacher, tests."pdfUrl" as url, tests.name as test, tests.id as id, categories.name as category, disciplines.name as disciplines from teachers join "teachersDisciplines" on teachers.id = "teachersDisciplines"."teacherId" join disciplines on "teachersDisciplines"."disciplineId" = disciplines.id join tests on "teachersDisciplines".id=tests."teacherDisciplineId" join categories on tests."categoryId"=categories.id where teachers.name=$1 and categories.name=$2;', [teacher, category])];
                case 1:
                    testList = (_a.sent()).rows;
                    return [2 /*return*/, testList];
            }
        });
    });
}
exports.testsByTeachers = testsByTeachers;
/*  TENTATIVA DE FAZER PELO PRISMA
export async function testsByTeachers() {
    const teacherTests = await prisma.test.findMany({
        select:{
            id:true,
            name:true,
            pdfUrl:true,
            TeachersDisciplines:{
                select: {
                    
                    Teacher:{
                        select:{
                            name:true
                        }
                    }
                }
            },
            Category:{
                select:{
                    name:true
                }
            }
        }
    });
    console.log(teacherTests);
    return teacherTests;
    
}*/ 
