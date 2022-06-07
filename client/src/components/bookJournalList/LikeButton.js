

export default function LikeButton({$target, initialState={} }){
  
  this.$element = document.createElement('div'); 
  this.$element.className = "book-journal-list__like"
  
  this.state = {

  }

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
