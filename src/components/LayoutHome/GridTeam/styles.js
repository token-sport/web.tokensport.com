import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  justify-content: center;
  justify-items: center;
  padding: 40px 0px;
`

export const SubTitle = styled.span`
  width: 100%;
  text-align: center;
`