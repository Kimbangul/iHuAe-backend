"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router
    .get('/', (req, res) => {
    // HTTP 메서드 get에 대한 처리
    res.send('get');
})
    .post('/insert', (req, res) => {
    res.send('post');
})
    .put('/update', (req, res) => {
    res.send('put');
})
    .delete('/delete', (req, res) => {
    res.send('delete');
});
module.exports = router;
