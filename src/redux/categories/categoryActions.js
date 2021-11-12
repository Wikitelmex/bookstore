import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
} from './categoryTypes';

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: category,
});

export const deleteCategory = (id) => ({
  type: DELETE_CATEGORY,
  payload: id,
});

export const editCategory = (category) => ({
  type: EDIT_CATEGORY,
  payload: category,
});
