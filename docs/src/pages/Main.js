import SideFilter from "../components/sidefilter/SideFilter.js"
import MainHeader  from "../components/header/MainHeader.js"
import BookJournalList from "../components/bookJournalList/BookJournalList.js"
import Search from "../components/search/Search.js"
import {getItem,setItem} from "../utils/localStorage.js"
import {getUser} from "../lib/demo-api/user.js"
import {getBookJournals} from "../lib/demo-api/bookjournal.js"
import { groupByYear, countByGenre, filterRule } from "../utils/filter.js"

export default function Main({$target}){
   
  const $page = document.createElement('div');
  $page.className = "main-page"

  $target.appendChild($page)
  
  this.state = {
    bookJournals : [],
    tags: [],
    genres:[],
    seletedGenres:[],
    sortBy: '',
    seletedTag: [],
    keyword:'',
    filter:{}
  }

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    sideFilter.setState({genres:this.state.genres,tags:this.state.tags,years:this.state.years})
    bookJournalList.setState({ bookJournals : this.state.bookJournals, keyword: this.state.keyword, sortBy:this.state.sortBy});
    this.render()
  }

  this.init = async () => {

    const user = await getUser("jstella");
    const bookJournals = await getBookJournals("jstella");
    if(bookJournals || user) return;
    const years = groupByYear(bookJournals);
    const genres = countByGenre(user.genres,bookJournals);

    setItem("user",user)
    setItem("genres",  genres)
    setItem("bookJournals",  bookJournals)
    setItem("userId", 'guest')
    this.setState({genres:genres,tags:user.tags,years:years,bookJournals:bookJournals})

    onFilter({sort:{value:"date"}})

  }
  
  const onFilter= (nextFilter) => {
    const filter = {
      ...this.state.filter,
      ...nextFilter
    }
    this.setState({filter:filter})
    const keys = Object.keys(filter);
    let originBookJornals = getItem('bookJournals');
    keys.forEach(key => {
      originBookJornals = filterRule[key](originBookJornals, filter[key])
    })
    this.setState({bookJournals:originBookJornals})
  }


  $page.innerHTML = '<div class="grid-header"></div>'
  const mainHeader =  new MainHeader({$target:$page.querySelector('.grid-header')})

  $page.innerHTML += `<div class="grid-container"></div>`
  const search = new Search({$target:$page.querySelector('.grid-container'), initialState:"", onChange: (keyword) => {this.setState({keyword:keyword})} }) 
  const bookJournalList = new BookJournalList({$target:$page.querySelector('.grid-container'),initialState: {
    bookJournals : this.state.bookJournals
  }});
  
  const sideFilter = new SideFilter({$target:$page.querySelector('.grid-container'),initialState:{genres:this.state.genres,tags:this.state.tags,years:this.state.years}, onClick: onFilter })

  this.render = () => {}

  this.init();

  this.render();
}