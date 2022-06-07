
export default function BookQuote({$target, initialState={}, onChange}){
  
  this.$element = document.createElement('div'); 
  this.$element.className = "book-quote"
  

  this.state = {
    quotes : [{content:""}],
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
    const {quotes} = this.state;
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
              <div class="book-quote__delete" data-idx="${index}" >삭제</div>
              <div class="book-quote__text" data-idx="${index}" spellcheck="false" contenteditable="true">
                ${quote.content}
              </div>
              <div class="book-quote__page"  spellcheck="false" contenteditable="true" placeholder='-본문위치'></div>
              </div>
              `
             ).join('')}
          </div>
       
        </div>
     
    `
  }
  
  
  this.$element.addEventListener('click',(e)=>{
    const $button = e.target.closest('.book-quote__button')
    if($button){
      this.state.quotes.push({content:""})
      this.render();
    }
    const $delButton = e.target.closest('.book-quote__delete')
    if($delButton){
      
      const {idx} = $delButton
      const quotes = [ ...this.state.quotes]
      quotes.splice(idx, 1);
      this.setState({quotes:quotes})
    }
  })

  this.$element.addEventListener('keyup', e => {
    const $text = e.target.closest('.book-quote__text')
    if($text){
      const {idx} = e.target.dataset //위에서 저장
      this.state.quotes[idx].content=e.target.innerHTML
    }
    onChange({quotes: this.state.quotes})
  })
  
  this.render()
}
