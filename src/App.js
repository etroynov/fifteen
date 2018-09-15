/**
 * Vendor
 */

import * as React from 'react';
import range from 'lodash/range';
import shuffle from 'lodash/shuffle';

/**
 * Components
 */

import Tile from './components/Tile';
import Board from './components/Board';
import Group from './components/Group';
import Button from './components/Button';

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

  handleReset = () => this.setState({ coordinates: shuffle(this.state.tiles) });

  handleSlove = () => {
    this.setState({
      coordinates: [...range(1, COL * ROW), 0],
    }, () => {
      this.handleCheckGrid();
    });
  }

  handleCheckGrid() {
    const { tiles, coordinates } = this.state;
  }

  handleSaveMove(coordinates) {
    this.setState({
      history: [
        ...this.state.history,
        coordinates,
      ]
    });
  }

  handleTakeMoveBack = () => {
    const { history } = this.state;
    const coordinates = history.pop();

    if (coordinates == null) { return false; }

    this.setState({
      history,
      coordinates,
    });
  }

  moveTile(index) {
    if (!index) return null;

    const { coordinates } = this.state;
    const emptyTile = coordinates.indexOf(0);
    const movedTile = coordinates.indexOf(index);
    const dif = Math.abs(movedTile - emptyTile);

    if (dif === 1 || dif === ROW) {
      const previosCoordinates = coordinates.slice(0);

      coordinates[emptyTile] = index;
      coordinates[movedTile] = 0;

      this.setState({ coordinates }, () => {
        this.handleCheckGrid();
        this.handleSaveMove(previosCoordinates);
      });
    }
  };

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
              onClick={this.moveTile.bind(this, index)}
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
          <Button onClick={this.handleSlove}>Slove</Button>
          <Button onClick={this.handleReset}>Reset</Button>
          <Button onClick={this.handleTakeMoveBack}>previos</Button>
        </Group>
      </section>
    );
  }
}

export default App;