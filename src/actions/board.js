/*!
 * Vendor
 */

import { createAction } from 'redux-act';

/*!
 * Expo
 */

/**
 * Reset
 */


export const requestReset = createAction('REQUEST_RESET');
export const receiveReset = createAction('RECEIVE_RESET');


export const reset = () => (dispatch) => {
  dispatch(requestReset());
  
  dispatch(receiveReset());
};

/**
 * Slove
 */

export const requestSlove = createAction('REQUEST_SLOVE');
export const receiveSlove = createAction('RECEIVE_SLOVE');

export const slove = data => (dispatch) => {
  dispatch(requestSlove());
};

/**
 * MOVE TILE
 */

export const requestMoveTile = createAction('REQUEST_MOVE_TILE');
export const receiveMoveTile = createAction('RECEIVE_MOVE_TILE');

export const moveTile = data => (dispatch) => {
  dispatch(requestMoveTile());
};