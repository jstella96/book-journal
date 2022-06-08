
export default function BookQuote({$target, initialState = {}, onChange}){
  
  this.$element = document.createElement('div'); 
  this.$element.className = "book-quote"
  
  this.state = {
    quotes:  initialState.quotes ? initialState.quotes : []
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
    const { quotes } = this.state;
    if(quotes.length == 0) quotes.push({content:"",page:""})
     this.$element.innerHTML = `
      <h3>문구 스크랩</h3>
      <div class="long-card book-quote__scrap">
        <button class="book-quote__button">
          <img src="src/assets/images/plus.png" />
        </button>
        <div class="book-quote__list">
            ${quotes.map((quote,index) => 
            `
            <div class="book-quote__content">
              <blockquote>
                <div data-idx="${index}" class="book-quote__text"  contenteditable="true" spellcheck="false">${quote.content ? quote.content : ''}</div>
              </blockquote>
              <span>&mdash; <cite data-idx="${index}" contenteditable="true" spellcheck="false"  placeholder="page" class="book-quote__page">${quote.page ? quote.page : '' }</cite></span>
              <div class="book-quote__delete" data-idx="${index}" >삭제<img src="src/assets/images/trash-can-gray.png" /></div>
            </div>
            `
            ).join('')}
        </div>
      </div>  
    `
  }
  
  this.$element.addEventListener('click',(e)=>{

    const $plusButton = e.target.closest('.book-quote__button')
    if($plusButton){
      this.state.quotes.push({content:"",page:""})
      this.render();
    }

    const $delButton = e.target.closest('.book-quote__delete')
    if($delButton){
      const {idx} = $delButton.dataset 
      const quotes = [ ...this.state.quotes]
      quotes.splice(idx, 1);
      this.setState({quotes:quotes})
      onChange({quotes: this.state.quotes})
    }
  })

  this.$element.addEventListener('keyup', e => {
    const $text = e.target.closest(".book-quote__text")
    if($text){
      const {idx} = e.target.dataset 
      this.state.quotes[idx].content=$text.innerHTML
    }
    const $page = e.target.closest(".book-quote__page")
    if($page){
      const {idx} = e.target.dataset 
      this.state.quotes[idx].page=$page.innerHTML
    }
    onChange({quotes: this.state.quotes})
  })
  
  this.render()
}
