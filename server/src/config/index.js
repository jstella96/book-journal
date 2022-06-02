import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export default  {
  api: {
    prefix: '/api'
  },
  port: process.env.PORT,
   /* MongoDB URL */
  mongoURL: process.env.MONGODB_URI,
}