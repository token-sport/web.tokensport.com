import styled from 'styled-components';

export default styled.footer`
  padding: 0 100px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darkBlue}

  > div:nth-child(1),
  > div:nth-child(2){
    flex: 1;
  }

  > div:nth-child(2) {
    display: flex;
    flex: 3;
    flex-direction: column;
    align-items: center;
  }
`
