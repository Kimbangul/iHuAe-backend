"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/** FUNCTION get 메소드 요청하면 실행
 * method: get
 * host:port
 *  */
router.get('/', (req, res) => {
    const dummy = {
        msg: 'Hello world',
        data: 200
    }
    res.json(dummy);
});
module.exports = router;
