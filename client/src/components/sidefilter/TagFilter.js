
export default function TagFilter({$target, initialState={}, onClick}){
  
  this.$element = document.createElement('div'); 
  this.$element.className = "side-filter__tag"

  this.state = {
    tags: initialState.tags ? initialState.tags : [],
    selectedTags: []
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
    const {tags,  selectedTags} = this.state
    const tagTemplate = tags.map( tag => 
        `
        <li data-id="${tag._id}" class="side-filter__button ${selectedTags.includes(tag._id) ? 'side-filter__button--selected' : ''}">
          <span>#${tag.name}</span>
        </li>
        `
    ).join('')
    this.$element.innerHTML = `
      <h3 class="side-filter__title">태그</h3>
      <ul>${tagTemplate}</ul>
    `
  }

  this.$element.addEventListener('click',(e)=>{
    const $li = e.target.closest('li')
      if ($li) {
        const {id} = $li.dataset
        let {selectedTags} = this.state
        if(selectedTags.includes(id)){
          selectedTags = selectedTags.filter(  tag => tag !== id )
        }else{
          selectedTags.push(id)
        }
        this.setState({selectedTags : selectedTags})
        onClick({tags:selectedTags});
      }
  })
  
  this.render()
}
