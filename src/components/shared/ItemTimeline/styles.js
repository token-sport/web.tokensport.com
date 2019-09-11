import styled from 'styled-components';

export default styled.div`
  width: 50px;
  height: 6px;
  border-radius: 10px;
  margin: 5px 0;
  background-color: ${({ color, theme }) => color ? theme.colors[color] : theme.colors.neonBlue};
  box-shadow: ${({ color, isSelected, theme }) => isSelected ? theme.shadows[color] : 'none'};
  transition: .3s;
  transform: ${({ isSelected }) => isSelected ? 'translateY(-20px)' : 'translateY(0)'};
  cursor: pointer;
`
