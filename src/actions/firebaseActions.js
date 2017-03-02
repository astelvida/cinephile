import firebase from 'firebase';

import {
  SAVE_GENRES_SUCCESS,
  SAVE_MOVIE_SUCCESS,
  FETCH_WATCHLIST,
  FETCH_WATCHLIST_SUCCESS,
  REMOVE_MOVIE_SUCCESS
} from './types';

export const savePrefs = (preferences, type) => (
  (dispatch) => {
    const { currentUser } = firebase.auth();
    return firebase.database()
    .ref(`/users/${currentUser.uid}/preferences/`)
    .set({ ...preferences })
    .then(() =>
      dispatch({ type: SAVE_GENRES_SUCCESS, preferences })
    );
  }
);

export const addMovie = (movie) => (
  (dispatch) => {
    const { currentUser } = firebase.auth();
    return firebase.database()
    .ref(`/users/${currentUser.uid}/watchlist/${movie.id}`)
    .set({ ...movie })
    .then(() =>
      dispatch({ type: SAVE_MOVIE_SUCCESS, movie })
    );
  }
);

export const getWatchlist = () => (
  (dispatch) => {
    dispatch({ type: FETCH_WATCHLIST });
    const { currentUser } = firebase.auth();
    return firebase.database()
    .ref(`/users/${currentUser.uid}/watchlist`)
    .on('value', (snapshot) => {
      dispatch({
        type: FETCH_WATCHLIST_SUCCESS,
        movies: snapshot.val(),
        category: 'watchlist'
      });
    });
  }
);

export const removeMovie = (id, idx) => (dispatch) => {
  const { currentUser } = firebase.auth();
  console.log("in action", id, idx)
  return firebase.database()
  .ref(`/users/${currentUser.uid}/watchlist/${id}`)
  .remove()
  .then(() => {
    console.log("REMOVED");
    dispatch({
      type: REMOVE_MOVIE_SUCCESS,
      id,
      idx,
    });
  });
};
