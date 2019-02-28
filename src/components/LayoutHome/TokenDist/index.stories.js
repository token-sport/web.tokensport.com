import React from 'react';
import { storiesOf } from '@storybook/react';

import TokenDist from './';

// eslint-disable-next-line react/prop-types
const Container = () => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <TokenDist />
  </div>
);

storiesOf('Home', module)
  .add('Token Distribution', () => <Container />)