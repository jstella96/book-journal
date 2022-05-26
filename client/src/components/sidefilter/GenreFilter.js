
export default function GenreFilter({$target, initialState={}, onEvent}){
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
    <h3 class="side-filter__title">장르</h3>
    <ul>
      <li class="side-filter__button">
        <span class="side-filter__name">ALL</span>
        <span class="side-filter__count">32</span>
      </li>
      <li class="side-filter__button">
          <span class="side-filter__name">철학</span>
          <span class="side-filter__count">32</span>
      </li>
      <li class="side-filter__button">
        <span class="side-filter__name">인문학</span>
        <span class="side-filter__count">32</span>
     </li>
      <li class="side-filter__button">
        <span class="side-filter__name">소설</span>
        <span class="side-filter__count">32</span>
      </li>
      <li class="side-filter__button">
        <span class="side-filter__name">경제</span>
        <span class="side-filter__count">32</span>
      </li>
      <li class="side-filter__button">
        <span class="side-filter__name">과학</span>
        <span class="side-filter__count">32</span>
      </li>
      <li class="side-filter__button">
        <span class="side-filter__name">에세이</span>
        <span class="side-filter__count">32</span>
      </li>
    </ul>
    `
  }
  
  this.render()
}
