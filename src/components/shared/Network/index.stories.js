import React from 'react'
import { storiesOf } from '@storybook/react';

import Network from './';

import { team } from 'fixture/';

// eslint-disable-next-line react/prop-types
const Container = ({ networks }) => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <Network networks={networks} width="15px" height="15px"/>
  </div>
);

storiesOf('Networks', module)
  .add('default', () => <Container networks={team[0].networks}/>)