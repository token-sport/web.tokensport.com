import React from 'react'
import { storiesOf } from '@storybook/react';
import OffCanvasMenu from './'

// eslint-disable-next-line react/prop-types
const Container = () => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <OffCanvasMenu />
  </div>
)


storiesOf('OffCanvasMenu', module)
  .add('default', () => <Container></Container>)
