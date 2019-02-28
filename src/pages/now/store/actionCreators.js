import * as actionTypes from './actionTypes';
import Axios from 'axios';
import { fromJS } from 'immutable';

const getNowMovieAction = (data) => ({
  type: actionTypes.GET_NOW_MOVIE_LIST,
  list: fromJS(data.subjects)
})

export const getNowMovie = () => (dispatch) => {
  Axios.get("/movie/in_theaters?start=0&count=10").then((res) => {
    console.log(res.data);
    dispatch(getNowMovieAction(res.data));
  }).catch((err) => {
    console.error(err);
  })
}