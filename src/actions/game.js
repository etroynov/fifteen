/*!
 * Vendor
 */

import range from 'lodash/range';

import { createAction } from 'redux-act';

/*!
 * Const
 */

import { ROW, COL } from '../config';

/*!
 * Expo
 */

/**
 * RESET
 */


export const requestReset = createAction('REQUEST_RESET');
export const receiveReset = createAction('RECEIVE_RESET');


export const reset = () => dispatch => {
  dispatch(requestReset());
  return dispatch(receiveReset());
};

/**
 * SLOVE
 */

export const requestSlove = createAction('REQUEST_SLOVE');
export const receiveSlove = createAction('RECEIVE_SLOVE');

export const slove = () => dispatch => {
  dispatch(requestSlove());
  dispatch(receiveSlove([...range(1, COL * ROW), 0]));
};

/**
 * MOVE TILE
 */

export const requestMoveTile = createAction('REQUEST_MOVE_TILE');
export const receiveMoveTile = createAction('RECEIVE_MOVE_TILE');

export const moveTile = data => dispatch => {
  dispatch(requestMoveTile());

  const [ index, coordinates ] = data;
  const emptyTile = coordinates.indexOf(0);
  const movedTile = coordinates.indexOf(index);
  const dif = Math.abs(movedTile - emptyTile);

  if (dif === 1 || dif === ROW) {
    const previousState = coordinates.slice(0);

    coordinates[emptyTile] = index;
    coordinates[movedTile] = 0;

    return dispatch(receiveMoveTile({
      coordinates,
      previousState,
    }));
  }
};

/**
 * ROLLBACK
 */

export const requestRollbackMove = createAction('REQUEST_ROLLBACK_MOVE');
export const receiveRollbackMove = createAction('RECEIVE_ROLLBACK_MOVE');

export const rollbackMove = () => dispatch => {
  dispatch(requestRollbackMove());
  return dispatch(receiveRollbackMove());
}