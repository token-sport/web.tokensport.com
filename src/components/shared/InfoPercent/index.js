import React from 'react';
import { string } from 'prop-types';

// COMPONENTS
import Title from 'components/shared/Title';
import Description from 'components/shared/Description';

// STYLES
import InfoPercentContainer from './styles';

const InfoPercent = ({ color, percent, children }) => <InfoPercentContainer>
  <Description size="md" margin="0 0 10px 0" bold="400" color="white">{ children }</Description>
  <Title color={color} size="xlg" bold="600">{ percent }</Title>
</InfoPercentContainer>

InfoPercent.propTypes = {
  color: string,
  percent: string,
  children: string
}

export default InfoPercent;
