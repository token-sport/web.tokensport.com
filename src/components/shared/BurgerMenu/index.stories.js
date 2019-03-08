import React from 'react';
import { storiesOf } from '@storybook/react';
import BurgerMenu from './';

// eslint-disable-next-line react/prop-types
const Container = () => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <BurgerMenu />
  </div>
)


storiesOf('BurgerMenu', module)
  .add('default', () => <Container></Container>)
