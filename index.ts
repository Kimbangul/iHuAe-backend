import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
const indexRouter = require('./routes/index');
const cors = require('cors');

dotenv.config();

// Express 인스턴스 생성
const app = express();
const port = process.env.PORT;

app.use('/', indexRouter);
/** 클라이언트 요청 body를 json으로 파싱 처리 */
app.use(
  express.json({
    limit: '50mb', // 최대 50mb
  })
);

app.use(cors({
  origin: true, // 모든 출처 허용 옵션
  credential: true,
}))

// FUNCTION start run server
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
