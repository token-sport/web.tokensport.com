import React from 'react'
import { string } from 'prop-types'
import { Link } from 'react-router-dom'

// STYLES
import 'styled-components/macro';
import { LinkStyle } from './styles'

const LinkComponent = ({ children, path }) => (
  <Link to={path} css={LinkStyle}>
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