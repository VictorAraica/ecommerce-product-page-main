import styled from "styled-components";

export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media (max-width: 490px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PriceTopStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const CurrentPriceStyled = styled.h3`
  color: ${({ theme }) => theme.colors.veryVarkBlue};
  font-size: 1.5rem;
  font-weight: bolder;
  margin-right: 1rem;
`;

export const DiscountStyled = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.paleOrange};
  font-size: 0.8rem;
  font-weight: 900;
  border-radius: 0.3rem;
  padding: 0.2rem 0.3rem;
`;

export const OldPriceStyled = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.grayishBlue};
  text-decoration: line-through;
  font-size: 0.95rem;
`;
