
export default function MyComponentBase({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "book-journal-list__card"
  
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
    <span class="book-journal-list__date">2021-02-18</span>
    <img class="book-journal-list__img" src="http://image.yes24.com/goods/74261416/XL"></img>
    <div class="book-journal-list__content">
      <h3 class="book-journal-list__title">우리가 빛의 속도로 갈 수 있다면</h5>
      <p class="book-journal-list__review">한줄 평이 있다면 작성하세요</p>
      <div class="book-journal-list__tag"><ul><li> #태그</li> <li> #태그</li></ul></div>
    </div>
    
    `
    //여기서 하트버튼 렌더
  }
  
  this.render()
}
