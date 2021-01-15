"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = __importDefault(require("../libs/jwt"));
var config_1 = __importDefault(require("../config/config"));
function AuthMiddlewere(req, res, next) {
    try {
        var authorization = req.headers.authorization;
        if (!authorization) {
            throw new Error('Necessario token JWT');
        }
        var _a = authorization.split(' '), token = _a[1];
        var id = jwt_1.default.decode(token).id;
        req.user = {
            id: id
        };
        jwt_1.default.verify(token, config_1.default.jwt.secret);
        return next();
    }
    catch (error) {
        throw new Error('U001');
    }
}
exports.default = AuthMiddlewere;
