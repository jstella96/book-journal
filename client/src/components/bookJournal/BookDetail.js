
export default function BookDetail({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "book-detail"
  
  /* 이름 종속되게 짓지 말기 */
  this.state = {
    publisher:"",
    author:"",
    createdAt: null,
    selectedGenreId: "",
    genres:[]
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
    const {genres} = this.state
    console.log("asd");
    console.log(genres);
    this.$element.innerHTML = `
      <img class="book-detail__cover" src="http://image.yes24.com/goods/74261416/XL"></img>
      <div class="book-detail__content">
        <h2 class="book-detail__title">우리가 빛의 속도로 갈 수 있다면</h2>
        <div class="book-detail__text">출판사: <div class="book-detail__info inline" data-model="publisher"   spellcheck="false" contenteditable="true">북클럽 </div> </div >
        <div class="book-detail__text">작가: <div class="book-detail__info inline"  data-model="author"    spellcheck="false" contenteditable="true"> 로베르트 발저 </div></div >
        <div class="book-detail__text">읽은날짜: <div class="book-detail__info inline" data-model="createdAt" spellcheck="false" contenteditable="true">2022-03-05</div> </div >
        <div class="book-detail__text">장르:  
          <select class="book-detail__info inline"  data-model="genre" >
          ${genres.map((genre, index)=>
            `<option value="${genre._id}">${genre.name}</option>`
          ).join('')}
          </select>
        </div >
      
      </div>
 
    `
  }
  
  this.$element.addEventListener('keyup', e => {
    const $text = e.target.closest('.book-detail__info')
    if($text){
      const {model} = e.target.dataset //위에서 저장
      this.state.quotes[idx].content=e.target.innerHTML
    }
    onChange(this.state.quotes)
  })

  this.render()
}
