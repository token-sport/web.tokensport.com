import styled from 'styled-components';


export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.medium};
  box-shadow: ${({ theme, showInHover }) => showInHover ? '' : theme.shadows.dark};
  background-image: ${({ withGradient }) => withGradient ? 'linear-gradient(to top, #1d2737, #243043, #2a3950, #31425d, #384c6a)' : 'unset'};
  width: 270px;
  height: fit-content;
  padding: ${({ padding }) => padding};
  :hover {
    box-shadow: ${({ theme, showInHover }) => showInHover ? theme.shadows.dark : ''};
    transition: ${({ showInHover }) => showInHover ? '500ms' : 'unset'};
    transform: ${({ showInHover }) => showInHover ? 'scale(1.01)' : 'unset'}; 
  }
`
