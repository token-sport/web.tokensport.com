import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  justify-content: center;
  justify-items: center;
  padding: 50px 0px;
`