import React from 'react';

// COMPONENTS
import Links from 'components/shared/Links';
import Image from 'components/shared/Image';
import Description from 'components/shared/Description';
import Network from 'components/shared/Network';

// STYLES
import FooterContainer from './styles';

// FIXTURES
import { links, TSPNETWORKS } from 'fixture/';

// ASSETS
import logo from 'assets/logo.png';

const Footer = () => <FooterContainer>
  <Links arrLink={links} isColumn/>
  <div>
    <Image src={logo} alt="logo" width="100px" height="100px"/>
    <Description
      size="xxsm"
      color="white"
      bold="300"
      margin="10px 0 0 0">Todos los derechos reservados ©</Description>
  </div>
  <div>
    <Description
      size="sm"
      color="white"
      bold="600"
    >Redes Sociales</Description>
    <Description
      size="xxsm"
      color="white"
      bold="300"
    >Siguenos para estar al tanto de todo</Description>
    <Network networks={TSPNETWORKS} width="20px" height="20px" margin="20px 0 0 0"/>
  </div>
</FooterContainer>

export default Footer;
