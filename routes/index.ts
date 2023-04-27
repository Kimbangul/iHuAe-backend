import { Router } from 'express';
const router = Router();

const homeRoute = require('./home');
const feelingRoute = require('./feeling');
const todayFeelingRoute = require('./today_feeling');

router.use('/', homeRoute);
router.use('/feeling', feelingRoute);
router.use('/today_feeling', todayFeelingRoute);

module.exports = router;
