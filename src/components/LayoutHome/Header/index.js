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
import { languages, links } from 'fixture/'

const Header = () => <HeaderContainer>
  <Image src={logo} alt="logo" width="60px" height="60px"/>
  <LangPicker langs={languages}/>
  <Links arrLink={links}/>
</HeaderContainer>

export default Header;
