import React from "react";
import { NavLinkStyled } from "./styles/NavStyled";

export default function NavLink({ text }) {
  return (
    <NavLinkStyled>
      <span>{text}</span>
    </NavLinkStyled>
  );
}
