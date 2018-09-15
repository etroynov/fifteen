/**
 * Vendor
 */

import * as React from 'react';
import range from 'lodash/range';
import shuffle from 'lodash/shuffle';

/**
 * Components
 */

import Board from './components/Board';
import Tile from './components/Tile';

/**
 * Helpers
 */

import createGrid from './helpers/createGrid';

/**
 * Initial Settings
 */

import { COL, ROW, GAP, TILE_SIZE } from './config';

/**
 * Expo
 */

class App extends React.Component {
  state = {
    tiles: range(0, COL * ROW),
    size: (TILE_SIZE * COL) + ((COL + 1) * GAP),
    grid: createGrid(COL, ROW, TILE_SIZE, GAP),
    coordinates: shuffle(range(0, COL * ROW)),
    history: []
  }

  render() {
    const { size, grid, tiles, coordinates } = this.state;

    return (
      <section>
        <Board size={size}>
          {tiles.map(
            index =>
            <Tile
              coordinates={grid[coordinates.indexOf(index)]}
              key={index}
              index={index}
              size={TILE_SIZE}
              gap={GAP}
            >{index}</Tile>
          )}
          {tiles.map(
            index =>
            <Tile
              coordinates={grid[index]}
              key={index}
              index={0}
              size={TILE_SIZE}
              gap={GAP}
            />
          )}
        </Board>
      </section>
    );
  }
}

export default App;