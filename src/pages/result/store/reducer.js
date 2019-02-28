import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  list: [],
  title: '搜索结果'
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_MOVIE:
      return state.merge({
        list: action.list,
        title: action.title
      });
    case actionTypes.CLEAR_SEARCH_INFO:
      return state.merge({
        title: '搜索结果',
        list: []
      });
    default:
      return state;
  }
}