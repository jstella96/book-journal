
import Main from "./pages/Main.js"
import BookJournal from "./pages/BookJournal.js"

import {init} from './lib/route/route.js'
import {getParams, pathToRegex} from './utils/utils.js'

const cache = {}

export default function App({$target}){

  this.route = () => {
    $target.innerHTML = ''
    const routes = [
      {
        path:"/",
        page: Main
      },
      {
        path:"/bookjournal",
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
       alert('존재하지 않는 페이지 입니다')
    }
    const param = getParams(match)
    new match.route.page({$target, ...param})
  }

  init(this.route)
  this.route() 
}