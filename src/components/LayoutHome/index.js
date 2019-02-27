import React from 'react'

// COMPONENTS
import Header from './Header';
import SecondaryInfo from './SecondaryInfo';

// STYLES
import { Container, WordsColor } from './styles';

const LayoutHome = () => (
  <Container>
    <Header />
    <SecondaryInfo
      title={<span>¿Qué rayos es <WordsColor color="neonBlue">Token Sport?</WordsColor></span>}
      description={<span>Es la primer Dapp (aplicación descentralizada) que permite a los usuarios compartir sus emociones en los deportes y por medio de tecnología BlockChain, tokenizar sus datos.</span>}
    />
  </Container>
)

export default LayoutHome;