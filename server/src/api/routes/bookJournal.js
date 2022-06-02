import { Router} from 'express';
// import middlewares from '../middlewares/index.js';
// import { BookJournalService } from '../../services/index.js';
// import { ReadingLogModel } from '../../models/BookJournal.js'
const route = Router();

export default (app) => {
    app.use('/book-journal', route);
    // route.get('/', middlewares.isUserValid, async (req, res) => {
    //   //파라미터 체크 
    //   const { userId } = req.body
    //   if(!userId) next();
    //   //const title = req.params.title;
    //   let ReadingLogerviceInstance = new ReadingLogService({ReadingLogModel});
    //   //const problem = await ProblemServiceInstance.findByTitle(title);
    //   const readingLogs = await ReadingLogServiceInstance.findbookJournal(userId);
    //   return res.json(bookJournal).status(200);
    // });
    // route.post('/', middlewares.isUserValid, async (req, res) => {
    //   try {
    //     let bookJournalDTO = req.body //problem
    //     let bookJournalServiceInstance = new bookJournalService({bookJournalModel});
    //     const bookJournal = await bookJournalServiceInstance.create(bookJournalDTO);
    //     return res.json(bookJournal).status(201);
    //   } catch (error) {
    //       console.log(error)
    //     return res.json({err:'err'}).status(400);
    //   }
    // });
    // route.delete('/:id', isAccessTokenValid, asyncErrorWrapper(async (req, res, next) => {
    //   const problemId = req.params.id;
    //   const userId = req.user._id;
    //   let ProblemServiceInstance = new ProblemService({ ProblemModel });
    //   await ProblemServiceInstance.deleteProblem(problemId,userId);
    //   res.status(204).json();
    // }));
}