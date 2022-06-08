import mongoose from "mongoose";
const QuoteShema = new mongoose.Schema({  content:{ type: String, default:"" },  page: { type: String, default:"" } });

const BookJournalSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      ref: 'User',
      index: true,
      required: true,
    },
    imagePath: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    date:{ 
      type: Date, default: Date.now 
    },
    author:{
      type: String,
      default: ''
    },
    publisher : {
      type: String,
      default: '' 
    },
    review: {
      type: String 
    },
    likeCount : {
      type: Number,
      default: 0
    },
    //type: Object, //{USER_ID1 : true, USER_ID2 : true }
    likeUsers : { 
      type: [String],
      default: []
    },
    quotes: {
      type: [QuoteShema],
      default: []
    },
    tags: {
      type: [ mongoose.Schema.Types.ObjectId ],
      default: []
    },
    genre: {
      type: mongoose.Schema.Types.ObjectId
    }
  },  
  { timestamps: true }, 
);
const BookJournalModel = mongoose.model("BookJournal", BookJournalSchema);
export { BookJournalModel };
