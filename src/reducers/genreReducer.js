import {
  RECEIVE_ERROR,
  RECEIVE_GENRES_SUCCESS,
  REQUEST_GENRES,
} from '../actions/types';

const INITIAL_STATE = {
  byId: {},
  allIds: [],
  error: null,
  isFetching: false,
};

const getById = (state = {}, list) => {
  const nextState = { ...state };
  list.forEach((genre) =>
    nextState[genre.id] = genre
  );
  return nextState;
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_GENRES:
      return { ...state, isFetching: true };
    case RECEIVE_GENRES_SUCCESS:
      return {
        ...state,
        byId: getById(state.byId, action.genres),
        allIds: action.genres.map((genre) => genre.id),
        isFetching: false
      };
    case RECEIVE_ERROR:
      return { ...state, isFetching: false, error: 'Bummer!' };
    default:
      return state;
  }
};
//
