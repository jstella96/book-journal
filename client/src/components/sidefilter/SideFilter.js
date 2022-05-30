import GenreFilter from "./GenreFilter.js";
import Sort from "./Sort.js";
import TagFilter from "./TagFilter.js";
import YearFilter from "./YearFilter.js";

export default function SideFilter({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "side-filter"
  
  /* 이름 종속되게 짓지 말기 */
  this.state = {

  }
  //this.state = initialState
  
  const genreFilter = new GenreFilter({$target: this.$element});
  const yearFilter = new YearFilter({$target: this.$element});
  const tagFilter = new TagFilter({$target: this.$element});
  const sort = new Sort({$target: this.$element});
  
  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    this.render()
  }
  
  this.render = () => {
    $target.appendChild(this.$element)
  }
  
  this.render()
}
