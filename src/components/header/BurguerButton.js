import React from "react";
import { GrMenu } from "react-icons/gr";
import { BurguerButtonContainerStyled } from "./styles/NavStyled";

export default function BurguerButton({ navMenuOpen, setNavMenuOpen }) {
  const styled = { fontSize: "1.6rem" };

  return (
    <BurguerButtonContainerStyled onClick={() => setNavMenuOpen(!navMenuOpen)}>
      <GrMenu style={styled} />
    </BurguerButtonContainerStyled>
  );
}
