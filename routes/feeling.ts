import { Router, Request, Response } from 'express';
const router = Router();

router
  .get('/', (req: Request, res: Response) => {
    // HTTP 메서드 get에 대한 처리
    res.send('get');
  })
  .post('/insert', (req: Request, res: Response) => {
    res.send('post');
  })
  .put('/update', (req: Request, res: Response) => {
    res.send('put');
  })
  .delete('/delete', (req: Request, res: Response) => {
    res.send('delete');
  });

module.exports = router;
