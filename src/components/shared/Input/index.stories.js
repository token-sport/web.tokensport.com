import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './'

// eslint-disable-next-line react/prop-types
const Container = () => (
  <div style={{ background: '#1d2837', padding: 10, display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
    <Input label="Nombre" type="text" value="On my side" name="test" onChange={() => { }} />
  </div>
)

storiesOf('Input', module).add('default', () => <Container />)
