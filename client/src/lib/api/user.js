import request from './request.js';

export const BASE_URL = '/users';

export const getUser = async (userId)  => request(`${BASE_URL}/${userId}`)

export const putUser = async (user)  => {
    const option = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    }
    return request(`${BASE_URL}`,option)
}


export const putTag = async (tag)  => {
    const option = {
        method: 'POST', 
        body: JSON.stringify(tag),
    }
    return  request(`${BASE_URL}/${userId}/tag`,option)
}



export const deleteTag = async (userId)  => {
    const option = {
        method: 'DELETE', 
    }
    return request(`${BASE_URL}/${userId}/tag`,option)
}


export const putGenre = async (genre)  => {
    const option = {
        method: 'POST', 
        body: JSON.stringify(genre),
    }
    return request(`${BASE_URL}/${userId}/genre`,option)
}



export const deleteGenre = async (userId)  => {
    const option = {
        method: 'DELETE', 
    }
    return request(`${BASE_URL}/${userId}/genre`,option)
}
