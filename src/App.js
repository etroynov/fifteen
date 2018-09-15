/**
 * Vendor
 */

import * as React from 'react';

/**
 * Components
 */

import Field from './components/Field';
import Dice from './components/Dice';

/**
 * Expo
 */

class App extends React.Component {
  render() {
    return (
      <Field>
        <Dice />
      </Field>
    );
  }
}

export default App;
