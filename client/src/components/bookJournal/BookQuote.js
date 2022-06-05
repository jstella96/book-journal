
export default function BookQuote({$target, initialState={}, onEvent}){
  //[필수]
  this.$element = document.createElement('div'); 
  this.$element.className = "book-quote"
  
  /* 이름 종속되게 짓지 말기 */
  this.state = {
    quotes : [{content:"인용문1",page:"37 쪽"},{content:"인용문1"}],
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
  
  /* 클로짓으로 처리로 바꾸자.. */
  this.$element.addEventListener('click',(e)=>{
    const $button = e.target.closest('.book-quote__button')
    if($button){
      this.state.quotes.push({content:""})
      this.render();
    }
    const $delButton = e.target.closest('.book-quote__delete')
    if($delButton){
      const {idx} = e.target.dataset 
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
  })
  
  this.render()
}
