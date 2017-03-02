import { isEmpty }  from 'lodash';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_START,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  SAVE_GENRES_SUCCESS,
  SIGNUP_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  email: 'sevda@gmail.com',
  password: 'alabala',
  preferences: { genres: [28, 35, 18], custom: [] },
  isAuth: false,
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      const { email, password, preferences } = action.payload;
      if (isEmpty(preferences)) {
        return { ...state, email, password, loading: false, isAuth: true };
      }
      const ids = Object.keys(preferences.genres)
      .map((genre) => parseInt(genre, 10));
      return {
        ...state,
        email,
        password,
        loading: false,
        isAuth: true,
        preferences: { genres: ids }
      };
    case SIGNUP_USER_SUCCESS: {
      return { ...state, email, password, loading: false, isAuth: true };
    }
    case LOGIN_USER_ERROR:
      return { ...state, password: '', loading: false, error: action.payload };
    case SAVE_GENRES_SUCCESS:
      const { genres, custom } = action.preferences;
      if (isEmpty(genres)) {
        return state;
      }
      return { ...state, preferences: { genres: Object.keys(genres) } };
    default:
      return state;
  }
};
