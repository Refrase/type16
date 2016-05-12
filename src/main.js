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

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

// Sync Redux state with React Router

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={ store }>
    <Router
      history={ history }
      routes={ routes } />
  </Provider>, document.getElementById('app')
);
