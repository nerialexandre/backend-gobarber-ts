"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var compression_1 = __importDefault(require("compression"));
var method_override_1 = __importDefault(require("method-override"));
var helmet_1 = __importDefault(require("helmet"));
var routes_1 = __importDefault(require("./config/routes"));
var errosMiddlewere_1 = __importDefault(require("./middlewares/errosMiddlewere"));
require("./config/database/index");
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default());
app.use(compression_1.default());
app.use(method_override_1.default());
// secure apps by setting various HTTP headers
app.use(helmet_1.default());
// enable CORS - Cross Origin Resource Shari
app.use(cors_1.default());
routes_1.default(app);
app.use(errosMiddlewere_1.default);
app.listen(5000, function () {
    console.log('🚀️ Backend started!');
});
exports.default = app;
