import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 4fr;
  margin-top: 2rem;
  justify-content: start;
  align-items: center;
`;

export const AmountButtonStyled = styled.button`
  background-color: white;
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
