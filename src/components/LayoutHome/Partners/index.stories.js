import React from 'react'
import { storiesOf } from '@storybook/react';

import Partners from './'

const Container = () => (
  <div style={{ background: '#1d2837', padding: 10, display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
    <Partners />
  </div >
)

storiesOf('Home', module).add('Partners', () => <Container />)