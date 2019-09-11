import styled from 'styled-components';

export default styled.div`
  display: none;
  cursor: pointer;
  padding: 5px;

  @media (max-width: 576.98px) {
    display: inline-block;
    justify-self: end;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: inline-block;
    justify-self: end;
  }
`
