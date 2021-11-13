import {
  ADD_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from './bookTypes';

const initialState = {
  loading: false,
  books: [],
  error: '',
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== action.payload),
      };
    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map(
          (book) => (book.item_id === action.payload.item_id ? action.payload : book),
        ),
      };
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
        error: '',
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        books: [],
      };
    default:
      return state;
  }
};

export default bookReducer;
