import React from 'react';
import { bool, number, array, string } from 'prop-types';

// STYLES
import { SectionContainer } from './styles';

const Sections = ({ children, isReverse, section, id }) => {
  return <SectionContainer isReverse={isReverse} id={id} section={section}>
    { children }
  </SectionContainer>;
}

Sections.propTypes = {
  id: string,
  children: array,
  isReverse: bool,
  section: number
}

export default Sections;

