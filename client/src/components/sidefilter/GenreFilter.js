
export default function MainHeader({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "side-filter__genre"
  
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
    <h3 class="title">장르</h3>
    <ul>
      <li class="box">
        <span class="name">ALL</span>
        <span class="count">32</span>
      </li>
      <li class="box">
          <span class="name">철학</span>
          <span class="count">32</span>
      </li>
      <li class="box">
        <span class="name">인문학</span>
        <span class="count">32</span>
     </li>
      <li class="box">
        <span class="name">소설</span>
        <span class="count">32</span>
      </li>
      <li class="box">
        <span class="name">경제</span>
        <span class="count">32</span>
      </li>
      <li class="box">
        <span class="name">과학</span>
        <span class="count">32</span>
      </li>
      <li class="box">
        <span class="name">에세이</span>
        <span class="count">32</span>
      </li>
    </ul>
    `
  }
  
  this.render()
}
