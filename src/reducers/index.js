import { combineReducers } from 'redux';
import { uniq } from 'lodash';

import genres from './genreReducer';
import movies, { getIds } from './moviesReducer';
import auth from './authReducer';
import selectedTab from './tabReducer';

export default combineReducers({
  auth,
  genres,
  movies,
  selectedTab,
});

export const getMoviesList= (state, prefs, watchlist) => {
  const ids = uniq(prefs
  .map((pref) => getIds(state.movies.listByGenre[pref]))
  .reduce((acc, curr) => {
    return acc.concat(curr);
  }, []));
  return ids.map((id) => state.movies.byId[id])
  .filter((movie) => movie !== undefined);
};
