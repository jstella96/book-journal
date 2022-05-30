
export default function Search({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "search"
  
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
        <span class="search__icon">
          <img src="src/assets/images/search.png" >
        </span>
        <form>
          <input class="search__input">
        </form>
    `
  }
  
  this.render()
}
