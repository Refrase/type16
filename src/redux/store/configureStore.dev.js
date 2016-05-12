// Lib

import createLogger from 'redux-logger';
import DevTools from './../components/DevTools';
import rootReducer from './../rootReducer';
import { applyMiddleware, compose, createStore } from 'redux';

// Export

export default function configureStore(initialState) {

  const createStoreWithMiddleware = compose(
    applyMiddleware(createLogger()),
    DevTools.instrument()
  );

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);

  if (module.hot) {

    // Enable Webpack hot module replacement for reducers

    module.hot.accept(rootReducer, () => {

      const nextRootReducer = rootReducer; // this was 'require(rootReducer)'

      store.replaceReducer(nextRootReducer);

    });

  }

  return store;

}
