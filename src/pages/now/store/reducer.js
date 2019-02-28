import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  list: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_NOW_MOVIE_LIST:
      return state.set('list', action.list)
    default:
      return state;
  }
}