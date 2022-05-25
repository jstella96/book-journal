// import MainHeader from "../components/header/MainHeader.js"
// import BookJournalList from "../components/bookJournalList/BookJournalList.js"
// import Filter from "../components/filter/Filter.js"
// import { getBookList } from "../lib/api/book.js";
export default function Main({$target}){
//[필수] 
const $page = document.createElement('div');
$page.className = "main-page"

this.state = {}

this.setState = nextState => {
  this.state = nextState
  this.render()
}

this.render = () => {
  //2] 넣을 div 먼저 만들고 
  this.$element.innerHTML = `<div class="grid-container"></div>`
  
  //3] 쿼리 셀렉터로 해당 태그에 생성 - 자식한텐 클래스가 없을수도 특별한 조건 없으면 div로 만들어라
  selectedOptions = new SelectedOptions({ 
    $target: $productDetail.querySelector('.grid-container'), //위에 집중
    initialState: {
      product: this.state.product,
      selectedOptions: this.state.selectedOptions
    }    
  })

}

this.render = () => {
  $target.appendChild($page)
}

this.render();
}