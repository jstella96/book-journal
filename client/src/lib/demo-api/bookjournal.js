/* 기존 코드를 그대로 사용하기위해 api를 localStorage를 이용해 같은 기능을 구현합니다.*/
import {getItem, setItem} from "../../utils/localStorage.js"
import request from './request.js';

export const getBookJournal = async (bookJournalId)  => {
    const bookJournals = getItem('api-book-journals'); 
    const bookJournal = bookJournals.find( book => bookJournalId == String(book._id))
    return bookJournal
}

export const getBookJournals = async (userId)  => {
    return getItem('api-book-journals')
}

export const putBookJournal = async ()  => {
    const bookJournals = getItem('api-book-journals');
    const bookJournal = await request("/new-book-journal.json")
    bookJournal._id = Date.now();
    bookJournal.date = new Date();
    const nextBookJournals = [...bookJournals]
    nextBookJournals.push(bookJournal)
    setItem('api-book-journals',nextBookJournals);
    return bookJournal
}

export const deleteBookJournal = async (bookJournalId) => {

    const bookJournals = getItem('api-book-journals');
    const nextBookJournals = bookJournals.filter( bookJournal => String(bookJournal._id) !== bookJournalId);
    setItem('api-book-journals',nextBookJournals);

}

export const updateBookJournal = async (bookJournalId, nextBookJournal)  => {
    const bookJournals = getItem('api-book-journals');
    const nextBookJournals = bookJournals.map( bookJournal => 
        bookJournal._id == bookJournalId ? nextBookJournal : bookJournal
    )
    setItem('api-book-journals',nextBookJournals);
}
