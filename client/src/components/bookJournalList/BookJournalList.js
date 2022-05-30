import BookJournalCard from "./BookJournalCard.js";

export default function BookJournalList({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "book-journal-list"
  
  /* 이름 종속되게 짓지 말기 */
  this.state = {

  }


  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    this.render()
  }
  
  const bookJournalCard = new BookJournalCard({$target: this.$element});
 
  $target.appendChild(this.$element)
  
  this.render = () => {
  //this.state = initialState

  }
  
  this.render()
}
