
export default function BookTag({$target, initialState = {}, onChange}){
    
    this.$element = document.createElement('div'); 
    this.$element.className = ""
    
    this.state = {
      tags: initialState.tags ? initialState.tags : [],
      selectedIds: initialState.selectedIds ? initialState.selectedIds:[]
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
    
      const {tags,  selectedIds} = this.state
      const tagTemplate = tags.map( (tag,index) => 
          `
          <li data-index="${index}" class="tag ${selectedIds.includes(tag._id) ? 'tag--selected' : ''}">
            <span class="tag__name"># ${tag.name}</span>
          </li>
          `
      ).join('')
      this.$element.innerHTML = `
        <h3 class="side-filter__title">태그</h3>
        <ul>${tagTemplate}</ul>
      `
    }
  
    this.$element.addEventListener('click',(e)=>{
      const $li = e.target.closest('.tag')
        if ($li) {
          let {index} =  $li.dataset 
          index = parseInt(index)
          let {selectedIds, tags} = this.state
          const id = tags[index]._id
          if(selectedIds.includes(id)){
            selectedIds = selectedIds.filter(function(item) {
              return item !== id
            })
          }else{
            selectedIds.push(id)
          }
          this.setState({selectedIds : selectedIds})
          onChange({tags:selectedIds});
        }
    })
    this.render()
  }
  