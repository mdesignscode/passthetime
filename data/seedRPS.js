"use strict";
/* Rock, Paper, Scissors 101 */
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("../lib/prisma");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var url, request, 
        // get all objects
        allObjects, objectOutcomes, _i, allObjects_1, object, getObject, playObject, winningOutcomes, winningMatches, _a, winningOutcomes_1, outcome, upperCaseAction, action, _b, objectOutcomes_1, object, RPSObject;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    url = "https://rps101.pythonanywhere.com/api/v1/objects/";
                    return [4 /*yield*/, fetch(url + "all")];
                case 1:
                    request = _c.sent();
                    return [4 /*yield*/, request.json()];
                case 2:
                    allObjects = _c.sent(), objectOutcomes = [];
                    _i = 0, allObjects_1 = allObjects;
                    _c.label = 3;
                case 3:
                    if (!(_i < allObjects_1.length)) return [3 /*break*/, 7];
                    object = allObjects_1[_i];
                    return [4 /*yield*/, fetch(url + object)];
                case 4:
                    getObject = _c.sent();
                    return [4 /*yield*/, getObject.json()];
                case 5:
                    playObject = _c.sent(), winningOutcomes = playObject['winning outcomes'], winningMatches = [];
                    // create winning outcomes
                    for (_a = 0, winningOutcomes_1 = winningOutcomes; _a < winningOutcomes_1.length; _a++) {
                        outcome = winningOutcomes_1[_a];
                        upperCaseAction = outcome[0].charAt(0).toUpperCase() + outcome[0].slice(1), action = outcome[0] === "-" ? "Overpowers" : upperCaseAction;
                        winningMatches.push({
                            action: action,
                            name: outcome[1]
                        });
                    }
                    objectOutcomes.push({
                        name: object,
                        winningMatches: winningMatches
                    });
                    _c.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 3];
                case 7:
                    _b = 0, objectOutcomes_1 = objectOutcomes;
                    _c.label = 8;
                case 8:
                    if (!(_b < objectOutcomes_1.length)) return [3 /*break*/, 11];
                    object = objectOutcomes_1[_b];
                    return [4 /*yield*/, prisma_1.default.rockPaperScissor.create({
                            data: {
                                name: object.name,
                                winningMatches: {
                                    create: object.winningMatches
                                }
                            }
                        })];
                case 9:
                    RPSObject = _c.sent();
                    console.log(RPSObject);
                    _c.label = 10;
                case 10:
                    _b++;
                    return [3 /*break*/, 8];
                case 11: return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1.default.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma_1.default.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
