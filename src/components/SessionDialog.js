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

const SessionDialog = ({ reset }) => (
  <Overlay>
    <Modal>
      <header>
        <h2>У вас есть сохраненая игра загрузить ее?</h2>
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
)(SessionDialog);