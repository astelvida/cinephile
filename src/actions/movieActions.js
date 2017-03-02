import axios from 'axios';
import { Promise } from 'bluebird';
import {
  RECEIVE_GENRES_SUCCESS,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_CREDITS,
  FETCH_CREDITS_SUCCESS,
  FETCH_CREDITS_ERROR,
  FETCH_RECOMMENDATIONS_SUCCESS,
  FETCH_RECOMMENDATIONS
} from './types';

import genres from '../genres';
import { API_KEY, BASE_URL } from '../config/API_config';

export const getGenres = () => ({
  type: RECEIVE_GENRES_SUCCESS,
  genres
});

const receiveMovies = (movies, filters) => ({
  type: FETCH_MOVIES_SUCCESS,
  movies,
  filters,
});


export const getCredits = (id) =>
  (dispatch) => {
    dispatch({ type: FETCH_CREDITS, id });
    return axios.get(`${BASE_URL}/movie/${id}/credits${API_KEY}`)
      .then((resp) => dispatch({
        type: FETCH_CREDITS_SUCCESS,
        id,
        credits: resp.data,
      }));
  };

export const getRecommendations = (id) =>
  (dispatch) => {
    dispatch({ type: FETCH_RECOMMENDATIONS, id });
    return axios.get(`${BASE_URL}/movie/${id}/recommendations${API_KEY}`)
      .then((resp) => dispatch({
        type: FETCH_RECOMMENDATIONS_SUCCESS,
        id,
        movies: resp.data.results,
      }));
  };

export const getInitialData = () => (dispatch) => {
  dispatch({ type: FETCH_MOVIES, filters: genres.map((genre) => genre.id) });
  return Promise.map(genres, (genre) =>
    axios.get(`${BASE_URL}/discover/movie${API_KEY}&language\
      =en-US&sort_by=popularity.desc&with_genres=${genre.id}&\
      page=1&vote_average.gte=7`)
      .then((resp) => resp.data.results))
      .then((movies) =>
        dispatch(receiveMovies(movies, genres.map((genre) => genre.id)))
      );
};

export const getByCategory = (filters) =>
  (dispatch) => {
    dispatch({ type: FETCH_MOVIES, filters });
    return axios.get(`${BASE_URL}/discover/movie${API_KEY}&sort_by=popularity.desc`)
      .then((resp) => dispatch(receiveMovies([resp.data.results], filters)));
  };
