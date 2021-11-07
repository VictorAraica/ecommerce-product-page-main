import React from "react";
import LogoIcon from "../../images/logo.svg";
import { LogoStyled, LogoContainerStyled } from "./styles/LogoStyled";

export default function Logo() {
  return (
    <LogoContainerStyled>
      <LogoStyled src={LogoIcon} />
    </LogoContainerStyled>
  );
}
