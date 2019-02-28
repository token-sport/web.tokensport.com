import styled from 'styled-components';

export const TokenDistSection = styled.section`
  width: calc(100% - 200px);
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TokenDistContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: space-between;
  justify-items: center;
`
