
export default function Search({$target, initialState={}, onChange}){
  
  this.$element = document.createElement('div'); 
  this.$element.className = "search"
  
  this.state = initialState

  $target.appendChild(this.$element)

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }
  
  this.render = () => {
    this.$element.innerHTML = `
      <span class="search__icon">
        <img src="src/assets/images/search.png" >
      </span>
      <form>
        <input class="search__input" type="text" value="${this.state}">
      </form>
    `
  }

  let debounce = null;
  this.$element.addEventListener('keyup', (e) => {
    const actionIgnoreKeys = ['Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    if(!actionIgnoreKeys.includes(e.key)){
      if(!onChange) return;
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        onChange(e.target.value)
      }, 50);
    }
  })

  this.$element.addEventListener('submit',(e)=>{
    e.preventDefault();
  })
  
  this.render()
}
