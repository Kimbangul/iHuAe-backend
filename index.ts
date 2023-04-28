import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import corsOptions from './cors';
const indexRouter = require('./routes/index');
const cors = require('cors');

dotenv.config();

// Express 인스턴스 생성
const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
}));

app.use('/', indexRouter);
/** 클라이언트 요청 body를 json으로 파싱 처리 */
app.use(
  express.json({
    limit: '50mb', // 최대 50mb
  })
);

// FUNCTION start run server
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
