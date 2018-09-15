/**
 * Vendor
 */

import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
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
  composeWithDevTools(),
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
