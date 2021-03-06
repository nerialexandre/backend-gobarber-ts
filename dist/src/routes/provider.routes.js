"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../controllers/users/index"));
var controller = new index_1.default();
exports.default = (function (router) {
    router.route('/providers').get(controller.index);
    router.route('/provider/:id').post(controller.create);
    router.route('/provider/:id/schedule').post(controller.create);
});
