import React from "react";
import { array, bool, func } from "prop-types";

// COMPONENTS
import Link from "components/shared/Link";

// STYLES
import LinksContainer from "./styles";

const Links = ({ arrLink, isColumn, handleClickMenu }) => (
  <LinksContainer isColumn={isColumn}>
    {
      arrLink.map((link, index) => <Link
        key={index}
        path={link.path}
        handleClickMenu={handleClickMenu}>
        { link.name }
      </Link>)
    }
  </LinksContainer>
);

Links.propTypes = {
  arrLink: array,
  isColumn: bool,
  handleClickMenu: func
};

export default Links;
