import React from 'react'
import { storiesOf } from '@storybook/react';

import Links from './';

// eslint-disable-next-line react/prop-types
const Container = ({ arrLink, isColumn }) => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <Links arrLink={ arrLink } isColumn={ isColumn }/>
  </div>
);

storiesOf('Links', module)
  .add('Row', () => <Container arrLink={[
    { name: 'Features', path: '#features' },
    { name: 'Roadmap', path: '#roadmap' },
    { name: 'Dream Team', path: '#dreamteam' }
  ]}/>)
  .add('Column', () => <Container isColumn arrLink={[
    { name: 'Features', path: '#features' },
    { name: 'Roadmap', path: '#roadmap' },
    { name: 'Dream Team', path: '#dreamteam' }
  ]}/>);
