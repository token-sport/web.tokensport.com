import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  width: calc( 100% - 200px);
  padding: 100px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 360px);
  justify-content: center;
  justify-items: center;
  padding: 40px 0px;
`

export const SubTitle = styled.span`
  width: 100%;
  text-align: center;
`