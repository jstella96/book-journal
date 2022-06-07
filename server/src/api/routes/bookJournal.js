import { Router} from 'express';
// import middlewares from '../middlewares/index.js';
import { BookJournalService } from '../../services/index.js';
import { BookJournalModel } from '../../models/BookJournal.js'
const route = Router();

export default (app) => {
    app.use('/book-journals', route);
    route.get('/', async (req, res) => {
      const { userId } = req.query
      if(!userId) next();
      const BookJournalServiceInstance = new BookJournalService({BookJournalModel});
      const bookJournals = await BookJournalServiceInstance.findBookJournalByUserId(userId);
      return res.json(bookJournals).status(200);
    });
    route.post('/', async (req, res) => {
      const bookJournalDTO = req.body //problem
      const BookJournalServiceInstance = new BookJournalService({BookJournalModel});
      const bookJournal = await BookJournalServiceInstance.create(bookJournalDTO);
      return res.json(bookJournal).status(201);
    });
    route.get('/:id', async (req, res) => {
      const bookJournalId = req.params.id //problem
      const BookJournalServiceInstance = new BookJournalService({BookJournalModel});
      const result = await BookJournalServiceInstance.findBookJournal(bookJournalId);
      return res.json(result).status(201);
    });
    route.delete('/:id', async (req, res) => {
      const bookJournalId = req.params.id //problem
      const BookJournalServiceInstance = new BookJournalService({BookJournalModel});
      const result = await BookJournalServiceInstance.deleteBookJournal(bookJournalId);
      return res.json(result).status(201);
    });
    route.patch('/:id', async (req, res) => {
      const bookJournalId = req.params.id //problem
      const bookJournalDTO = req.body
      delete bookJournalDTO._id;
      delete bookJournalDTO.userId;
      delete bookJournalDTO.createdAt;
      delete bookJournalDTO.updatedAt;
      const BookJournalServiceInstance = new BookJournalService({BookJournalModel});
      const result = await BookJournalServiceInstance.updateBookJournal(bookJournalId,bookJournalDTO);
      return res.json(result).status(201);
    });

}