import { combineReducers } from 'redux';
import { sortBy } from 'lodash';
import { getMoviesById } from './moviesById';

import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  SAVE_MOVIE_SUCCESS,
  FETCH_WATCHLIST,
  FETCH_WATCHLIST_SUCCESS,
  FETCH_CREDITS_SUCCESS,
  FETCH_CREDITS,
  FETCH_RECOMMENDATIONS_SUCCESS,
  FETCH_RECOMMENDATIONS,
  REMOVE_MOVIE_SUCCESS
} from '../actions/types';


const updateMovieCredits = (state, credits) => {
  const cast = sortBy(credits.cast, 'order').slice(0, 5);
  const crew = sortBy(credits.crew, 'order').slice(0, 5);
  return { ...state, cast, crew };
};

const updateMovieRecs = (state, movies) => {
  const nextState = { ...state };
  const recommendations = movies.map((movie) => movie.id);
  return { ...nextState, recommendations };
};

export const byId = (state = {}, action) => {
  switch (action.type) {

    case FETCH_MOVIES_SUCCESS:
      return Object.assign({}, state,
        getMoviesById(state, action.movies),
      );

    case FETCH_RECOMMENDATIONS_SUCCESS:
      return {
        ...state,
        ...getMoviesById(state, action.movies),
        [action.id]: updateMovieRecs(state[action.id], action.movies)
      };

    case FETCH_WATCHLIST_SUCCESS:
      const listed = { ...action.movies };
      for (const movie in action.movies) {
        listed[parseInt(movie, 10)].inWatchlist = true;
      }
      return { ...state, ...listed };

    case SAVE_MOVIE_SUCCESS:
      const movie = { ...action.movie };
      movie.inWatchlist = true;
      return { ...state, [movie.id]: movie };
    case REMOVE_MOVIE_SUCCESS:
      return { ...state,
        [action.id]: { ...state[action.id], inWatchlist: false }
      };

    case FETCH_CREDITS_SUCCESS:
      return { ...state,
        [action.id]: updateMovieCredits(state[action.id], action.credits) };
    default:
      return state;
  }
};

const listByGenre = (state = { watchlist: {}, popular: {} }, action) => {
  const { filters, movies } = action;
  switch (action.type) {
    case FETCH_MOVIES:
      const fetchState = {};
      action.filters.forEach((filter, index) => {
        fetchState[filter] = {
          ...state[filter],
          isFetching: true
        };
      });
      return { ...state, ...fetchState };
    case FETCH_MOVIES_SUCCESS:
      const idsList = {};
      movies.forEach((movieList, index) => {
        idsList[filters[index]] = {
          ids: movieList.map((movie) => movie.id),
          isFetching: false
        };
      });
      return { ...state, ...idsList };
    case FETCH_WATCHLIST:
      return {
        ...state,
        watchlist: { ...state.watchlist, isFetching: true }
      };
    case FETCH_WATCHLIST_SUCCESS:
      let moviesObj;
      if (!action.movies) {
        moviesObj = {};
      } else {
        moviesObj = { ...action.movies };
      }
      return {
        ...state,
        watchlist: {
          ids: Object.keys(moviesObj).map((key) => parseInt(key, 10)),
          isFetching: false,
        }
      };
    default:
      return state;
  }
};



export const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return true;
    case FETCH_MOVIES_SUCCESS:
      return false;
    default:
      return state;
  }
};

const movies = combineReducers({
  byId,
  listByGenre,
  isFetching,
});

export default movies;

export const getIds = (state) => {
  if (state === undefined) {
    return [];
  }
  return state.ids;
};


export const getMoviesByGenre = (state, genre) =>
  state.movies.listByGenre[genre].ids
  .map((id) => state.movies.byId[id])
  .filter((item) => item !== undefined);


  // case REMOVE_MOVIE_SUCCESS:
  //   return {
  //     ...state,
  //     watchlist: {
  //       ...state.watchlist,
  //       ids: state.watchlist.ids.filter((item) => item.id !== action.id)
  //     }
  //   };
  // case SAVE_MOVIE_SUCCESS:
  //   return {
  //     ...state,
  //     watchlist: {
  //       ...state.watchlist,
  //       ids: [...state.watchlist.ids, parseInt(action.movie.id, 10)]
  //     }
  //   };
