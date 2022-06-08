const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE"
const ROUTE_END_POINT = "/book-journal"
export const init = (onRouteChange) => {
    //1]뒤로가기 앞으로 가기 하면 발생
    window.addEventListener('popstate',onRouteChange)
    //2]window에 커스텀 이벤트 바인딩 추후 a태그가 아닌 버튼으로 렌더링을 바꿀시 필요
    window.addEventListener(ROUTE_CHANGE_EVENT, () => {
        onRouteChange() //app.js의 this.route()
    })
    //3]a 태그 클릭시 발생 [data-link] 있는 것만
    document.addEventListener("DOMContentLoaded", () => {
        document.body.addEventListener("click", e => {
            if (e.target.matches("[data-link]")) {
                e.preventDefault(); //새로고침 방지
                routeChange(e.target.href); //클릭 타깃 으로 이동
            }
        });
    });
}

export const routeChange = (url, params) => {
  const nextURL = `${ROUTE_END_POINT}${url}`
  history.pushState(null,null,nextURL)//
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params))
} 