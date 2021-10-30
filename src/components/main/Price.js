import React from "react";
import {
  PriceContainerStyled,
  PriceTopStyled,
  CurrentPriceStyled,
  DiscountStyled,
  OldPriceStyled
} from "./styles/PriceStyled";

export default function Price() {
  return (
    <PriceContainerStyled>
      <PriceTopStyled>
        <CurrentPriceStyled>$125.00</CurrentPriceStyled>
        <DiscountStyled>50%</DiscountStyled>
      </PriceTopStyled>
      <OldPriceStyled>$250.00</OldPriceStyled>
    </PriceContainerStyled>
  );
}
