
export default function MainHeader({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "header main-header"
  
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
      <h1 class="main-header__title">
        BOOK JOURNAL
      </h2>
      <button class="main-header__button">추가</button>
      <label class="switch-button"> 
        <input type="checkbox"/> 
        <span class="switch-button__onoff"></span> 
      </label>
    `
  }
  
  this.render()
}
