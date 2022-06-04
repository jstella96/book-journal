
export default function GenreFilter({ $target, initialState = {}, onClick}){

  this.$element = document.createElement('div'); 
  this.$element.className = "side-filter__genre"

  this.state = {
    genres: initialState.genres ? initialState.genres : [],
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
    const {genres,  selectedIndex} = this.state
    console.log(this.state)
    const genreTemplate = genres.map( (genre,index) => 
        `
        <li class="side-filter__button ${index ==  selectedIndex ? 'side-filter__button--selected' : ''}">
          <span class="side-filter__name">${genre.name}</span>
          <span class="side-filter__count">${genre.count}</span>
        </li>
        `
    ).join('')
    this.$element.innerHTML = `
      <h3 class="side-filter__title">장르</h3>
      <ul>${genreTemplate}</ul>
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
