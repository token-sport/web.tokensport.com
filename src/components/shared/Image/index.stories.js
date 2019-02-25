import React from 'react'
import { storiesOf } from '@storybook/react';
import Image from './'
import logo from 'assets/logo.png'

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
  .add('medium', () => <Container width="100" height="100" />)
  .add('large', () => <Container width="580" height="580" />)