import React from 'react';
import { string, func, bool } from 'prop-types';

// COMPONENTS
import LangItemContainer from './styles';
import Image from 'components/shared/Image';
import Description from 'components/shared/Description';

const LangItem = ({ src, name, handleClickLang, isSelected }) =>
  <LangItemContainer onClick={() => handleClickLang(name, src)} isSelected={isSelected}>
    <Image src={src} alt={name} width="20px" height="20px"/>
    <Description margin="5px 0 0 8px" size="xxsm">{ name }</Description>
  </LangItemContainer>

LangItem.propTypes = {
  src: string,
  name: string,
  handleClickLang: func,
  isSelected: bool
}

export default LangItem;
