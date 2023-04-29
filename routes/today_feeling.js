"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const qs = require('querystring');
router
    .get('/', (req, res) => {
    // HTTP 메서드 get에 대한 처리
    console.log(req, res);
    res.send('get');
})
    .post('/insert', (req, res) => {
    let body = '';
    req.on('data', function (data) {
        body = body + data;
    });
    req.on('end', function () {
        let data = qs.parse(body);
        console.log(data);
        console.log(data.test);
    });
    res.send('post');
})
    .put('/update', (req, res) => {
    res.send('put');
})
    .delete('/delete', (req, res) => {
    res.send('delete');
});
module.exports = router;
