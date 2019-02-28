import styled from 'styled-components';

export default styled.header`
  width: calc( 100% - 200px);
  height: 70px;
  position: fixed;
  top: 0%;
  left: 0%;
  display: grid;
  grid-template-columns: 80px 4fr 2fr;
  padding: 0 100px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 99;

  @media (max-width: 576.98px) {
    width: calc( 100% - 60px);    
    padding: 0 30px;
    grid-template-columns: 80px 4fr;
    > div:last-child {
      display: none;
    }
  }
`
