/**
 * Vendor
 */

import styled from 'styled-components';

/**
 * Expo
 */

const Overlay = styled.section`
  position: absolute;
  display: block;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, .4);
  z-index: 100;
`;

export default Overlay;