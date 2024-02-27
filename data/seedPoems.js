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
var fs = require("fs");
var prisma_1 = require("../lib/prisma");
var filePath = './data/poems.json';
function getAuthors() {
    return __awaiter(this, void 0, void 0, function () {
        var req, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://poetrydb.org/author")];
                case 1:
                    req = _a.sent();
                    return [4 /*yield*/, req.json()];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res.authors];
            }
        });
    });
}
function getPoems(author) {
    return __awaiter(this, void 0, void 0, function () {
        var req, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://poetrydb.org/author/" + author)];
                case 1:
                    req = _a.sent();
                    return [4 /*yield*/, req.json()];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res];
            }
        });
    });
}
function getAuthorPoems() {
    return __awaiter(this, void 0, void 0, function () {
        var authors, poems, _i, authors_1, author, authorPoems, newList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAuthors()];
                case 1:
                    authors = _a.sent(), poems = {};
                    _i = 0, authors_1 = authors;
                    _a.label = 2;
                case 2:
                    if (!(_i < authors_1.length)) return [3 /*break*/, 5];
                    author = authors_1[_i];
                    return [4 /*yield*/, getPoems(author)];
                case 3:
                    authorPoems = _a.sent(), newList = authorPoems.map(function (poem) { return ({
                        lines: poem.lines.join("\n"),
                        title: poem.title
                    }); });
                    poems[author] = newList.slice(0, 10);
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, poems];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    console.error('Error writing to file:', err);
                }
                else {
                    var poems = JSON.parse(data), uniquePoems_1 = {}, watchList = [];
                    // get random list of authors
                    var randomAuthors = shuffleArray(Object.keys(poems)), 
                    // sort the first 50 authors
                    sortedAuthors = randomAuthors.slice(0, 50).sort();
                    // remove duplicate poems
                    for (var _i = 0, sortedAuthors_1 = sortedAuthors; _i < sortedAuthors_1.length; _i++) {
                        var author = sortedAuthors_1[_i];
                        uniquePoems_1[author] = [];
                        for (var _a = 0, _b = poems[author]; _a < _b.length; _a++) {
                            var poem = _b[_a];
                            if (!watchList.includes(poem.title)) {
                                uniquePoems_1[author].push(poem);
                                watchList.push(poem.title);
                            }
                        }
                    }
                    sortedAuthors.forEach(function (author) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = console).log;
                                    return [4 /*yield*/, prisma_1.default.author.create({
                                            data: {
                                                name: author,
                                                poems: {
                                                    create: uniquePoems_1[author]
                                                }
                                            }
                                        })];
                                case 1:
                                    _b.apply(_a, [_c.sent()]);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
            });
            return [2 /*return*/];
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
function shuffleArray(array) {
    var newArray = array.slice(); // Create a copy of the original array to avoid modifying it directly
    for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); // Generate a random index within the remaining unshuffled portion
        // Swap elements at i and j
        var temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray;
}
