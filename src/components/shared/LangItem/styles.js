import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px 0;
  width: 60px;
  cursor: pointer;

  > div {
    display: inline-block;
  }

  &:first-child {
    margin: 10px 0 5px 0;
  }

  &:last-child {
    margin: 5px 0 10px 0;
  }
`
