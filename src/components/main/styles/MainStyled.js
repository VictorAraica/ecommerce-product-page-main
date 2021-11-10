import styled from "styled-components";

export const MainStyled = styled.main`
  width: 80%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 4rem auto;

  @media (max-width: 890px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;

    width: 98%;
    max-width: 10000px;
  }
`;
