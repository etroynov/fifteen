/*!
 * Vendor
 */

import range from 'lodash/range';
import shuffle from 'lodash/shuffle';

import { createReducer } from 'redux-act';

/**
 * Helpers
 */

import createGrid from '../helpers/createGrid';

/**
 * Initial Settings
 */

import { COL, ROW, GAP, TILE_SIZE } from '../config';

/*!
 * Actions
 */

import {
  requestReset,
  receiveReset,

  requestSlove,
  receiveSlove,

  requestMoveTile,
  receiveMoveTile,

  requestRollbackMove,
  receiveRollbackMove,
} from '../actions/game';

/*!
 * Init state
 */

const initialState = {
  fetch: false,
  tiles: range(0, COL * ROW),
  size: (TILE_SIZE * COL) + ((COL + 1) * GAP),
  grid: createGrid(COL, ROW, TILE_SIZE, GAP),
  coordinates: shuffle(range(0, COL * ROW)),
  history: []
};

/*!
 * Expo
 */

const board = createReducer(
  {
    // RESET BOARD
    [requestReset]: state => ({ ...state, loading: true }),
    [receiveReset]: state => ({
      ...state,
      coordinates: shuffle(state.tiles),
      fetch: false,
    }),

    // MOVE TILE
    [requestMoveTile]: state => ({ ...state, fetch: true }),
    [receiveMoveTile]: (state, { coordinates, previousState }) => ({
      ...state,
      coordinates,
      history: [
        ...state.history,
        previousState,
      ],
      fetch: false,
    }),

    // ROLLBACK MOVE
    [requestRollbackMove]: state => ({
      ...state,
      fetch: true,
    }),
    [receiveRollbackMove]: state => {
      if (!state.history.length) { return state; }

      const { history } = state;
      const coordinates = history.pop();

      return {
        ...state,
        history,
        coordinates,
        fetch: false,
      };
    },

    // SLOVE BOARD
    [requestSlove]: state => ({
      ...state,
      fetch: true,
    }),
    [receiveSlove]: (state, payload) => ({
      ...state,
      coordinates: payload,
      fetch: false,
    }),
  },
  initialState,
);

export default board;