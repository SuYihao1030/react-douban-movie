import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  list: [],
  total: 0,
  start: 0
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_NOW_MOVIE_LIST:
      return state.merge({
        list: state.get('list').concat(action.list),
        total: action.total,
        start: action.start
      })
    default:
      return state;
  }
}