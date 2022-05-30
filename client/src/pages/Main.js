import SideFilter from "../components/sidefilter/SideFilter.js"
import MainHeader  from "../components/header/MainHeader.js"
import BookJournalList from "../components/bookJournalList/BookJournalList.js"
import Search from "../components/search/Search.js"
export default function Main({$target}){
//[필수] 
const $page = document.createElement('div');
$page.className = "main-page"

this.state = {}

this.setState = nextState => {
  this.state = nextState
  this.render()
}

let mainHeader = null
let sideFilter = null
let bookJournalList = null
let search = null

this.render = () => {
  $page.innerHTML = ''
  mainHeader =  new MainHeader({$target:$page})
  $page.innerHTML += `<div class="grid-container"></div>`
 
  search = new Search({$target:$page.querySelector('.grid-container'),initialState: {} });
  bookJournalList = new BookJournalList({$target:$page.querySelector('.grid-container'),initialState: {} });
  new BookJournalList({$target:$page.querySelector('.grid-container'),initialState: {} });
  sideFilter = new SideFilter({$target:$page.querySelector('.grid-container'),initialState: {} })
  $target.appendChild($page)

}

this.render();

}