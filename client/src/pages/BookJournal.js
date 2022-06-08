import BookJournalHearder from "../components/header/BookJournalHeader.js";
import BookDetail from "../components/bookJournal/BookDetail.js";
import BookReview from "../components/bookJournal/BookReview.js";
import BookQuote from "../components/bookJournal/BookQuote.js";
import BookTag from "../components/bookJournal/BookTag.js";
import {getItem} from "../utils/localStorage.js"
import {getParameterByName} from "../utils/utils.js"
import { deleteBookJournal, getBookJournal, updateBookJournal} from "../lib/demo-api/bookjournal.js"
import {routeChange} from '../lib/route/route.js'

export default function BookJournal({$target}){
   
  const $page = document.createElement('div');
  $page.className = "book-journal-page"
  
  this.state = {
    genres:[],
    tags:[],
    form:{},
    id: ''
  }

  this.setState = nextState => {
    this.state = {
      ...this.state,
      ...nextState
    }
    bookDetail.setState({genres :this.state.genres, form:this.state.form})
    bookTag.setState({tags :this.state.tags, selectedIds: this.state.form.tags})
    bookReview.setState({review :this.state.form.review})
    bookQuote.setState({quotes :this.state.form.quotes})
    this.render()
  }

  const onChange = async (nextForm) => {
    this.state.form = {
      ...this.state.form,
      ...nextForm
    }
  }

  const onSave = async () => {
    const {id,form} = this.state;
    const res = await updateBookJournal(id,form);
    routeChange('/')
  }

  const onDelete= async () => {
    const {id} = this.state;
    const res = await deleteBookJournal(id);
    routeChange('/')
  }

  this.render = () => {
    $target.appendChild($page)
  }

  this.init = async () => {
    const user = getItem("user")
    const id = getParameterByName("id")
    const bookJournal = await getBookJournal(id)
    this.setState({id:id,genres:user.genres,tags:user.tags,form:bookJournal})
  }

  this.init()

  new BookJournalHearder({$target, onSave, onDelete})
  const bookDetail = new BookDetail({$target, initialState:{form:this.state.form}, onChange})
  const bookTag = new BookTag({$target ,initialState:{selectedId:this.state.form.tags},onChange})
  const bookReview = new BookReview({$target,initialState:{review:this.state.review},onChange})
  const bookQuote = new BookQuote({$target,initialState:{quotes:this.state.quotes},onChange})

  this.render();
}