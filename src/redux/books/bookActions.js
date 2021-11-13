import axios from 'axios';
import {
  ADD_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from './bookTypes';

const { v4: uuidv4 } = require('uuid');

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});

export const editBook = (book) => ({
  type: EDIT_BOOK,
  payload: book,
});

const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const fetchBooks = () => (dispatch) => {
  dispatch(fetchBooksRequest());
  axios
    .get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tWvsQfKC3XVVADHFaURP/books/')
    .then((response) => {
      const apiResponse = response.data;
      const arrayApiResponse = Object.keys(apiResponse).map((key) => ({ ...apiResponse[key][0], item_id: key, author: 'Alex' }));
      dispatch(fetchBooksSuccess(arrayApiResponse));
    })
    .catch((error) => {
      dispatch(fetchBooksFailure(error));
    });
};

export const httpRequestDeleteBook = (id) => (dispatch) => {
  axios
    .delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tWvsQfKC3XVVADHFaURP/books/${id}`)
    .then(() => {
      dispatch(deleteBook(id));
    });
};

export const httpRequestAddBook = (book) => (dispatch) => {
  const newBook = { ...book, item_id: uuidv4() };
  axios
    .post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tWvsQfKC3XVVADHFaURP/books/', newBook)
    .then(() => {
      dispatch(addBook({ ...newBook, author: 'Alex' }));
    });
};
