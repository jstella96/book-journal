
export default function BookQuote({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "book-quote"
  
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
   
        <h3>문구 스크랩</h3>
        <div class="long-card book-quote__content">
          <div class="book-quote__button">
            <img src="src/assets/images/plus.png" />
          </div>
          <div class="book-quote__list">
            <div class="book-quote__text"></div>
            <div class="book-quote__text"></div>
            <div class="book-quote__text"></div>
          </div>
        </div>
     
    `
  }
  
  this.render()
}
