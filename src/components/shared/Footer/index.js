import React, { useCallback } from "react";
import { useMappedState } from 'redux-react-hook';

// COMPONENTS
import Links from "components/shared/Links";
import Image from "components/shared/Image";
import Description from "components/shared/Description";
import Network from "components/shared/Network";

// STYLES
import FooterContainer from "./styles";

// ASSETS
import logo from "assets/logo.png";

const Footer = () => {

  // REDUX MappedState HOOK
  const mapState = useCallback(state => ({
    navLinks: state.getIn(['language', 'contentLang', 'navLinks']),
    footerInfo: state.getIn(['language', 'contentLang', 'footer'])
  }), []);

  const {
    navLinks,
    footerInfo
  } = useMappedState(mapState);

  return (
    <FooterContainer>
      <Links arrLink={navLinks.toJS()} isColumn />
      <div>
        <Image src={logo} alt="logo" width="100px" height="100px" />
        <Description size="xxsm" color="white" bold="300" margin="10px 0 0 0">
          {footerInfo.toJS().copyright}
        </Description>
      </div>
      <div>
        <Description size="sm" color="white" bold="600">
          {footerInfo.toJS().networks.title}
        </Description>
        <Description size="xxsm" color="white" bold="300">
          {footerInfo.toJS().networks.description}
        </Description>
        <Network
          networks={footerInfo.toJS().networks.icons}
          width="20px"
          height="20px"
          margin="20px 0 0 0"
        />
      </div>
    </FooterContainer>
  );
};

export default Footer;
