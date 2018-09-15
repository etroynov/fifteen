/**
 * Vendor
 */

import range from 'lodash/range';

/**
 * Expo
 */

export default (col, row, tileSize, gap) => range(0, 16).map(n => ({
  x: (Math.floor(n / row) * (tileSize + gap)) + gap,
  y: ((n % col) * (tileSize + gap)) + gap,
}));
