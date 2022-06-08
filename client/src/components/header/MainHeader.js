import {getBookJournals, deleteBookJournal, getBookJournal, putBookJournal, updateBookJournal} from "../../lib/demo-api/bookjournal.js"
import {routeChange} from '../../lib/route/route.js'

export default function MainHeader({$target, initialState = {}}){
  
  this.$element = document.createElement('div'); 
  this.$element.className = "header main-header"
  
  this.state = { }

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
      <button class="header__button plus">추가</button>
      <label class="switch-button"> 
        <input type="checkbox"/> 
        <span class="switch-button__onoff"></span> 
      </label>
    `
    $target.appendChild(this.$element)
  }

  window.addEventListener('click', async (e)  => {
    const $plus = e.target.closest('.plus')
    if($plus){
      let response = await putBookJournal({userId:"jstella"})
      routeChange(`/bookjournal?id=${response._id}`)
    }
    const $title = e.target.closest('.main-header__title')
    if($title){
      routeChange(`/`)
    }
  })

  this.render()
}
