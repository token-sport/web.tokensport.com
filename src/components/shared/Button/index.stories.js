import React from 'react'
import { storiesOf } from '@storybook/react';
import Button from './'

// eslint-disable-next-line react/prop-types
const Container = ({ children, transparent, small }) => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <Button transparent={transparent} text={children} small={small} />
  </div>
)


storiesOf('Buttons', module)
  .add('default', () => <Container>Tokenizar</Container>)
  .add('transparent', () => <Container transparent>White paper</Container>)
  .add('small', () => <Container small>Unirte</Container>)