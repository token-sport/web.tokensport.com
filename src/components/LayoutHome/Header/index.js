import React from 'react';
import { func } from 'prop-types';

// COMPONENTS
import Image from 'components/shared/Image';
import LangPicker from 'components/shared/LangPicker';
import BurgerMenu from 'components/shared/BurgerMenu';
import Links from 'components/shared/Links';

// STYLES
import HeaderContainer from './styles';

// ASSETS
import logo from 'assets/logo.png';

// FIXTURES
import { LANGUAGES, LINKS } from 'fixture/';

const Header = ({ handleClickMenu }) => <HeaderContainer>
  <Image src={logo} alt="logo" width="50px" height="50px"/>
  <LangPicker langs={LANGUAGES}/>
  <BurgerMenu handleClickMenu={handleClickMenu}/>
  <Links arrLink={LINKS}/>
</HeaderContainer>;

Header.propTypes = {
  handleClickMenu: func
}

export default Header;
