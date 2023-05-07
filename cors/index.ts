// https://www.twilio.com/blog/add-cors-support-express-typescript-api
import cors from 'cors';

// PARAM 허용 url
const whitelist = ["http://localhost:3000", "http://localhost:8000","http://127.0.0.1:3000", "http://127.0.0.1:8000"];

// PARAM 옵션
const corsOptions : cors.CorsOptions = {
  origin: whitelist,
  credentials: true,
}

export default corsOptions;