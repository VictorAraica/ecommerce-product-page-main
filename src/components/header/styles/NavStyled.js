import styled from "styled-components";

export const NavContainerStyled = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
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
