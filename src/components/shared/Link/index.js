import React from 'react';
import { string } from 'prop-types';
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll';

// STYLES
import 'styled-components/macro';
import { LinkStyle } from './styles';

const LinkComponent = ({ children, path }) => (
  <Link
    activeClass="active"
    to={path}
    spy={true}
    smooth={true}
    duration={500}
    offset={700}
    css={LinkStyle}>
    {children}
  </Link>
)

LinkComponent.defaultProps = {
  path: ''
}

LinkComponent.propTypes = {
  children: string,
  path: string
}

export default LinkComponent