import { combineReducers } from 'redux';
import bookReducer from './books/bookReducer';
import categoryReducer from './categories/categoryReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

export default rootReducer;
