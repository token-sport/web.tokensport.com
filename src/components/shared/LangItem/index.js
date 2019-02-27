import React from 'react';
import { string, func } from 'prop-types';

// COMPONENTS
import LangItemContainer from './styles';
import Image from 'components/shared/Image';
import Description from 'components/shared/Description';

const LangItem = ({ src, name, handleClickLang }) =>
  <LangItemContainer onClick={() => handleClickLang(name, src)}>
    <Image src={src} alt={name} width="20px" height="20px"/>
    <Description margin="1px 0 0 8px" size="xxsm">{ name }</Description>
  </LangItemContainer>

LangItem.propTypes = {
  src: string,
  name: string,
  handleClickLang: func
}

export default LangItem;
