/*
point!
1. fetch는 반복적으로 사용되기 때문에 기본 구조를 만들고 필요시 호출하여 사용한다.
2. 필요한 페이지 혹은 컴포넌트에서 request를 호출 하는 방법도 있으나(밑에 주석). 요청api따로 관리하는 것도 좋다.
*/
const API_END_POINT = 'http://localhost:3010/api'//환경변수 사용하기- 추후 수정 사항 

const statusErrorFromResponse = (res) => {
  if (res.status < 300) return '';

  if (res.status < 400) {
    return `Redirects Error with status code ${res.status}`;
  }
  if (res.status < 500) {
    return `Client Error with status code ${res.status}`;
  }
  if (res.status < 600) {
    return `Server Error with status code ${res.status}`;
  }
  
  return 'Error'
};


const request = async(url, option ={ }) => {
  try{
    const fullUrl = `${API_END_POINT}${url}`
    const response = await fetch(fullUrl, option)
   
    if(response.ok){
      const json = await response.json();
      return json
    }

    const statusErrorMessage = statusErrorFromResponse(res);
    if (statusErrorMessage) throw new Error(statusErrorMessage);

  }catch(e){
    alert(`에러가 발생했습니다: ${e.message}`)
  }
}

export default request
