/**
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux';

/**
 * Components
 */

import Tile from './components/Tile';
import Board from './components/Board';
import Group from './components/Group';
import Button from './components/Button';

/**
 * Actions
 */

import { rollbackMove , moveTile, slove, reset } from './actions/game';

/**
 * Const
 */

import { GAP, TILE_SIZE } from './config';

/**
 * Expo
 */

const App = ({
  game: {
    size,
    grid,
    tiles,
    history,
    coordinates,
  },

  reset,
  slove,
  moveTile,
  rollbackMove,
}) => (
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
          onClick={moveTile.bind(this, [index, coordinates])}
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
    <Group>
      <Button onClick={slove}>Slove</Button>
      <Button onClick={reset}>Reset</Button>
      <Button onClick={rollbackMove} disabled={!history}>previos</Button>
    </Group>
  </section>
);

const mapStateToPros = ({ game }) => ({ game });
const mapDispatchToProps = {
  slove,
  reset,
  moveTile,
  rollbackMove,
};

export default connect(
  mapStateToPros,
  mapDispatchToProps,
)(App);