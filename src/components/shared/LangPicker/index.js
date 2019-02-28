import React, { useState } from 'react';
import { array } from 'prop-types';

// COMPONENTS
import LangItem from 'components/shared/LangItem';
import LangItems from 'components/shared/LangItems';
import Image from 'components/shared/Image';
import LangPickerContainer from './styles';

// ASSETS
import arrow from 'assets/arrow@2x.png';

const LangPicker = ({ langs }) => {
  const [ visibility, setVisibility ] = useState(false);
  const [ language, setLanguage ] = useState({ src: langs[0].src, name: langs[0].name });

  const handleClickLang = (name, src) => {
    setLanguage({ src: src, name: name });
    setVisibility(!visibility);
  }

  return(
    <LangPickerContainer onClick={() => setVisibility(!visibility)}>
      <LangItem 
        src={language.src}
        name={language.name}
        handleClickLang={handleClickLang}
        isSelected
      />
      <div>
        <Image src={arrow} width="12px" height="8px" alt="arrow"/>
      </div>
      {
        visibility ?
          <LangItems languages={langs} handleClickLang={handleClickLang}/>
          : false
      }
    </LangPickerContainer>
  );
}

LangPicker.propTypes = {
  langs: array
}

export default LangPicker;
