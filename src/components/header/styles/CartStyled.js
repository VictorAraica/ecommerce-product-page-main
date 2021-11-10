import styled from "styled-components";

export const CartStyled = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme, cartPopUp }) =>
    cartPopUp ? theme.colors.veryVarkBlue : theme.colors.darkGrayishBlue};
  display: flex;
  align-items: center;
  margin: 0rem 2rem;
  position: relative;

  @media (max-width: 800px) {
    margin: 0rem 1rem;
  }

  @media (max-width: 500px) {
    margin: 0rem 0.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.veryVarkBlue};
  }

  &:after {
    content: "${({ amount }) => amount}";
    font-size: 0.7rem;

    background-color: ${({ theme }) => theme.colors.orange};
    color: white;

    position: absolute;
    top: -0.2rem;
    right: 0;

    padding: 0 0.4rem;
    border-radius: 0.5rem;

    display: ${({ amount }) => (amount > 0 ? "block" : "none")};
  }
`;
