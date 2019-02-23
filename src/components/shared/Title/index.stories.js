import React from 'react'
import { storiesOf } from '@storybook/react';
import Title from './'

// eslint-disable-next-line react/prop-types
const Container = ({ children, size }) => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <Title size={size}>{children}</Title>
  </div>
)

storiesOf('Title', module)
  .add('Large', () =>
    <Container size="xlg">
      Tokeniza tus emociones
    </Container>
  )
  .add('Medium', () =>
    <Container size="lg">
      ¿Qué rayos es <span style={{ color: '#39B0E3' }}>Token Sport?</span>
    </Container>
  )
  .add('Small', () =>
    <Container size="sm">
      Aduéñate de tus datos
    </Container>
  )