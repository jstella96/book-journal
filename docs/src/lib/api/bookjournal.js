import request from './request.js';

export const BASE_URL = '/book-journals';

export const getBookJournal = async (bookJournalId)  => request(`${BASE_URL}/${bookJournalId}`)

export const getBookJournals = async (userId)  => request(`${BASE_URL}?userId=${userId}`)

export const putBookJournal = async (bookJournal)  => {
    const option = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookJournal),
    }
    return request(`${BASE_URL}`,option)
}

export const deleteBookJournal = async (bookJournalId) => {
    const option = {
        method: 'DELETE', 
    }
    return request(`${BASE_URL}/${bookJournalId}`,option)
}

export const updateBookJournal = async (bookJournalId,bookJournal)  => {
    const option = {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(bookJournal),
    }
    return request(`${BASE_URL}/${bookJournalId}`,option)
}
