
export default function BookTag({$target, initialState={}, onClick,onChange}){
    //[필수]
    this.$element = document.createElement('div'); 
    this.$element.className = ""
    
    /* 이름 종속되게 짓지 말기 */
    this.state = {
      tags: initialState.tags ? initialState.tags : [{name:"좋아용"}],
      selectedIndex: []
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
    
      const {tags,  selectedIndex} = this.state
      const tagTemplate = tags.map( (tag,index) => 
          `
          <li class="tag ${selectedIndex.includes(index) ? 'tag--selected' : ''}">
            <span class="tag__name">${tag.name}</span>
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
          const {genres, selectedIndex} = this.state
          onClick(selectedIndex);
        }
    })
    this.render()
  }
  