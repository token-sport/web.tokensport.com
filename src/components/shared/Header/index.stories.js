import React from 'react';
import { storiesOf } from '@storybook/react';

// COMPONENTS
import Header from 'components/LayoutHome/Header';

const Container = () => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <Header />
  </div>
)

storiesOf('Home', module).add('Header', () => <Container />)