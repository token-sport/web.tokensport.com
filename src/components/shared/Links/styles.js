import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: ${({ isColumn  }) => isColumn ? 'column' : 'row'};

  > a {
    margin: ${({ isColumn  }) => isColumn ? '0 0 10px 0' : '0 50px 0 0'};
  }
`;
