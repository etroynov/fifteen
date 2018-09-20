/**
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux';

/**
 * Actions
 */

import { reset } from '../actions/game';

/**
 * Components
 */

import Overlay from './Overlay';
import Modal from './Modal';
import Button from './Button';

/**
 * Expo
 */

const SuccessDialog = ({ reset }) => (
  <Overlay>
    <Modal>
      <header>
        <h2>Вы выиграли!</h2>
        <h3>начать игру заново?</h3>
      </header>
      <footer>
        <Button onClick={reset}>да</Button>
        <Button onClick={reset}>нет</Button>
      </footer>
    </Modal>
  </Overlay>
);

export default connect(
  null,
  { reset }
)(SuccessDialog);