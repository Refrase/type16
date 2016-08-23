// Babel

import 'babel-polyfill';

// Libraries

import React from 'react';
import configureStore from './redux/store';
import routes from './routes';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import firebase from 'firebase';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

// Firebase

const firebaseConfig = {
  apiKey: 'AIzaSyB21xxKnOrkVTJUX3DX4oVlOVLngbVCV5U',
  authDomain: 'type16-4b4eb.firebaseapp.com',
  databaseURL: 'https://type16-4b4eb.firebaseio.com',
  storageBucket: 'type16-4b4eb.appspot.com',
};
firebase.initializeApp(firebaseConfig);

// Sync Redux state with React Router

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={ store }>
    <Router
      onUpdate={() => window.scrollTo(0, 0)}
      history={ history }
      routes={ routes } />
  </Provider>, document.getElementById('app')
);
