import styled from "styled-components";

export const MenuContainerStyled = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding-top: 1.5rem;

  transform: ${({ navMenuOpen }) =>
    navMenuOpen ? "translateX(0)" : "translateX(-100%)"};

  transition: all;
  transition-duration: 0.8s;

  @media (min-width: 961px) {
    display: none;
  }
`;

export const NavMenuLinkStyled = styled.a`
  height: 3rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 900;
  width: 14rem;
  padding-left: 1.2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavMenuBackgroundStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.75);
  opacity: ${({ navMenuOpen }) => (navMenuOpen ? "1" : "0")};

  transition: opacity;
  transition-duration: 0.8s;

  pointer-events: ${({ navMenuOpen }) => (navMenuOpen ? "auto" : "none")};

  z-index: 9;
`;
