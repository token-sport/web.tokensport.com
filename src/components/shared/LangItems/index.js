import React from 'react';
import { array } from 'prop-types';

// COMPONENTS
import LangItem from 'components/shared/LangItem';

// STYLES
import LangItemsContainer from './styles';

const LangItems = ({ languages }) => <LangItemsContainer>
  {
    languages.map((language) =>
      <LangItem key={ language.name } src={language.src} name={language.name}/>)
  }
</LangItemsContainer>

LangItems.propTypes = {
  languages: array
}

export default LangItems;
