import React from 'react';
import { storiesOf } from '@storybook/react';

// COMPONENTS
import LangPicker from 'components/shared/LangPicker';

// FIXTURES
import { LANGUAGES } from 'fixture/';

// eslint-disable-next-line react/prop-types
const Container = ({ langs }) => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <LangPicker langs={langs}/>
  </div>
)

storiesOf('LangPicker', module)
  .add('default', () => <Container langs={LANGUAGES} />)