
export default function YearFilter({$target, initialState={}, onClick}){
  
  this.$element = document.createElement('div'); 
  this.$element.className = "side-filter__year"
  

  this.state = {
    years: initialState.years ? initialState.years : [],
    selectedIndex: 0
  }

  $target.appendChild(this.$element)

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    this.render()
  }
  
  this.render = () => {

    let {years,  selectedIndex} = this.state

    const yearTemplate = years.map( (year,index) => `
        <li data-index="${index}" class="side-filter__button ${index ==  selectedIndex ? 'side-filter__button--selected' : ''}">
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
        const {index} = $li.dataset
        this.setState({selectedIndex: index})
        const {years, selectedIndex} = this.state
        onClick({year: years[selectedIndex]});
      }
  })
  
  this.render()
}
