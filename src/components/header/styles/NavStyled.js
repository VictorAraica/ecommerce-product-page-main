import styled from "styled-components";

export const NavContainerStyled = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const BurguerButtonContainerStyled = styled.nav`
  margin: 0rem 0.5rem;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};

  @media (min-width: 961px) {
    display: none;
  }
`;

export const NavLinkStyled = styled.a`
  margin: 0rem 1rem;
  cursor: pointer;
  display: flex;
  height: 100%;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  border-bottom: solid rgba(0, 0, 0, 0) 4px;
  border-top: solid rgba(0, 0, 0, 0) 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.veryVarkBlue};
    border-bottom: solid ${({ theme }) => theme.colors.orange} 4px;
  }
`;
