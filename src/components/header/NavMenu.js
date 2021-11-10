import React from "react";
import { MenuContainerStyled } from "./styles/NavMenuStyled";
import NavMenuLink from "./NavMenuLink";
import { NavMenuBackgroundStyled } from "./styles/NavMenuStyled";

export default function NavMenu({ navMenuOpen, setNavMenuOpen }) {
  return (
    <>
      <NavMenuBackgroundStyled
        navMenuOpen={navMenuOpen}
        onClick={() => setNavMenuOpen(!navMenuOpen)}
      />
      <MenuContainerStyled navMenuOpen={navMenuOpen}>
        <NavMenuLink text="Collections" />
        <NavMenuLink text="Men" />
        <NavMenuLink text="Women" />
        <NavMenuLink text="About" />
        <NavMenuLink text="Contact" />
      </MenuContainerStyled>
    </>
  );
}
