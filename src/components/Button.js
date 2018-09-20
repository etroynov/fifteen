/**
 * Vendor
 */

import styled from 'styled-components';

/**
 * Expo
 */

const Button = styled.button`
  min-width: 100px;
  margin: 5px 20px;
  padding: 10px 20px;

  text-transform: uppercase;

  background-color: #ffffa5;
  border-radius: 2px;
  border: none;

  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer' };
`;

export default Button;