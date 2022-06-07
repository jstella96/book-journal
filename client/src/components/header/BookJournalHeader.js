import {routeChange} from '../../lib/route/route.js'

export default function BookJournalHearder({$target, initialState={},  onSave}){

  this.$element = document.createElement('div'); 
  this.$element.className = "header book-journal-header"
  

  this.state = {

  }

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
        <button class="header__button header__save"> 저장</button>
        <button class="header__button"> 책검색</button>
        <label class="switch-button"> 
          <input type="checkbox"/> 
          <span class="switch-button__onoff"></span> 
        </label>
    `
  }

  this.$element.addEventListener('click', e => {
    const $el = e.target.closest('.header__save')
    if($el){
      onSave()
    }
    const $button = e.target.closest('.book-journal-header__back')
    if($button){
      routeChange('/')
    }
  })

  
  this.render()
}
