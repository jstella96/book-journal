
export class BookJournalService {
  constructor({BookJournalModel}) {
    this.bookJournalModel = BookJournalModel;
  }
  async findBookJournal(id) {
    const query = id? {_id:id} : {}
    const bookJournal = await this.bookJournalModel.findOne(query);
    return bookJournal;
  }
  async findBookJournalByUserId(userId) {
    const bookJournal = await this.bookJournalModel.find({userId:userId});
    return bookJournal;
  }
  async create(bookJournalDTO) {
    const bookJournal = await this.bookJournalModel.create(bookJournalDTO);
    return bookJournal;
  }
  async deleteBookJournal(bookJournalId) {
    const bookJournal = await this.bookJournalModel.deleteOne({_id:bookJournalId});
    return bookJournal;
  }
  async updateBookJournal(id,bookJournalDTO) {
    const bookJournal = await this.bookJournalModel.updateOne({ _id:id}, { $set: bookJournalDTO});
    return bookJournal;
  }
}
