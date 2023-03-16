"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const homeRoute = require('./home');
const feelingRoute = require('./feeling');
router.use('/', homeRoute);
router.use('/feeling', feelingRoute);
module.exports = router;
