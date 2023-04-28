// https://www.twilio.com/blog/add-cors-support-express-typescript-api
import cors from 'cors';

// PARAM 허용 url
const whitelist = ["http://localhost:3000", "http://localhost:8000",];

// PARAM 옵션
const corsOptions : cors.CorsOptions = {
  origin: whitelist,

}

export default corsOptions;