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
Object.defineProperty(exports, "__esModule", { value: true });
var UserRepository_1 = __importDefault(require("../../repositories/UserRepository"));
var CreateUserService_1 = __importDefault(require("../../services/users/CreateUserService"));
var SendCodeRecoveryPassword_1 = __importDefault(require("../../services/users/password/SendCodeRecoveryPassword"));
var RegisterNewPasswordService_1 = __importDefault(require("../../services/users/password/RegisterNewPasswordService"));
var UpdatePasswordService_1 = __importDefault(require("../../services/users/password/UpdatePasswordService"));
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepository = new UserRepository_1.default();
                        return [4 /*yield*/, userRepository.getAll()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, res.json(users)];
                }
            });
        });
    };
    UserController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, email, password, result, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, name_1 = _a.name, email = _a.email, password = _a.password;
                        return [4 /*yield*/, CreateUserService_1.default.execute({
                                name: name_1,
                                email: email,
                                password: password
                            })];
                    case 1:
                        result = _b.sent();
                        delete result.password;
                        return [2 /*return*/, res.status(200).json(result)];
                    case 2:
                        err_1 = _b.sent();
                        return [2 /*return*/, res.status(400).json({ error: err_1.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // public async updateProfile(req: Request, res: Response): Promise<Response> {
    //   try {
    //     const { name, email, password } = req.body;
    //     const result: User = await CreateUserService.execute({
    //       name,
    //       email,
    //       password
    //     });
    //     delete result.password;
    //     return res.status(200).json(result);
    //   } catch (err) {
    //     return res.status(400).json({ error: err.message });
    //   }
    // }
    UserController.prototype.recoveryPass = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var email, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        email = req.body.email;
                        return [4 /*yield*/, SendCodeRecoveryPassword_1.default.execute({
                                email: email
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ teste: 'ok' })];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, res.status(400).json({ error: err_2.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.registerNewPassword = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, newPassword, token, result, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, email = _a.email, newPassword = _a.newPassword, token = _a.token;
                        return [4 /*yield*/, RegisterNewPasswordService_1.default.execute({
                                email: email,
                                newPassword: newPassword,
                                token: token
                            })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, res.status(200).json({ user: result })];
                    case 2:
                        err_3 = _b.sent();
                        return [2 /*return*/, res.status(400).json({ error: err_3.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.updatePassword = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, newPassword, oldPassword, id, result, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, newPassword = _a.newPassword, oldPassword = _a.oldPassword;
                        id = req.user.id;
                        return [4 /*yield*/, UpdatePasswordService_1.default.execute({
                                newPassword: newPassword,
                                oldPassword: oldPassword,
                                id: id,
                                email: 'askdnmaksndas@knkas.com'
                            })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, res.status(200).json({ user: result })];
                    case 2:
                        err_4 = _b.sent();
                        return [2 /*return*/, res.status(400).json({ error: err_4.message })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.default = UserController;
