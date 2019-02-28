import React from 'react';

// COMPONENTS
import InfoPercent from 'components/shared/InfoPercent';
import Title from 'components/shared/Title';

// STYLES
import { TokenDistContainer, TokenDistSection } from './styles';

// FIXTURES
import { TOKENDIST } from 'fixture/';

const TokenDist = () => <TokenDistSection>
  <Title size="xlg" bold="700" color="white" margin="0 0 100px 0">Distribución de Tokens</Title>
  <TokenDistContainer>
    {
      TOKENDIST.map((token, index) =>
        <InfoPercent 
          key={index}
          color={token.color}
          percent={token.percent}>{ token.description }</InfoPercent>)
    }
  </TokenDistContainer>
</TokenDistSection>

export default TokenDist;
