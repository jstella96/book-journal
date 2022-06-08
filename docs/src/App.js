
import Main from "./pages/Main.js"
import BookJournal from "./pages/BookJournal.js"

import {init} from './lib/route/route.js'
import {getParams, pathToRegex} from './utils/utils.js'

import {setItem} from './utils/localStorage.js'
import request from './lib/demo-api/request.js'
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

  const setApiforDemo = async () => {
    const bookJournals = await request('/book-journal.json')
    const user = await request('/user.json')
    setItem('api-book-journals',bookJournals)
    setItem('api-user',user)
  }
  setApiforDemo();
  init(this.route)

 // alert('이 페이지는 바닐라 자바스크립트로  SPA 만들기 연습을 위해 만든 샘플 페이지 입니다. back-end , db와는 연동이 아직은 연동이 되어 있지 않으며(구현중) 기본기능만(정렬, 추가, 검색) 구현한 페이지 입니다. 나중에 완성되면 구경오세요')
  this.route() 
}