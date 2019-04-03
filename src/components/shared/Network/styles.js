import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: ${({ margin }) => margin ? margin : '0'};
  > a:last-child {
    margin-right: 0;
  }
  > a {
    margin-right: 15px;
  }
`
