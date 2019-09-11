import styled from 'styled-components';

export default styled.div`
  display: inline-flex;
  align-items: center;
  margin: 5px 0;
  width: 60px;
  cursor: pointer;

  > div {
    display: inline-block;
  }

  &:first-child {
    margin: ${({ isSelected }) => isSelected ? '0' : '10px 0 5px 0'}
  }

  &:last-child {
    margin: 5px 0 10px 0;
  }
`
