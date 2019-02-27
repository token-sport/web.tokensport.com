import styled from 'styled-components';

export default styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0%;
  left: 0%;
  display: grid;
  grid-template-columns: 80px 4fr 2fr;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background}
`
