
import LikeButton from "./LikeButton.js";
export default function BookJournalCard({$target, initialState={}}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "book-journal-list__card"
  
  /* 이름 종속되게 짓지 말기 */
  this.state = {
    keyword: initialState.keyword ? initialState.keyword : '',
    bookJournal: initialState.bookJournal ? initialState.bookJournal : {},
  }
  let likeButton = null
  //this.state = initialState
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
    <span class="book-journal-list__date">2021-02-18</span>
    <img class="book-journal-list__img" src="http://image.yes24.com/goods/74261416/XL"></img>
    <div class="book-journal-list__content">
      <h3 class="book-journal-list__title">${this.renderMatchedItem( keyword ,bookJournal.title)}</h5>
      <p class="book-journal-list__review">한줄 평이 있다면 작성하세요</p>
      <div class="book-journal-list__tag"><ul><li> #태그</li> <li> #태그</li></ul></div>
    </div>
    `
    new LikeButton({$target : this.$element})
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
