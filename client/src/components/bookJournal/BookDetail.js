import {formatDate} from "../../utils/utils.js"
export default function BookDetail({$target, initialState = {}, onChange }){
  
  this.$element = document.createElement('div'); 
  this.$element.className = "book-detail"

  this.state = {
    form: initialState.form ? initialState.form : {},
    genres: initialState.genres ? initialState.genres : [],
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
    const {genres, form} = this.state
    this.$element.innerHTML = `
      <img class="book-detail__cover" src="${form.imagePath ? form.imagePath : 'src/assets/images/bookcover.jpg'}"></img>
      <div class="book-detail__content">
        <h2 class="book-detail__title book-detail__input" data-model="title" spellcheck="false"  placeholder="제목을 입력해주세요"  contenteditable="true">${form.title}</h2>
        <div class="book-detail__text">작가: <div class="book-detail__info   book-detail__input inline"  data-model="author" placeholder="비어있음" spellcheck="false" contenteditable="true">${form.author}</div></div >
        <div class="book-detail__text">출판사: <div class="book-detail__info  book-detail__input inline" data-model="publisher" placeholder="비어있음" spellcheck="false" contenteditable="true">${form.publisher}</div> </div >
        <div class="book-detail__text">작성날짜: <div class="book-detail__info  book-detail__input inline" data-model="date" placeholder="1990-01-01">${form.date? formatDate(form.date): ''}</div> </div >
        <div class="book-detail__text">장르:  
          <select class="book-detail__info book-detail__select inline"  data-model="genre" >
          <option value="none">(선택)</option>
          ${genres.map((genre)=>
            `<option  ${ genre._id == form.genre ? 'selected' : ''} value="${genre._id}">${genre.name}</option>`
          ).join('')}
          </select>
        </div >  
      </div>
    `
  }
  
  this.$element.addEventListener('keyup', e => {
    const $text = e.target.closest('.book-detail__input')
    if($text){
      const {model} = e.target.dataset
      this.state.form[model]=e.target.innerHTML
      onChange(this.state.form)
    }
  })

  this.$element.addEventListener('change', e => {
    const $select = e.target.closest('.book-detail__select')
    if($select){
      const {model} = e.target.dataset
      this.state.form[model]=e.target.value
      onChange(this.state.form)
    }
  })

  this.render()
}
