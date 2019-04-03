import React, { useCallback } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

// COMPONENTS
import Image from 'components/shared/Image';
import LangPicker from 'components/shared/LangPicker';
import BurgerMenu from 'components/shared/BurgerMenu';
import Links from 'components/shared/Links';

// TYPES
import { SWITCH_OFF_CANVAS_VISIBILITY } from 'actionTypes/';

// STYLES
import HeaderContainer from './styles';

// ASSETS
import logo from 'assets/logo.png';

// CONSTANTS
import INFO_LANGS from 'constants/langInfo';

const Header = () => {

  // REDUX MappedState HOOK
  const mapState = useCallback(state => ({
    navLinks: state.getIn(['language', 'contentLang', 'navLinks']),
    isVisibleOffCanvas: state.getIn(['offCanvasVisibility', 'isVisible'])
  }), []);

  const {
    navLinks,
    isVisibleOffCanvas
  } = useMappedState(mapState);

  // REDUX Dispatch HOOK
  const dispatch = useDispatch();

  const handleClickMenu = useCallback(() => {
    return (
      dispatch({
        type: SWITCH_OFF_CANVAS_VISIBILITY,
        value: !isVisibleOffCanvas
      }),
      []
    );
  });

  return (
    <HeaderContainer>
      <Image src={logo} alt="logo" width="50px" height="50px"/>
      <LangPicker langs={INFO_LANGS}/>
      <BurgerMenu handleClickMenu={handleClickMenu}/>
      <Links arrLink={navLinks.toJS()}/>
    </HeaderContainer>
  );
}

export default Header;

