/**
 * Vendor
 */

import styled from 'styled-components';

/**
 * Expo
 */

const Tile = styled.section`
  position: absolute;
  display: block;

  top: ${ ({ coordinates: { x }}) => x }px;
  left: ${ ({ coordinates: { y }}) => y }px;
  
  width: ${ ({ size }) => size }px;
  height: ${ ({ size }) => size }px;

  text-align: center;
  line-height: ${ ({ size }) => size }px;

  font-size: ${ ({ index }) => index ? '32px' : '0' };
  font-family: 'Paprika', sans;

  background: ${ ({ index }) => index ? '#ffffa5' : '#97b59d' };
  border-radius: 5px;

  transition: ${ ({ index }) => index ? 'all ease .5s': 'none' };

  cursor: ${ ({ index }) => index ? 'pointer' : 'initial' };
  z-index: ${ ({ index }) => index};
`;

export default Tile;