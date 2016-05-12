// Lib

import { combineReducers } from 'redux';

// Routes reducer

import { routerReducer } from 'react-router-redux';

// Reducers

import uiMenu from 'ducks/ui/menu';

// Combine reducers

const rootReducer = combineReducers({

  routing: routerReducer,
  ui: combineReducers({
    menu: uiMenu,
  }),

});

// Export all

export default rootReducer;
