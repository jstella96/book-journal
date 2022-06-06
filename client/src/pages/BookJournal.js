import BookJournalHearder from "../components/header/BookJournalHeader.js";
import BookDetail from "../components/bookJournal/BookDetail.js";
import BookReview from "../components/bookJournal/BookReview.js";
import BookQuote from "../components/bookJournal/BookQuote.js";
import BookTag from "../components/bookJournal/BookTag.js";
import {getItem,setItem} from "../utils/localStorage.js"
import {getUser, deleteGenre, deleteTag, putGenre, putTag} from "../lib/api/user.js"
import {getBookJournals, deleteBookJournal, getBookJournal, putBookJournal, updateBookJournal} from "../lib/api/bookjournal.js"

export default function BookJournal({$target}){
  //[필수] 
  const $page = document.createElement('div');
  $page.className = "book-journal-page"
  

  this.state = {
    genres:[],
    tags:[]
  }

  this.setState = nextState => {
    this.state = {
      ...this.state,
      ...nextState
    }
    bookDetail.setState({genres :this.state.genres})
    bookTag.setState({tags :this.state.tags})
    this.render()
  }

  new BookJournalHearder({$target})
  const bookDetail = new BookDetail({$target,onChange:this.onChange})
  const bookTag = new BookTag({$target,onChange:this.onChange})
  new BookReview({$target,onChange:this.onChange})
  new BookQuote({$target,onChange:this.onChange})

  this.render = () => {
    $target.appendChild($page)
  }
  this.init = async () => {
    const user = getItem("user")
    this.setState({genres:user.genres,tags:user.tags})
  }
  this.onChange = async (nextState) => {
    this.setState(nextState)
  }
 this.init()
  this.render();
}