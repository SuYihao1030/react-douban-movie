import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  "title": "",
  "images": {
    "small": "",
    "large": "",
    "medium": ""
  },
  "genres": [],
  "summary": "",
  "rating": 0
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_INFO:
      return state.merge({
        title: action.title,
        images: action.images,
        genres: action.genres,
        summary: action.summary,
        rating: action.rating
      })
    case actionTypes.CLEAR_MOVIE_INFO:
      return state.merge(fromJS({
        title: "",
        images: {
          "small": "",
          "large": "",
          "medium": ""
        },
        genres: [],
        summary: "",
        rating: 0
      }))
    default:
      return state;
  }
}