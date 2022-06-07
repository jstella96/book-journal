import SideFilter from "../components/sidefilter/SideFilter.js"
import MainHeader  from "../components/header/MainHeader.js"
import BookJournalList from "../components/bookJournalList/BookJournalList.js"
import Search from "../components/search/Search.js"
import {getItem,setItem} from "../utils/localStorage.js"
import {getUser, deleteGenre, deleteTag, putGenre, putTag} from "../lib/api/user.js"
import {getBookJournals, deleteBookJournal, getBookJournal, putBookJournal, updateBookJournal} from "../lib/api/bookjournal.js"

export default function Main({$target}){
   
  const $page = document.createElement('div');
  $page.className = "main-page"

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
    const years = this.groupByYear(bookJournals);
    const genres = this.countByGenre(user.genres,bookJournals);

    setItem("user",user)
    setItem("genres",  genres)
    setItem("bookJournals",  bookJournals)
    setItem("userId", 'guest')
    this.setState({genres:genres,tags:user.tags,years:years,bookJournals:bookJournals})

    onFilter({sort:{value:"date"}})
  }
  
  this.countByGenre = ( userGenres , bookJournals ) => {
    let genres = [...userGenres]
    const map = new Map();
    
    genres.map(genre => {
      map.set( genre._id ,0)
    })

    bookJournals.map(bookJournal => { 
      if(bookJournal.genre){
        const genreId = bookJournal.genre
        if(map.has(genreId))
          map.set(genreId, map.get(genreId)+1)
        }
      }
    )
    genres = genres.map( genre => { return { ...genre, ...{ count : map.get(genre._id) } }} )
    const all = {name:"ALL", count: bookJournals.length , _id: 'all'}
    genres = [ all, ...genres]
    return genres
  }

  this.groupByYear = (objectArray) => {
    let group = objectArray.reduce(function (acc, obj) {
      const date = obj['date']
      const year = new Date(date).getFullYear();
      if (!acc["ALL"]) {
        acc["ALL"] = 0;
      }
      if (!acc[year]) {
        acc[year] = 0;
      }
      acc["ALL"] = acc["ALL"] +1;
      acc[year] = acc[year] +1;

      return acc;
    }, {});
    
    group = Object.entries(group);
    group = group.map( item => { return {name: item[0] , count: item[1] } })
    group.sort( (a, b) => {
      if(a.name < b.name) return 1;
      if(a.name > b.name) return -1;
      if(a.name === b.name) return 0;
      else return 1;
    })

    return group;
  }


  $page.innerHTML = '<div class="grid-header"></div>'
  const mainHeader =  new MainHeader({$target:$page.querySelector('.grid-header')})

  $page.innerHTML += `<div class="grid-container"></div>`
  const search = new Search({$target:$page.querySelector('.grid-container'), initialState:"", onChange: (keyword) => {this.setState({keyword:keyword})} }) 
  const bookJournalList = new BookJournalList({$target:$page.querySelector('.grid-container'),initialState: {
    bookJournals : this.state.bookJournals
  }});


  const onFilter= (nextFilter) => {
    const filter = {
      ...this.state.filter,
      ...nextFilter
    }
    this.setState({filter:filter})
    const keys = Object.keys(filter);
    let originBookJornals = getItem('bookJournals');
    keys.forEach(key => {
      originBookJornals = filterFounction[key](originBookJornals, filter[key])
    })
    this.setState({bookJournals:originBookJornals})
  }

  const filterFounction = {
    'genre' : (items, genre) => {
      return items.filter( item => genre._id === 'all' || item.genre === genre._id )
    },
    'year' : (items, year) => {
      return items.filter( item => year.name === 'ALL' || new Date(item.date).getFullYear() === parseInt(year.name) )
    },
    'tag' : (items, tags) => {
      return items.filter( item => tags.length === 0  || item.tags.filter( tag => tags.includes(tag)) > 0 )
    },
    'sort': (items, sortBy) => {
      const value = sortBy.value
      items.sort( (a, b) => {
        if(a[value]< b[value]) return 1;
        if(a[value]> b[value]) return -1;
        if(a[value]=== b[value]) return 0;
        else return 1;
      })
      return items;
    }
  }  
  
  new BookJournalList({$target:$page.querySelector('.grid-container'),initialState: {} });

  const sideFilter =new SideFilter({$target:$page.querySelector('.grid-container'),initialState:{genres:this.state.genres,tags:this.state.tags,years:this.state.years}, onClick: onFilter })


  $target.appendChild($page)

  this.render = () => {


  }


  this.init();

  this.render();
}