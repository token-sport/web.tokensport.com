import styled from 'styled-components'

export const ContainerPartners = styled.section`
  text-align: center;
  margin: 100px;
  width: calc( 100% - 200px);

  @media (max-width: 576.98px) {
    margin: 30px;
    width: calc( 100% - 60px);
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    margin: 40px;
    width: calc( 100% - 80px);
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: 50px;
    width: calc( 100% - 100px);
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    margin: 50px;
    width: calc( 100% - 100px);
  }
`

export const ContentPartners = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;

  @media (max-width: 576.98px) {
    margin: 40px 0;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    margin: 40px;
    width: calc( 100% - 80px);
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: 50px;
    width: calc( 100% - 100px);
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    margin: 50px;
    width: calc( 100% - 100px);
  }
`

export const ImagePartner = styled.div`
  flex: 0 0 calc(25% - 20px);
  margin: 20px;
  > img {
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    opacity: 0.5;
  }

  @media (max-width: 576.98px) {
    flex: 0 0 calc(50% - 20px);
    margin: 10px;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    flex: 0 0 calc(40% - 20px);
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    flex: 0 0 calc(35% - 20px);
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    flex: 0 0 calc(30% - 20px);
  }
`