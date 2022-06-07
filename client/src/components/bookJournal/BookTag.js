
export default function BookTag({$target, initialState={}, onChange}){
    
    this.$element = document.createElement('div'); 
    this.$element.className = ""
    
  
    this.state = {
      tags: initialState.tags ? initialState.tags : [{name:"좋아용"}],
      selectedId: []
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
    
      const {tags,  selectedId} = this.state
      const tagTemplate = tags.map( (tag,index) => 
          `
          <li data-idx="${index}" class="tag ${selectedId.includes(tag._id) ? 'tag--selected' : ''}">
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
      const $li = e.target.closest('.tag')
        if ($li) {
          let {idx} =  $li.dataset 
          idx = parseInt(idx)
          let {selectedId, tags} = this.state
          const id = tags[idx]._id
          if(selectedId.includes(id)){
            selectedId = selectedId.filter(function(item) {
              return item !== id
            })
          }else{
            selectedId.push(id)
          }
          this.setState({selectedId : selectedId})
          onChange({tags:selectedId});
        }
    })
    this.render()
  }
  