import { Router } from 'express';
const router = Router();

const homeRoute = require('./home');
const feelingRoute = require('./feeling');

router.use('/', homeRoute);
router.use('/feeling', feelingRoute);

module.exports = router;
