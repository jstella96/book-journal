import {getBookJournals, deleteBookJournal, getBookJournal, putBookJournal, updateBookJournal} from "../../lib/api/bookjournal.js"
import {routeChange} from '../../lib/route/route.js'

export default function MainHeader({$target, initialState={}, onEvent}){
  
  this.$element = document.createElement('div'); 
  this.$element.className = "header main-header"
  

  this.state = {

  }



  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    this.render()
  }

  this.render = () => {
    this.$element.innerHTML = `
      <h1 class="main-header__title">
        BOOK JOURNAL
      </h2>
      <button class="header__button add">추가</button>
      <label class="switch-button"> 
        <input type="checkbox"/> 
        <span class="switch-button__onoff"></span> 
      </label>
    `
    $target.appendChild(this.$element)
  }
  


  window.addEventListener('click', async (e)  => {
    const $el = e.target.closest('.add')
    if($el){
      let response = await putBookJournal({userId:"jstella"})
      routeChange(`/bookjournal?id=${response._id}`)
    }
  })
  this.render()
}
