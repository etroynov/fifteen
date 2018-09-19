/*!
 * Vendor
 */

import { createAction } from 'redux-act';

/*!
 * Expo
 */

/**
 * Save
 */


export const requestSaveMove = createAction('REQUEST_SAVE_MOVE');
export const receiveSaveMove = createAction('RECEIVE_SAVE_MOVE');


export const saveMove = data => (dispatch) => {
  dispatch(requestSaveMove());
  console.info(data);
  dispatch(receiveSaveMove(data));
};

/**
 * RollBack
 */

export const requestRollbackMove = createAction('REQUEST_ROLLBACK_MOVE');
export const receiveRollbackMove = createAction('RECEIVE_ROLLBACK_MOVE');

export const rollbackMove = () => (dispatch) => {
  dispatch(requestRollbackMove());
  dispatch(receiveRollbackMove());
}