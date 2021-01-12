"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = __importDefault(require("../libs/jwt"));
var config_1 = __importDefault(require("../config/config"));
function AuthMiddlewere(req, res, next) {
    var authorization = req.headers.authorization;
    if (!authorization) {
        throw new Error('Necessario token JWT');
    }
    var _a = authorization.split(' '), token = _a[1];
    jwt_1.default.verify(token, config_1.default.jwt.secret);
    return next();
}
exports.default = AuthMiddlewere;
