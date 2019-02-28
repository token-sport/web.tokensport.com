import styled from 'styled-components';

export default styled.div`
  width: 40px;
  height: 2px;
  background-color: ${({ color, theme }) => color ? theme.colors[color] : theme.colors.neonBlue}
  box-shadow: ${({ color, isSelected, theme }) => isSelected ? theme.shadows[color] : 'none'}
`
