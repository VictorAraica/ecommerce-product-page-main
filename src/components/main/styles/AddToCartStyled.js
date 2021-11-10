import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  margin-top: 2rem;
  justify-content: start;
  align-items: center;

  @media (max-width: 490px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  }
`;

export const AmountButtonStyled = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.orange};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    opacity: 0.65;
  }
`;

export const AmountStyled = styled.h4`
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddToCartButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  padding: 1rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 0.7rem;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const AmountButtonsContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
  justify-content: space-around;
  align-self: center;
  justify-self: center;
  width: 90%;
  padding: 0.5rem 0;
  border-radius: 0.6rem;
`;
