
export default function BookReview({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "book-review"
  
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
      <h3>소감</h3>
      <div class="long-card book-review__content" contenteditable="true" > </div>
    `
  }
  
  this.render()
}
