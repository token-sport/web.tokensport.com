import styled from 'styled-components';

export const Image = styled.img.attrs(({ src }) => ({
  src
}))`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: ${({ isIcon }) => isIcon ? 'contain' : 'cover'};
`