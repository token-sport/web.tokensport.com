import React from 'react'
import { storiesOf } from '@storybook/react';
import SecondaryInfo from './'
import { WordsColor } from '../styles'

// eslint-disable-next-line react/prop-types
const Container = () => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <SecondaryInfo
      title={<span>¿Qué rayos es <WordsColor color="neonBlue">Token Sport?</WordsColor></span>}
      description={<span>Es la primer Dapp (aplicación descentralizada) que permite a los usuarios compartir sus emociones en los deportes y por medio de tecnología BlockChain, tokenizar sus datos.</span>}
    />
  </div>
)

storiesOf('Home', module).add('SecondaryInfo', () => <Container />)