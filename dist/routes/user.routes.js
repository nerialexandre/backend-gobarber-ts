"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../controllers/users/index"));
var controller = new index_1.default();
exports.default = (function (router) {
    router.route('/users').get(controller.index).post(controller.create);
    router.route('/users/:id').post(controller.create);
    router.route('/recoverypass').post(controller.recoveryPass);
    router.route('/newpass').post(controller.registerNewPassword);
});
