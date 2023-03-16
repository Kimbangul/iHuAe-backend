import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

// FUNCTION start run server
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
