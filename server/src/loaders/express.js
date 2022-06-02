import express from 'express';
import config from '../config/index.js';
import routes from '../api/index.js';

export default (app) => {

    app.use(express.json()); 
    app.use(express.urlencoded({ extended: true }));
    // API Route 설정
    app.use(config.api.prefix, routes());
}
