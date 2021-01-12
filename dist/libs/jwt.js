"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var Jwt = /** @class */ (function () {
    function Jwt() {
        this.generate = function (tokenData, secret, _expiresIn) {
            return jsonwebtoken_1.sign(tokenData, secret, {
                expiresIn: _expiresIn
            });
        };
        this.verify = function (token, secret) {
            try {
                jsonwebtoken_1.verify(token, secret);
            }
            catch (_a) {
                throw new Error('JWT invalido');
            }
        };
        this.decode = function (token) {
            return jsonwebtoken_1.decode(token);
        };
    }
    return Jwt;
}());
exports.default = new Jwt();
