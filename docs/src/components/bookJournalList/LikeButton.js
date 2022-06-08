
import {getItem} from "../../utils/localStorage.js"
export default function LikeButton({$target, initialState}){
  
  this.$element = document.createElement('div'); 
  
  this.state = {
    likeCount: initialState.likeCount ? initialState.likeCount : 0,
    likeUsers : initialState.likeUsers ? initialState.likeUsers:  []
  }

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
    this.render()
  }
  
  this.render = () => {
    const { likeCount ,likeUsers} = this.state;
    const userId = getItem("userId")
    this.$element.innerHTML = `
    <div class="book-journal-list__like">
      <div>
        <img src="${likeUsers.includes(userId)? 'src/assets/images/like.png' : 'src/assets/images/like-g.png' }">
      </div>
      <span>${ likeCount }</span>
    </div>
    `
    $target.appendChild(this.$element)
  }
  this.$element.addEventListener('click',(e)=>{
    const $item = e.target.closest('.book-journal-list__like')
    if ($item) {
      const userId = getItem("userId")
      let { likeUsers } = this.state
       if( likeUsers.includes(userId)){
        likeUsers = likeUsers.filter(item => item !== userId)
       }else{
        likeUsers.push(userId)
       }
      this.setState({likeUsers:likeUsers, likeCount:likeUsers.length});
      e.preventDefault();
      return;
    }
  });
  this.render()
}
