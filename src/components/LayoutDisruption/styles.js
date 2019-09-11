import styled from 'styled-components';

export const LayoutContainer = styled.section`
  padding: 6em 0 4em 0;
`

export const PostBody = styled.article`
  margin: 0 auto;
  max-width: 1000px;
  width: calc(100vw - 45em);

  @media (max-width: 576.98px) {
    width: calc(100vw - 2em);
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    width: calc(100vw - 6em);
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: calc(100vw - 18em);
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: calc(100vw - 25em);
  }
`

