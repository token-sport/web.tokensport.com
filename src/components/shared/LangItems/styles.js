import styled from 'styled-components';

export default styled.div`
  width: 110px;
  position: absolute;
  top: 101%;
  right: 0%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background}
  border-radius: 0 0 10px 10px;
  box-shadow: ${({ theme }) => theme.shadows.dark}
`
