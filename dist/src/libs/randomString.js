"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var randomstring_1 = __importDefault(require("randomstring"));
var RandomString = /** @class */ (function () {
    function RandomString() {
    }
    RandomString.prototype.generate = function (_length, _charset) {
        return randomstring_1.default.generate({
            length: _length,
            charset: _charset
        });
    };
    return RandomString;
}());
exports.default = new RandomString();
