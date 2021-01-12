"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("../middlewares/auth"));
exports.default = (function (router) {
    router.route('/').get(auth_1.default, function (req, res) {
        res.send('Api GoBarber');
    });
});
