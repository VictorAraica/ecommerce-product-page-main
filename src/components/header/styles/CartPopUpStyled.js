import styled from "styled-components";

export const CartPopUpContainerStyled = styled.div`
  position: absolute;
  top: 4.5rem;
  left: 50%;
  transform: translateX(-75%);
  cursor: default;

  display: flex;
  flex-direction: column;

  z-index: 10;

  background-color: white;
  box-shadow: 0px 10px 25px -2px rgba(0, 0, 0, 0.3);
  border-radius: 0.6rem;
  padding-bottom: 1.5rem;
`;

export const CartPopUpTitleStyled = styled.h4`
  color: ${({ theme }) => theme.colors.veryVarkBlue};
  border-bottom: solid 1px ${({ theme }) => theme.colors.grayishBlue};

  text-align: left;
  padding: 1.2rem;

  font-weight: 900;
`;

export const CartItemTitleStyled = styled.h4`
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const CartItemContainerStyled = styled.div`
  display: flex;
  padding: 0 2rem;
  margin-top: 1.5rem;
  justify-content: start;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  cursor: pointer;

  &:hover ${CartItemTitleStyled} {
    color: ${({ theme }) => theme.colors.veryVarkBlue};
    text-decoration: underline;
  }
`;

export const CartItemImageStyled = styled.img`
  border-radius: 0.5rem;
  max-width: 3.5rem;
  margin-right: 1rem;
`;

export const CartItemInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CartPriceTextStyled = styled.span`
  margin-right: 0.4rem;
`;

export const CartItemTotalStyled = styled.span`
  color: ${({ theme }) => theme.colors.veryVarkBlue};
  font-weight: 900;
`;

export const CartItemTrashIconStyled = styled.span`
  margin-left: 1.5rem;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.darkGrayishBlue};

  &:hover {
    color: ${({ theme }) => theme.colors.veryVarkBlue};
  }
`;

export const EmptyCartTextStyled = styled.h4`
  width: 20rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
