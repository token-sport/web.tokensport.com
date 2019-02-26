import React from 'react'
import { storiesOf } from '@storybook/react';

import LangItem from './';

// eslint-disable-next-line react/prop-types
const Container = ({ src, name }) => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <LangItem src={src} name={name} />
  </div>
);

storiesOf('LangItem', module)
  .add('default', () => <Container src='https://images.unsplash.com/photo-1494419470281-65c2b001a42b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80' name='EN'/>);