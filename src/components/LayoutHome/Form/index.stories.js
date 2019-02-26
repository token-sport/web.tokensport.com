import React from 'react';
import { storiesOf } from '@storybook/react'
import Form from './'

// eslint-disable-next-line react/prop-types
const Container = () => (
  <div style={{ background: '#1d2837', padding: 10, display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
    <Form />
  </div >
)


storiesOf('Home', module).add('Form', () => <Container />)
