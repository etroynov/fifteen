/**
 * Vendor
 */

import styled from 'styled-components';

/**
 * Expo
 */

const Board = styled.section`
  position: absolute;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  margin: auto;

  width: ${({ size })=> size}px;
  height: ${({ size })=> size}px;

  background-color: #acceb3;
  border-radius: 10px;
`;

export default Board;