
import Main from "./pages/Main.js"
import BookJournal from "./pages/BookJournal.js"

import {init , routeChange} from './lib/route/route.js'
import {getParams, pathToRegex} from './utils/utils.js'

import {setItem} from './utils/localStorage.js'
import request from './lib/demo-api/request.js'

export default function App({$target}){

  this.route = () => {
    $target.innerHTML = ''
    const routes = [
      {
        path:"/book-journal/",
        page: Main
      },
      {
        path:"/book-journal/bookjournal",
        page: BookJournal
      }
    ]

    const potentialMatches = routes.map(route => {
      return {
        route: route,
        result: location.pathname.match(pathToRegex(route.path)) // result로 변경하고 정규식과 일치하는 pathname을 담는다
      };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);
  
    if (!match) {
       match = {
         route: routes[0],
         result: [location.pathname]
       }
    }
    const param = getParams(match)
    new match.route.page({$target, ...param})
  }

  const setApiforDemo = async () => {
    const bookJournals = await request('/book-journal.json')
    const user = await request('/user.json')
    setItem('api-book-journals',bookJournals)
    setItem('api-user',user)
  }
  
  (async() => { await setApiforDemo()})();

  init(this.route)
  this.route();
  routeChange('/')
}