import React from 'react'
import { storiesOf } from '@storybook/react'

import Paragraph from './'

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ background: '#1d2837', padding: 10 }}>
    <Paragraph >{children}</Paragraph>
  </div>
)

storiesOf('Paragraph', module)
  .add('default', () => <Container >Es la primer Dapp (aplicación descentralizada) que permite a los
  usuarios compartir sus emociones en los deportes y por medio de tecnología BlockChain,
  tokenizar sus datos.</Container>)

