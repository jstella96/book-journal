
export class bookJournalService {
  constructor({BookJournalModel}) {
    this.bookJournalModel = BookJournalModel;
  }
  async findBookJournal(id) {
    const query = id? {_id:id} : {}
    const bookJournal = await this.bookJournalModel.find({query});
    return bookJournal;
  }
  async findBookJournalByUser(userId) {
    const bookJournal = await this.bookJournalModel.find({userId:userId});
    return bookJournal;
  }
  async create(bookJournalDTO) {
    const bookJournal = await this.bookJournalModel.create(bookJournalDTO);
    return bookJournal;
  }
  async deleteBookJournal(id) {
    const bookJournal = await this.bookJournalModel.delete({_id:bookJournalId});
    return bookJournal;
  }
  async updateBookJournal(id,bookJournalDTO) {
    const bookJournal = await this.bookJournalModel.update({_id:id, $set: bookJournalDTO});
    return bookJournal;
  }

}
