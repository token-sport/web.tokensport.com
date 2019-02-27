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
  .add('default', () => <Container src='https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FEnglish-flag%402x.png?alt=media&token=5da5afc1-967b-46fd-b83e-4c4b6f286560' name='EN'/>);