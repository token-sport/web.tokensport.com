import React from 'react';
import { storiesOf } from '@storybook/react';

// COMPONENTS
import LangPicker from 'components/shared/LangPicker';

// import arrow from 'assets/arrow@2px.png';

// eslint-disable-next-line react/prop-types
const Container = () => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <LangPicker />
  </div>
)

storiesOf('LangPicker', module)
  .add('default', () => <Container />)