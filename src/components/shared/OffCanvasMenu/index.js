import React from 'react';
import { bool, func } from 'prop-types';

// COMPONENTS
import Links from 'components/shared/Links';

// STYLES
import OffCanvasMenuContainer from './styles';

// FIXTURES
import { LINKS } from 'fixture/';

const OffCanvasMenu = ({ isVisibleOffCanvas, handleClickMenu }) => 
  <OffCanvasMenuContainer 
    isVisibleOffCanvas={isVisibleOffCanvas}>
    <Links
      arrLink={LINKS}
      isColumn
      handleClickMenu={handleClickMenu}/>
  </OffCanvasMenuContainer>;

OffCanvasMenu.propTypes = {
  isVisibleOffCanvas: bool,
  handleClickMenu: func
}

export default OffCanvasMenu;
