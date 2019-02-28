import React from 'react';

// COMPONENTS
import Image from 'components/shared/Image';
import LangPicker from 'components/shared/LangPicker';
import Links from 'components/shared/Links';

// STYLES
import HeaderContainer from './styles';

// ASSETS
import logo from 'assets/logo.png';

// FIXTURES
import { LANGUAGES, LINKS } from 'fixture/';

const Header = () => <HeaderContainer>
  <Image src={logo} alt="logo" width="50px" height="50px"/>
  <LangPicker langs={LANGUAGES}/>
  <Links arrLink={LINKS}/>
</HeaderContainer>;

export default Header;
