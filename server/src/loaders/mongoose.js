import config from '../config/index.js';
import mongoose from 'mongoose';

export default (app) => {
    const connection = mongoose.connect(config.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("연결")
}