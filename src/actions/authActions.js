import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_START,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS
} from './types';


export const emailChanged = (email) => ({
  type: EMAIL_CHANGED,
  payload: email
});

export const passwordChanged = (password) => ({
  type: PASSWORD_CHANGED,
  payload: password
});

export const loginUserStart = (user) => ({
  type: LOGIN_USER_START,
  payload: user,
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const signupUserSuccess = (user) => ({
  type: SIGNUP_USER_SUCCESS,
  payload: user,
});


export const loginUserError = (error) => ({
  type: LOGIN_USER_ERROR,
  payload: error
});

export const loginUser = (user) => (
  (dispatch) => {
    dispatch(loginUserStart(user));
    const { email, password } = user;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((currentUser) =>
        firebase.database().ref(`/users/${currentUser.uid}/preferences`)
        .on('value', (snapshot) =>
          dispatch(loginUserSuccess({ ...user, preferences: snapshot.val() }))
        ))
      .catch((err) =>
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          dispatch(signupUserSuccess(user));
          Actions.AppSetup();
        })
      )
      .catch((error) => dispatch(loginUserError(error.message)));
  });
