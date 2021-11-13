import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import bookReducer from './books/bookReducer';
import categoryReducer from './categories/categoryReducer';

const mixReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

const store = createStore(
  mixReducer,
  applyMiddleware(logger, thunk),
);

export default store;
