export default function  BOOK({$target}){
  //[필수] 
  const $page = document.createElement('div');
  $page.className = "BookJournal"
  $page.innerHTML = `
    <div id="Header">
      <div class="back">
        < BACK
      </div>
      <button class="bookSearch"> 책검색</button>
      <label class="switch-button"> 
        <input type="checkbox"/> 
        <span class="onoff-switch"></span> 
      </label>
    </div>
    <div id="BookJournal">
      <div class="Book__card">
        <img class="bookCover" src="http://image.yes24.com/goods/74261416/XL"></img>
        <div class="content">
          <h2 class="title">우리가 빛의 속도로 갈 수 있다면</h2>
          <div  class="info">출판사: 북클럽 | 작가: 로베르트 발저 </div >
          <div class="info">읽은날짜: 2022-03-05 | 장르: 소설 </div >
          <div class="tag">
            <ul>
              <li class="box-tag">
                  <span class="name">소감작성</span>
              </li>
              <li class="box-tag">
                  <span class="name">추천</span>
            </li>
            <li class="box-tag">
              <span class="name">독서모임</span>
            </li>
            </ul>
          </div>
        </div>
      </div>

    <div class="Review">
      <h3>소감</h3>
      <div class="longCard content"> </div>
    </div>
    <div class="Quote">
      <h3>문구 스크랩</h3>
      <div class="longCard content">
        <div class="plusBtn">
          <img src="plus.png" />
        </div>
        <div class="quoteList">
          <div class="quote"></div>
          <div class="quote"></div>
          <div class="quote"></div>
        </div>
      </div>
    </div>` // 생략가능

  this.state = {}

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $target.appendChild($page)
  }
 
  this.render();
 
  
}