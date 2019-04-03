import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ isReverse }) => (isReverse ? "0 30px 0 60px" : "0 85px 0 0")};

  @media (max-width: 576.98px) {
    margin: 0;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    margin: 0;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: 0;
  }
`;

export const SubInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin: 30px 0;

  @media (max-width: 576.98px) {
    margin: 15px 0;
    grid-template-columns: repeat(auto-fill, 270px);
  }

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
  }
`;
