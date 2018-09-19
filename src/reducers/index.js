/**
 * Vendor
 */

import { combineReducers } from 'redux';

/**
 * Reducers
 */

import board from './board';
import history from './history';

/**
 * Expo
 */

export default combineReducers({
  board,
  history,
});