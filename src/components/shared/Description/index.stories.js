import React from 'react'
import { storiesOf } from '@storybook/react'

import Description from './'

// eslint-disable-next-line react/prop-types
const Container = ({ children, size }) => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <Description size={size}>{children}</Description>
  </div>
)

storiesOf('Description', module)
  .add('large', () => <Container size="md">Es la primer Dapp (aplicación descentralizada) que permite a los
  usuarios compartir sus emociones en los deportes y por medio de tecnología BlockChain,
  tokenizar sus datos.</Container>)
  .add('medium', () => <Container size="sm">La primer Dapp que le da valor a tus emociones.
  ¡Haz llover Tokens!</Container>)
  .add('small', () => <Container size="xsm">A diferencia de las redes sociales, nosotros sabemos
  lo mucho que vale tu interacción en internet y por eso te devolvemos con creces todas las emociones
  que compartes con nosotros. ¡Todo porque te lo mereces!</Container>)

