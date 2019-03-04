import styled from 'styled-components';

export const Image = styled.img.attrs(({ src }) => ({
  src
}))`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: ${({ isIcon }) => isIcon ? 'contain' : 'cover'};
  -webkit-filter: ${({ isGray }) => isGray ? 'grayscale(90%)' : 'unset'}; /* Safari 6.0 - 9.0 */
  filter:${({ isGray }) => isGray ? 'grayscale(90%)' : 'unset'}; 
`