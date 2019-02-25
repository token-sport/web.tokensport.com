import React from 'react'
import { storiesOf } from '@storybook/react';
import InfoUser from './'

// eslint-disable-next-line react/prop-types
const Container = () => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <InfoUser
      image="https://images.unsplash.com/photo-1516755946694-1985faebe07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      name="Esteban Aragón"
      profession="Fullstack Developer"
      country="Colombia"
    />
  </div>
)

storiesOf('Home', module).add('InfoUser', () => <Container />)