"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("./cors"));
const indexRouter = require('./routes/index');
const cors = require('cors');
dotenv_1.default.config();
// Express 인스턴스 생성
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(cors(cors_1.default));
app.use('/', indexRouter);
app.use(function (req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});
/** 클라이언트 요청 body를 json으로 파싱 처리 */
app.use(express_1.default.json({
    limit: '50mb', // 최대 50mb
}));
// FUNCTION start run server
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});
