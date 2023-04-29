import { Router, Request, Response } from 'express';
const router = Router();
const qs = require('querystring');

router
  .get('/', (req: Request, res: Response) => {
    // HTTP 메서드 get에 대한 처리
    console.log(req, res);
    res.send('get');
  })
  .post('/insert', (req: Request, res: Response) => {
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
  .put('/update', (req: Request, res: Response) => {
    res.send('put');
  })
  .delete('/delete', (req: Request, res: Response) => {
    res.send('delete');
  });

module.exports = router;
