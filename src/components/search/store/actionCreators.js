import * as actionTypes from './actionTypes';

export const ChangeSearchValue = (value) => ({
  type: actionTypes.CHANGE_SEARCH_VALUE,
  value
})

export const clearSearchValue = () => ({
  type: actionTypes.CLEAR_SEARCH_INFO
})