import request from './request.js';

export const BASE_URL = '/book';

export const getBookList = async (filePath)  => request(`${BASE_URL}/${filePath}`)
