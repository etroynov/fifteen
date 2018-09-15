/**
 * Vendor
 */

import * as React from 'react';
import { render } from 'react-dom';

/**
 * Components
 */

import App from './App';

/**
 * Utils
 */

import registerServiceWorker from './registerServiceWorker';

/**
 * Init
 */

render(
  <App />,
  document.body,
);

registerServiceWorker();
