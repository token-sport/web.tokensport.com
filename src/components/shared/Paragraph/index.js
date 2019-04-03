import React from 'react';
import { oneOfType, string, object } from 'prop-types';

// STYLES
import ParagraphContainer from './styles';

const Paragraph = ({ children }) =>
  <ParagraphContainer>{ children }</ParagraphContainer>;

Paragraph.propTypes = {
  children: oneOfType([string, object])
}

export default Paragraph;

