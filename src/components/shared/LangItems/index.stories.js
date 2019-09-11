import React from 'react'
import { storiesOf } from '@storybook/react';

import LangItems from './';

// eslint-disable-next-line react/prop-types
const Container = ({ languages }) => (
  <div style={{ width: '120px', position: 'relative', background: '#1d2837', padding: 10 }}>
    <LangItems languages={ languages }/>
  </div>
);

storiesOf('LangItems', module)
  .add('default', () => <Container languages={[
    { src: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FSpain-flag%402x.png?alt=media&token=868ff8a7-0afd-4532-9f6f-f237042aab38', name: 'ES' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FEnglish-flag%402x.png?alt=media&token=5da5afc1-967b-46fd-b83e-4c4b6f286560', name: 'EN' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FDutch-flag%402x.png?alt=media&token=34436d8f-347a-495c-9f67-71fbee701b7d', name: 'NLD' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FFrench-flag%402x.png?alt=media&token=185a032c-632b-402c-af87-c6eb2dcd5aa2', name: 'FR' }
  ]}/>);
