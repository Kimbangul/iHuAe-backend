import { Router, Request, Response } from 'express';
const router = Router();
/** FUNCTION get 메소드 요청하면 실행
 * method: get
 * host:port
 *  */
router.get('/', (req: Request, res: Response) => {
  const dummy = {
    msg: 'Hello world',
    data: 200
}
res.json(dummy);
});

router.post('/insert', (req: Request, res: Response) => {
  const dummy = {
    data: 200
  }
  res.json(dummy);
});


module.exports = router;
