import styled from 'styled-components';

export default styled.footer`
  padding: 0 100px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darkBlue};

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

  @media (max-width: 576.98px) {
    padding: 30px;
    width: calc( 100% - 60px);
    flex-direction: column;

    > div:nth-child(2) {
      flex: unset;
      margin-bottom: 10px;
      > img {
        width: 60px;
        height: 60px;
      }
    } 

    > div:nth-child(1) {
      flex: unset;
      order: 1;
      text-align: center;
    } 

    > div:nth-child(3) {
      flex: unset;
      order: 3;
      > div:nth-child(1), 
      > div:nth-child(2) {
        display: none;
      }
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    padding: 40px;
    width: calc( 100% - 80px);
    height: auto;
    > div:last-child {
      flex: 1;
    }
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    padding: 50px;
    width: calc( 100% - 100px);
    height: auto;
    > div:last-child {
      flex: 1;
    }
  }
`;
