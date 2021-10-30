import styled from "styled-components";

export const CartStyled = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  display: flex;
  align-items: center;
  margin: 0rem 2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.veryVarkBlue};
  }
`;
