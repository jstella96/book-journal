import config from './config/index.js';
import express from 'express';
import loaders from './loaders/index.js';
const app = express();

loaders(app);
const server = app.listen(3010, () => {
  console.log(`${config.port} 연결`)
}).on('error', err => {
  console.log(err)
  process.exit(1);
});

export { server }