/**
 * Vendor
 */

import * as React from 'react';
import thunk from 'redux-thunk';

import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

/**
 * Components
 */

import App from './App';

/**
 * Utils
 */

import registerServiceWorker from './registerServiceWorker';

/**
 * Store
 */
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
    ),
  ),
);

/**
 * Init
 */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
