/*!
 * Vendor
 */

import { createReducer } from 'redux-act';

/*!
 * Actions
 */

import {
  requestReset,
  receiveReset,

  requestSlove,
  receiveSlove,

  receiveMoveTile,
  requestMoveTile,
} from '../actions/board';


/*!
 * Init state
 */

const initialState = {
  data: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, null],
  ],
};

/*!
 * Expo
 */

const board = createReducer(
  {
    // RESET BOARD
    [requestReset]: (state ) => ({ ...state, loading: true }),
    [receiveReset]: (state, payload) => ({
      ...state,
      data: payload,
      loading: false,
    }),

    // SLOVE BOARD
    [requestSlove]: (state) => ({
      ...state,
      loading: true,
    }),
    [receiveSlove]: (state, payload) => ({
      data: [...state.data, payload],
      loading: false,
    }),
  },
  initialState,
);

export default board;