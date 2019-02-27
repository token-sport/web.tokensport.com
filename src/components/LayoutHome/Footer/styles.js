import styled from 'styled-components';

export default styled.footer`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darkBlue}

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
