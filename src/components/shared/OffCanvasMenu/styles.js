import styled from 'styled-components';

export default styled.div`
  width: 100vw;
  height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  left: 100%;
  top: 0%;
  background-color: ${({ theme }) => theme.colors.background}
  transition: .5s ease-in-out;
  z-index: 999;

  > div a {
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 1em;
  }

  @media (max-width: 576.98px) {
    display: flex;
    left: ${({ isVisibleOffCanvas }) => isVisibleOffCanvas ? '0%' : '100%'};
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    display: flex;
    left: ${({ isVisibleOffCanvas }) => isVisibleOffCanvas ? '0%' : '100%'};
  }
`
