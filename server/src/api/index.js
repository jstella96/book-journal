import { Router } from 'express';
import user from './routes/user.js';
import bookJournal from './routes/bookJournal.js'
export default () => {
    const app = Router();
    user(app);
    bookJournal(app);
    return app;
}