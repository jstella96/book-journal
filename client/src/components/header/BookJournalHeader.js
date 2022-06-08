import {routeChange} from '../../lib/route/route.js'

export default function BookJournalHearder({$target, initialState, onSave, onDelete}){

  this.$element = document.createElement('div'); 
  this.$element.className = "header book-journal-header"
  
  this.state = {}

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
        <h1 class="book-journal-header__back">
          < BACK
        </h1>
        <button class="header__button header__save"> 저장 </button>
        <button class="header__button header__delete"> 삭제 </button>
        <label class="switch-button"> 
          <input type="checkbox"/> 
          <span class="switch-button__onoff"></span> 
        </label>
    `
  }

  this.$element.addEventListener('click', e => {
    const $save = e.target.closest('.header__save')
    if($save){
      onSave()
    }
    const $back = e.target.closest('.book-journal-header__back')
    if($back){
      routeChange('/')
    }
    const $delete = e.target.closest('.header__delete')
    if($delete){
      onDelete()
    }
  })

  
  this.render()
}
