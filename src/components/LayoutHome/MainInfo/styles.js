import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px;


  @media (max-width: 576.98px) {
    text-align: center;

    > div:first-child {
      margin: 0 0 20px 0;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    text-align: center;
    margin: 0 0 20px 0;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    text-align: center;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    text-align: none;
  }
`