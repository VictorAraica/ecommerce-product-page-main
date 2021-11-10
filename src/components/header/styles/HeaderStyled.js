import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 90%;
  height: 7rem;
  position: relative;
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px ${({ theme }) => theme.colors.grayishBlue};
`;

export const LeftHeaderStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const RightHeaderStyled = LeftHeaderStyled;
