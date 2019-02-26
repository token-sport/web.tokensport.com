import React from 'react'
import { storiesOf } from '@storybook/react';

import Link from './'

// eslint-disable-next-line react/prop-types
const Container = ({ text }) => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <Link path="/example">{text}</Link>
  </div>
)

storiesOf('Link', module)
  .add('default', () => <Container text="Features" />)