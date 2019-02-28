import styled from 'styled-components';

export default styled.div`
  width: 100px;
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
  justify-self: end;
  margin-right: 50px;
  border-right: 1px solid white;

  > div img {
    margin: 6px 0 0 0;
    cursor: pointer;
  }
  @media (max-width: 576.98px) {
    margin-right: 0px;
  }
`
