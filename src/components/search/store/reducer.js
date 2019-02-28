import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  searchKey: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_VALUE:
      return state.set('searchKey', action.value);
    case actionTypes.CLEAR_SEARCH_INFO:
      return state.set('searchKey', '');
    default:
      return state;
  }
}