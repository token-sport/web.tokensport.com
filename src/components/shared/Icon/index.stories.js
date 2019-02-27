import React from 'react'
import { storiesOf } from '@storybook/react';
import Icon from './'

// eslint-disable-next-line react/prop-types
const Container = ({ width, height }) => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <Image
      src={logo}
      alt="logo"
      width={width}
      height={height}
    />
  </div>
)

storiesOf('Image', module)
  .add('small', () => <Container width="60" height="60" />)