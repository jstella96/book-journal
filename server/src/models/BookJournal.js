import mongoose from "mongoose";
const QuoteShema = new mongoose.Schema({  content: String,  page: String  });

const BookJournalSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      ref: 'User',
      index: true,
      required: true,
    },
    imagePath: {
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
    likeCount : {
      type: Number
    },
    likeUsers : { 
      type: Object, //{USER_ID1 : true, USER_ID2 : true }
      default: {}
    },
    quotes: {
      type: [QuoteShema],
      default: []
    }
  },
  { timestamps: true }, 
);
const BookJournalModel = mongoose.model("BookJournal", BookJournalSchema);
export { BookJournalModel };
