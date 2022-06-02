import expressLoader from './express.js';
import mongooseLoader from './mongoose.js';
import logger from './logger.js';
export default (app) => {
  expressLoader(app);
  mongooseLoader();
  logger.info("ddd")
};