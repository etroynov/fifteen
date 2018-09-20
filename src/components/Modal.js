/**
 * Vendor
 */

import styled from 'styled-components';

/**
 * Components
 */

import Overlay from './Overlay';

/**
 * Expo
 */

const Modal = styled.section`
  position: absolute;
  display: block;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 400px;
  height: 200px;

  margin: auto;

  text-align: center;

  background-color: #acceb3;
  border-radius: 5px;
  z-index: 10;
`;

export default Modal;