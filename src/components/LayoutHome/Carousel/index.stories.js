import React from 'react'
import { storiesOf } from '@storybook/react';

import Carousel from './'

// eslint-disable-next-line react/prop-types
const Container = () => (
  <div style={{ background: '#1d2837', padding: 10, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Carousel />
  </div>
)

storiesOf('Home', module)
  .add('Carousel', () => <Container />)