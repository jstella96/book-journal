import BookJournalCard from "./BookJournalCard.js";

export default function BookJournalList({$target, initialState={}, onLikeClick}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "book-journal-list"
  
  /* 이름 종속되게 짓지 말기 */
  this.state = {
    bookJournals : initialState.bookJournals ? initialState.bookJournals : [],
    keyword:  initialState.keyword ? initialState.keyword : '',
    sortBy:  initialState.sortBy ? initialState.sortBy : '',
  }

  

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    this.render()
  }

 
 
  
  this.render = () => {

    this.$element.innerHTML = ""
    const {bookJournals, keyword, sortBy }= this.state
    const checkedBookJournals = bookJournals.filter(bookJournal => {
      const title = bookJournal.title
      return title.includes(keyword)
    })
    if( sortBy){
      checkedBookJournals.sort( (a, b) =>  new Date(b[ sortBy]) - new Date(a[ sortBy]))

    }
      checkedBookJournals.forEach( bookJournal => {
        new BookJournalCard({$target: this.$element, initialState : {
            bookJournal: bookJournal,
            keyword: keyword
          },
        });   
    });
    $target.appendChild(this.$element)
  }

  this.$element.addEventListener('click',(e)=>{
    const $navItem = e.target.closest('.book-journal-list__like')
      if ($navItem) {
        //const { index } = $navItem.dataset
        onLikeClick();
        //onClick( index ? parseInt(index, 10) : null)
      }

  })
  this.render()
}
