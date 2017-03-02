import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import config from './config/firebase_config';
import Router from './Router';
import store from './Store';
import * as actions from './actions';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
