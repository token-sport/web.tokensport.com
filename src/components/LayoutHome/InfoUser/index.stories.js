import React from 'react'
import { storiesOf } from '@storybook/react';
import InfoUser from './'

// FIXTURE
import { team } from 'fixture/';

// eslint-disable-next-line react/prop-types
const Container = () => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <InfoUser
      image={team[0].photo}
      name={team[0].name}
      profession={team[0].profession}
      country={team[0].country}
      networks={team[0].networks}
    />
  </div>
)

storiesOf('Home', module).add('InfoUser', () => <Container />)