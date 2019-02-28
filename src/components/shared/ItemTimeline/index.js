import React from 'react';
import { string, bool } from 'prop-types';

// STYLES
import ItemTimelineContainer from './styles';

const ItemTimeline = ({ color, isSelected }) =>
  <ItemTimelineContainer color={color} isSelected={isSelected}/>

ItemTimeline.propTypes = {
  color: string,
  isSelected: bool
}

export default ItemTimeline;
