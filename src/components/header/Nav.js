import React from "react";
import { NavContainerStyled } from "./styles/NavStyled";
import NavLink from "./NavLink";

export default function Nav() {
  return (
    <NavContainerStyled>
      <NavLink text="Collections" />
      <NavLink text="Men" />
      <NavLink text="Women" />
      <NavLink text="About" />
      <NavLink text="Contact" />
    </NavContainerStyled>
  );
}
