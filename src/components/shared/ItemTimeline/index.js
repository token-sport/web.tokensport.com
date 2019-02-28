import React from 'react';
import { string, bool, func } from 'prop-types';

// STYLES
import ItemTimelineContainer from './styles';

const ItemTimeline = ({ color, isSelected, handleClickItem }) =>
  <ItemTimelineContainer color={color} isSelected={isSelected} onClick={ () => handleClickItem()}/>

ItemTimeline.propTypes = {
  color: string,
  isSelected: bool,
  handleClickItem: func
}

export default ItemTimeline;
