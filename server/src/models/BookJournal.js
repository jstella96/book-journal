import mongoose from "mongoose";
const QuotesShema = new mongoose.Schema({ code:String, language: String });
const BookJournalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      index: true
    },
    imgPath: {
      type: String
    },
    title: {
      type: String
    },
    date:{ 
      type: Date, default: Date.now 
    },
    author:{
      type: String 
    },
    publisher : {
      type: String 
    },
    review: {
      type: String 
    },
    quotes: [QuotesShema]
  },
  { timestamps: true }, 
);
const BookJournalModel = mongoose.model("BookJournal", BookJournalSchema);
export { BookJournalModel };
