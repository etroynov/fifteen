/*!
 * Vendor
 */

import { createReducer } from 'redux-act';

/*!
 * Actions
 */

import {
  requestSaveMove,
  receiveSaveMove,

  requestRollbackMove,
  receiveRollbackMove,
} from '../actions/history';


/*!
 * Init state
 */

const initialState = {
  fetch: false,
  data: [],
};

/*!
 * Expo
 */

const history = createReducer(
  {
    // SAVE BOARD
    [requestSaveMove]: (state ) => ({ ...state, fetch: true }),
    [receiveSaveMove]: (state, payload) => ({
      data: [...state.data, payload],
      fetch: false,
    }),

    // ROLLBACK MOVE
    [requestRollbackMove]: (state) => ({
      ...state,
      fetch: true,
    }),
    [receiveRollbackMove]: (state) => ({
      data: state.data.slice(0, state.data.length),
      fetch: false,
    }),
  },
  initialState,
);

export default history;