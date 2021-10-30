import React from "react";
import LogoIcon from "../../images/logo.svg";
import { StyledLogo, StyledLogoContainer } from "./styles/LogoStyled";

export default function Logo() {
  return (
    <StyledLogoContainer>
      <StyledLogo src={LogoIcon} />
    </StyledLogoContainer>
  );
}
