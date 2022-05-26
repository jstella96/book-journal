
export default function Sort({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "side-filter__sort"
  
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
   
    <h3 class="side-filter__title">정렬기준</h3>
    <ul>
      <li class="side-filter__button side-filter__button--selected">
          <span class="side-filter__name">작성날짜</span>
      </li>
      <li class="side-filter__button">
          <span class="side-filter__name">좋아요</span>
     </li>
    </ul>
 
    `
  }
  
  this.render()
}
