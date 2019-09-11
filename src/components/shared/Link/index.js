import React, { useCallback } from "react";
import { string, func } from "prop-types";
import { useMappedState } from 'redux-react-hook';


// COMPONENTS
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

// STYLES
import "styled-components/macro";
import { LinkStyle } from "./styles";

const LinkComponent = ({ children, path, handleClickMenu = () => false }) => {
  // REDUX MappedState HOOK
  const mapState = useCallback(
    state => ({
      pathLocation: state.getIn(['pathLocation', 'location'])
    }),
    [],
  );

  const { pathLocation } = useMappedState(mapState);
  const isDisruptionLocation = pathLocation.includes('/disruption');

  if (isDisruptionLocation) {
    return <NavLink 
      css={LinkStyle}
      to={{
        pathname: path.includes('#') ? '/' : path,
      }}
      activeClassName={path.includes('#') ? '' : 'active'}
      onClick={() => handleClickMenu(path)}>{children}</NavLink>
  }

  return path.includes('/disruption')
    ? <NavLink className="navLink" to={path} activeClassName="active" onClick={() => handleClickMenu(path)}>{children}</NavLink>
    : <Link
      activeClass="active"
      to={path}
      spy={true}
      smooth={true}
      duration={500}
      offset={-100}
      css={LinkStyle}
      onClick={() => handleClickMenu(path)}>
      {children}
    </Link>;
};

LinkComponent.defaultProps = {
  path: ""
};

LinkComponent.propTypes = {
  children: string,
  path: string,
  handleClickMenu: func
};

export default LinkComponent;
