import React from 'react';
import { string, func } from 'prop-types';
import { Link } from 'react-scroll';

// STYLES
import 'styled-components/macro';
import { LinkStyle } from './styles';

const LinkComponent = ({ children, path, handleClickMenu = () => false  }) => (
  <Link
    activeClass="active"
    to={path}
    spy={true}
    smooth={true}
    duration={500}
    offset={-100}
    css={LinkStyle}
    onClick={handleClickMenu}>
    {children}
  </Link>
)

LinkComponent.defaultProps = {
  path: ''
}

LinkComponent.propTypes = {
  children: string,
  path: string,
  handleClickMenu: func
}

export default LinkComponent