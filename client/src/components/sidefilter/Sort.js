
export default function MainHeader({$target, initialState={}, onEvent}){
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
   
    <h3 class="title">정렬기준</h3>
    <ul>
      <li class="box sort--selected">
          <span class="name">작성날짜</span>
      </li>
      <li class="box">
          <span class="name">좋아요</span>
     </li>
    </ul>
 
    `
  }
  
  this.render()
}
