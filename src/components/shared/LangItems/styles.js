import styled from 'styled-components';

export default styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.dark}
`
