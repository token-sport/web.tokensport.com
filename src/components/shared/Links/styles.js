import styled from 'styled-components';

export default styled.div`
  justify-self: end;
  display: flex;
  flex-direction: ${({ isColumn  }) => isColumn ? 'column' : 'row'};

  > a:last-child {
    margin: 0;
  }

  > a {
    margin: ${({ isColumn  }) => isColumn ? '0 0 10px 0' : '0 50px 0 0'};
  }
`;
