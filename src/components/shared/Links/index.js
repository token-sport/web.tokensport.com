import React from 'react';
import { array, bool } from 'prop-types';

// COMPONENTS
import Link from 'components/shared/Link';

// STYLES
import LinksContainer from './styles';

const Links = ({ arrLink, isColumn }) => <LinksContainer isColumn={ isColumn }>
  {
    arrLink.map((link) => <Link key={link.name} path={ link.path }>{link.name}</Link>)
  }
</LinksContainer>

Links.propTypes = {
  arrLink: array,
  isColumn: bool
}

export default Links;
