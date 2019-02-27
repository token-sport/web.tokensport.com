import React from 'react'
import { storiesOf } from '@storybook/react';

import LangItems from './';

// eslint-disable-next-line react/prop-types
const Container = ({ languages }) => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <LangItems languages={ languages }/>
  </div>
);

storiesOf('LangItems', module)
  .add('default', () => <Container languages={[
    { src: 'https://images.unsplash.com/photo-1494419470281-65c2b001a42b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80', name: 'ES' },
    { src: 'https://images.unsplash.com/photo-1494419470281-65c2b001a42b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80', name: 'EN' },
    { src: 'https://images.unsplash.com/photo-1494419470281-65c2b001a42b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80', name: 'NLD' },
    { src: 'https://images.unsplash.com/photo-1494419470281-65c2b001a42b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80', name: 'FR' }
  ]}/>);
