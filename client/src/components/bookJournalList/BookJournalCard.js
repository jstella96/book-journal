
import LikeButton from "./LikeButton.js";
import {getTagName, formatDate} from "../../utils/utils.js";
export default function BookJournalCard({$target, initialState={}}){

  this.$element = document.createElement('div'); 
  this.$element.className = "book-journal-list__card"
  this.$element.dataset.id = initialState.bookJournal._id;

  this.state = {
    keyword: initialState.keyword ? initialState.keyword : '',
    bookJournal: initialState.bookJournal ? initialState.bookJournal : {},
  }
  let likeButton = null
  $target.appendChild(this.$element)

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    this.render()
  }
  
  this.render = () => {
    const { bookJournal, keyword} = this.state
    this.$element.innerHTML = `
    <span class="book-journal-list__date">${formatDate(bookJournal.date)}</span>
    <img class="book-journal-list__img" src="${bookJournal.imagePath ? bookJournal.imagePath : 'src/assets/images/bookcover.jpg'}"></img>
    <div class="book-journal-list__content">
      <h3 class="book-journal-list__title">${bookJournal.title? this.renderMatchedItem( keyword ,bookJournal.title) : '제목 없음'}</h5>
      <div class="book-journal-list__review">${bookJournal.review? bookJournal.review :'리뷰를 작성해주세요' }</div>
      <div class="book-journal-list__tag"><ul>${bookJournal.tags.map( tagId => `<li># ${getTagName(tagId)}</li>`).join('')}</ul></div>
    </div>
    `
    new LikeButton({$target : this.$element,initialState:{likeCount:bookJournal.likeCount, likeUsers:bookJournal.likeUsers }})
  }
  this.renderMatchedItem = (keyword, item) => {
    if ( !item.includes(keyword)){
        return item;
    }
    const matchedText = item.replace(new RegExp(keyword,'gi'), `<span class="book-journal-list__title--matched">${keyword}</span>`)
    return matchedText
  }
  this.render()
}
