import styled from 'styled-components';

export default styled.div`
  width: 40px;
  height: 2px;
  margin: 5px 0;
  background-color: ${({ color, theme }) => color ? theme.colors[color] : theme.colors.neonBlue}
  box-shadow: ${({ color, isSelected, theme }) => isSelected ? theme.shadows[color] : 'none'}
  transition: .3s;
  transform: ${({ isSelected }) => isSelected ? 'translateY(-10px)' : 'translateY(0)'};
  cursor: pointer;
`
