
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
        <div  class="book-detail__text">출판사: 북클럽 | 작가: 로베르트 발저 </div >
        <div class="book-detail__text">읽은날짜: 2022-03-05 | 장르: 소설 </div >
        <div class=""book-detail__tag">
          <ul>
            <li class="tag">
                <span class="name">소감작성</span>
            </li>
            <li class="tag">
              <span class="name">추천</span>
            </li>
            <li class="tag">
              <span class="tag__name">독서모임</span>
            </li>
          </ul>
        </div>
      </div>
 
    `
  }
  
  this.render()
}
