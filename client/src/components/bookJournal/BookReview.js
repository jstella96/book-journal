
export default function BookReview({$target, initialState={}, onChange}){
  
  this.$element = document.createElement('div'); 
  this.$element.className = "book-review"
  
  this.state = {
    review: ""
  }

  $target.appendChild(this.$element)

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    this.render()
  }
  
  this.render = () => {
    const {review} = this.state
    this.$element.innerHTML = `
      <h3>소감</h3>
      <div class="long-card book-review__content" spellcheck="false" contenteditable="true" >${review ? review : ''}</div>
    `
  }
  this.$element.addEventListener('keyup', e => {
    const $text = e.target.closest('.book-review__content')
    if($text){
      const review = e.target.innerHTML
      onChange({review:review})
    }
  })
  this.render()
}
