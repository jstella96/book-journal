import BookJournalHearder from "../components/header/BookJournalHeader.js";
import BookDetail from "../components/bookJournal/BookDetail.js";
import BookReview from "../components/bookJournal/BookReview.js";
import BookQuote from "../components/bookJournal/BookQuote.js";
import {getUser, deleteGenre, deleteTag, putGenre, putTag} from "../lib/api/user.js"
import {getBookJournals, deleteBookJournal, getBookJournal, putBookJournal, updateBookJournal} from "../lib/api/bookjournal.js"

export default function BookJournal({$target}){
  //[필수] 
  const $page = document.createElement('div');
  $page.className = "book-journal-page"
  

  this.state = {}

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  new BookJournalHearder({$target})
  new BookDetail({$target})
  new BookReview({$target})
  new BookQuote({$target})

  this.render = () => {

    $target.appendChild($page)
  }
 
  this.render();
 
  
}