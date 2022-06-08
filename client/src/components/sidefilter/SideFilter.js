import GenreFilter from "./GenreFilter.js";
import Sort from "./Sort.js";
import TagFilter from "./TagFilter.js";
import YearFilter from "./YearFilter.js";

export default function SideFilter({$target, initialState={}, onClick}){
  this.$element = document.createElement('div'); 
  this.$element.className = "side-filter"
  
  this.state = {
    genres : initialState.genres? initialState.genres : [] ,
    years:  initialState.years?initialState.years: [],
    tags: initialState.tags?initialState.tags: [],
    sort: [{name:"작성날짜",value:"date"},{name:"좋아요",value:"likeCount"}]
  }
  
  const genreFilter = new GenreFilter({$target: this.$element, initialState : {genres:this.state.genres}, onClick: onClick});
  const yearFilter = new YearFilter({$target: this.$element,initialState : {years:this.state.years}, onClick: onClick});
  const tagFilter = new TagFilter({$target: this.$element, initialState : {tags:this.state.tags}, onClick: onClick});
  const sort = new Sort({$target: this.$element, initialState : {sort: this.state.sort}, onClick: onClick});
  
  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    genreFilter.setState({genres:this.state.genres})
    yearFilter.setState({years:this.state.years})
    tagFilter.setState({tags:this.state.tags})
    this.render()
  }
  
  this.render = () => {
    $target.appendChild(this.$element)
  }
  
  this.render()
}
