import * as actionTypes from './actionTypes';
import Axios from 'axios';
import { fromJS } from 'immutable';

const getMovieInfoAction = (data) => ({
  type: actionTypes.GET_MOVIE_INFO,
  title: fromJS(data.title),
  images: fromJS(data.images),
  genres: fromJS(data.genres),
  summary: fromJS(data.summary),
  rating: fromJS(data.rating.average)
})

export const getMovieInfo = (id) => (dispatch) => {
  Axios.get("/movie/subject/" + id ).then((res) => {
    console.log(res.data);
    dispatch(getMovieInfoAction(res.data));
  }).catch((err) => {
    console.error(err);
  })
}

export const clearMovieInfo = () => ({
  type: actionTypes.CLEAR_MOVIE_INFO
})