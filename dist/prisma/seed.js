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
var database_1 = require("../src/Config/database");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var i, data, categoriesArray, i, data, teachersArray, i, data, disciplinesArray, i, data, teachersDisciplinesArray, i, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 1;
                    _a.label = 1;
                case 1:
                    if (!(i < 7)) return [3 /*break*/, 4];
                    data = { number: i };
                    return [4 /*yield*/, database_1.prisma.term.upsert({
                            where: { number: data.number },
                            update: {},
                            create: data
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    categoriesArray = ['Projeto', 'Prática', 'Recuperação'];
                    i = 0;
                    _a.label = 5;
                case 5:
                    if (!(i < categoriesArray.length)) return [3 /*break*/, 8];
                    data = { name: categoriesArray[i] };
                    return [4 /*yield*/, database_1.prisma.category.upsert({
                            where: { name: data.name },
                            update: {},
                            create: data
                        })];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 5];
                case 8:
                    teachersArray = ['Diego Pinho', 'Bruna Hamori'];
                    i = 0;
                    _a.label = 9;
                case 9:
                    if (!(i < teachersArray.length)) return [3 /*break*/, 12];
                    data = { name: teachersArray[i] };
                    return [4 /*yield*/, database_1.prisma.teacher.upsert({
                            where: { name: data.name },
                            update: {},
                            create: data
                        })];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    i++;
                    return [3 /*break*/, 9];
                case 12:
                    disciplinesArray = [{ name: 'HTML e CSS', termId: 1 }, { name: 'JavaScript', termId: 2 }, { name: 'React', termId: 3 }, { name: 'Humildade', termId: 1 }, { name: 'Planejamento', termId: 2 }, { name: 'Autoconfiança', termId: 3 }];
                    i = 0;
                    _a.label = 13;
                case 13:
                    if (!(i < disciplinesArray.length)) return [3 /*break*/, 16];
                    data = disciplinesArray[i];
                    return [4 /*yield*/, database_1.prisma.discipline.upsert({
                            where: { name: data.name },
                            update: {},
                            create: data
                        })];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    i++;
                    return [3 /*break*/, 13];
                case 16:
                    teachersDisciplinesArray = [{ teacherId: 1, disciplineId: 1 }, { teacherId: 1, disciplineId: 2 }, { teacherId: 1, disciplineId: 3 }, { teacherId: 2, disciplineId: 4 }, { teacherId: 2, disciplineId: 5 }, { teacherId: 2, disciplineId: 6 }];
                    i = 0;
                    _a.label = 17;
                case 17:
                    if (!(i < teachersDisciplinesArray.length)) return [3 /*break*/, 20];
                    data = teachersDisciplinesArray[i];
                    return [4 /*yield*/, database_1.prisma.teachersDisciplines.upsert({
                            where: { teacherId_disciplineId: data },
                            update: {},
                            create: data
                        })];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    i++;
                    return [3 /*break*/, 17];
                case 20: return [2 /*return*/];
            }
        });
    });
}
main()["catch"](function (error) {
    console.log(error);
    process.exit(1);
})["finally"](function () {
    database_1.prisma.$disconnect();
});
