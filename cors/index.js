"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// PARAM 허용 url
const whitelist = ["http://localhost:3000", "http://localhost:8000",];
// PARAM 옵션
const corsOptions = {
    origin: whitelist,
    credentials: true,
};
exports.default = corsOptions;
