import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  list: [],
  title: '搜索结果',
  total: 0,
  start: 0
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_MOVIE:
      return state.merge({
        list: state.get('list').concat(action.list),
        title: action.title,
        total: action.total,
        start: action.start
      });
    case actionTypes.CLEAR_SEARCH_INFO:
      return defaultState;
    default:
      return state;
  }
}