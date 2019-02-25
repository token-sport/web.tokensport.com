import React from 'react'
import { storiesOf } from '@storybook/react';
import MainInfo from './'

// eslint-disable-next-line react/prop-types
const Container = () => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <MainInfo />
  </div>
)

storiesOf('Home', module).add('MainInfo', () => <Container />)