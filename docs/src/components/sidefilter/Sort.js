
export default function Sort({$target, initialState={}, onClick}){

  this.$element = document.createElement('div'); 
  this.$element.className = "side-filter__sort"
  
  this.state = {
    sort: initialState.sort ? initialState.sort : [],
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
    const { sort,  selectedIndex} = this.state
    const sortTemplate = sort.map( (sortBy,index) =>  `
      <li data-index="${index}" class="side-filter__button ${index ==  selectedIndex ? 'side-filter__button--selected' : ''}">
        <span class="side-filter__name">${sortBy.name}</span>
      </li>
      `
    ).join('')
    this.$element.innerHTML = `
      <h3 class="side-filter__title">정렬기준</h3>
      <ul>${sortTemplate}</ul>
    `
  }

  this.$element.addEventListener('click',(e)=>{
    const $li = e.target.closest('li')
    if ($li) {
      const {index} = $li.dataset
      this.setState({selectedIndex: index})
      const {sort, selectedIndex} = this.state
      onClick({sort: sort[selectedIndex]});
    }
  })


  this.render()
}
