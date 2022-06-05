
export default function BookDetail({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "book-detail"
  
  /* 이름 종속되게 짓지 말기 */
  this.state = {

  }
  //this.state = initialState
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
      <img class="book-detail__cover" src="http://image.yes24.com/goods/74261416/XL"></img>
      <div class="book-detail__content">
        <h2 class="book-detail__title">우리가 빛의 속도로 갈 수 있다면</h2>
        <div class="book-detail__text">출판사: <div class="contenteditable inline" spellcheck="false" contenteditable>북클럽 </div> </div >
        <div class="book-detail__text">작가: <div class="contenteditable inline"  spellcheck="false" contenteditable> 로베르트 발저 </div></div >
        <div class="book-detail__text">읽은날짜: <div class="contenteditable inline" spellcheck="false" contenteditable>2022-03-05</div> </div >
        <div class="book-detail__text">장르: <div class="contenteditable inline" spellcheck="false" contenteditable> 소설 </div> </div >
      
      </div>
 
    `
  }
  
  this.render()
}
