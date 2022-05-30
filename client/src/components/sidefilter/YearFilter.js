
export default function YearFilter({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "side-filter__year"
  
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
 
    <h3 class="side-filter__title">작성년도</h3>
    <ul>
      <li class="side-filter__button">
          <span class="side-filter__name">2022</span>
          <span class="side-filter__count">32</span>
      </li>
      <li class="side-filter__button">
        <span class="side-filter__name">2022</span>
        <span class="side-filter__count">32</span>
      </li>
    </ul>

    `
  }
  
  this.render()
}
