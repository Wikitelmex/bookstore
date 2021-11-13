import {
  ADD_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
} from './bookTypes';

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