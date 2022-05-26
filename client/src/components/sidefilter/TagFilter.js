
export default function TagFilter({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "side-filter__tag"
  
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
 
    <h3 class="side-filter__title">태그</h3>
    <ul>
      <li class="tag">
          <span class="tag__name">소감작성</span>
      </li>
      <li class="tag">
          <span class="tag__name">추천</span>
     </li>
     <li class="tag">
      <span class="tag__name">독서모임</span>
    </li>
    </ul>

    `
  }
  
  this.render()
}
