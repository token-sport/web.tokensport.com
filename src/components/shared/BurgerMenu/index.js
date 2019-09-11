import React from 'react';
import { func } from 'prop-types';

// COMPONENTS
import Image from 'components/shared/Image';

// STYLES
import BurgerMenuContainer from './styles';

const BurgerMenu = ({ handleClickMenu }) => 
  <BurgerMenuContainer onClick={handleClickMenu}>
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/Icons%2FHamburguer-menu.svg?alt=media&token=7147b4cc-4e9b-4e97-ac9c-3e4a21ddb336"
      width="20px"
      height="10px"
      alt="BugerMenu"
    />
  </BurgerMenuContainer>;

BurgerMenu.propTypes = {
  handleClickMenu: func
}

export default BurgerMenu;
