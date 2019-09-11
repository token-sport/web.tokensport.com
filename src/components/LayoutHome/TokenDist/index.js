import React from 'react';
import { object } from 'prop-types';

// COMPONENTS
import InfoPercent from 'components/shared/InfoPercent';
import Title from 'components/shared/Title';

// STYLES
import { TokenDistContainer, TokenDistSection } from './styles';

const TokenDist = ({ tokenInfo }) => <TokenDistSection>
  <Title size="xlg" bold="700" color="white" margin="0 0 100px 0">{tokenInfo.title}</Title>
  <TokenDistContainer>
    {
      tokenInfo.values.map((value, index) =>
        <InfoPercent 
          key={index}
          color={value.color}
          percent={value.percent}>{ value.title }</InfoPercent>)
    }
  </TokenDistContainer>
</TokenDistSection>

TokenDist.propTypes = {
  tokenInfo: object
}

export default TokenDist;
