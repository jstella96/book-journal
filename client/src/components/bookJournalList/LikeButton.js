

export default function LikeButton({$target, initialState={} }){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "book-journal-list__like"
  
  /* 이름 종속되게 짓지 말기 */
  this.state = {

  }
  //this.state = initialState


  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    this.render()
  }
  
  this.render = () => {
    this.$element.innerHTML = `
      <div>
        <img src="src/assets/images/like.png">
      </div>
      <span>36</span>
    `
    $target.appendChild(this.$element)
  }

  this.render()
}
