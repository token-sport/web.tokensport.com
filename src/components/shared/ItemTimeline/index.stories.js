import React from 'react'
import { storiesOf } from '@storybook/react';

import ItemTimeline from './'

// eslint-disable-next-line react/prop-types
const Container = ({ color, isSelected }) => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <ItemTimeline color={color} isSelected={isSelected}/>
  </div>
)

storiesOf('ItemTimeline', module)
  .add('unselected', () => <Container color="neonOrange" />)
  .add('selected', () => <Container color="neonBlue" isSelected/>)