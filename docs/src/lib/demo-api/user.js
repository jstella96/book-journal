/* 기존 코드를 그대로 사용하기위해 api를 localStorage를 이용해 같은 기능을 구현합니다.*/
import {getItem} from "../../utils/localStorage.js"

export const getUser = async (userId)  =>{
    return getItem('api-user')
} 
