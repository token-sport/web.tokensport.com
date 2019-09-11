import React from 'react';
import { array, func } from 'prop-types';

// COMPONENTS
import LangItem from 'components/shared/LangItem';

// STYLES
import LangItemsContainer from './styles';

const LangItems = ({ languages, handleClickLang }) => {
  return <LangItemsContainer>
    {
      languages.map((language) =>
        <LangItem 
          key={language.name}
          src={language.src}
          name={language.name}
          handleClickLang={handleClickLang}
        />)
    }
  </LangItemsContainer>
}

LangItems.propTypes = {
  languages: array,
  handleClickLang: func
}

export default LangItems;
