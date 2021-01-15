"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __importDefault(require("../config/errors"));
function ErrorsMiddlewere(err, req, res, next) {
    var message = err.message;
    var error = errors_1.default.find(function (item) { return item.errorCode === message; });
    if (!error) {
        res.status(500).json({
            error: 500,
            message: 'Ocorreu um erro inesperado no servidor.Entre em contato com o responsavel',
        });
    }
    else {
        res.status(error.httpCode).json({ message: error });
    }
    next();
}
exports.default = ErrorsMiddlewere;
