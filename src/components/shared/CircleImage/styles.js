import styled from 'styled-components';

export default styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ shadow, theme }) => `5px solid ${theme.colors[shadow]}`};
  box-shadow: ${({ shadow, theme }) => theme.shadows[shadow]}
`

