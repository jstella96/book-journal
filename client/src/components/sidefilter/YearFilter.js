
export default function YearFilter({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "side-filter__year"
  
  /* 이름 종속되게 짓지 말기 */
  this.state = {
    years: initialState.years ? initialState.years : [],
    selectedIndex: 0
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

    const {years,  selectedIndex} = this.state
    const yearTemplate = years.map( (year,index) => 
        `
        <li class="side-filter__button ${index ==  selectedIndex ? 'side-filter__button--selected' : ''}">
          <span class="side-filter__name">${year.name}</span>
          <span class="side-filter__count">${year.count}</span>
        </li>
        `
    ).join('')
    this.$element.innerHTML = `
      <h3 class="side-filter__title">작성년도</h3>
      <ul>${yearTemplate}</ul>
    `
  }

  this.$element.addEventListener('click',(e)=>{
    const $li = e.target.closest('li')
      if ($li) {
        const {genres, selectedIndex} = this.state
        onClick(genres[selectedIndex]);
      }
  })
  
  this.render()
}
