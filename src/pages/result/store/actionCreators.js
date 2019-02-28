import * as actionTypes from './actionTypes';
import Axios from 'axios';
import { fromJS } from 'immutable';

export const searchAction = (data) => ({
  type: actionTypes.SEARCH_MOVIE,
  list: fromJS(data.subjects),
  title: data.title
})

export const searchMovie = (value) => (dispatch) => {
  Axios.get("/movie/search?q=" + value +"&start=0&count=10").then((res) => {
    console.log(res.data);
    dispatch(searchAction(res.data));
  }).catch((err) => {
    console.error(err);
  })
}

export const clearSearchInfo = () => ({
  type: actionTypes.CLEAR_SEARCH_INFO
})