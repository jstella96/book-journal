
export default function BookJournalHearder({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "header book-journal-header"
  
  /* 이름 종속되게 짓지 말기 */
  this.state = {

  }
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
    this.$element.innerHTML = `
  
        <div class="book-journal-header__back">
          < BACK
        </div>
        <button class="header__button"> 책검색</button>
        <label class="switch-button"> 
          <input type="checkbox"/> 
          <span class="switch-button__onoff"></span> 
        </label>
      
    `
  }
  
  this.render()
}
