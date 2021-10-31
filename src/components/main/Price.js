import React from "react";
import {
  PriceContainerStyled,
  PriceTopStyled,
  CurrentPriceStyled,
  DiscountStyled,
  OldPriceStyled,
} from "./styles/PriceStyled";

export default function Price({ price, discount, oldPrice }) {
  return (
    <PriceContainerStyled>
      <PriceTopStyled>
        <CurrentPriceStyled>{price}</CurrentPriceStyled>
        {discount ? <DiscountStyled>{discount}</DiscountStyled> : ""}
      </PriceTopStyled>
      {oldPrice ? <OldPriceStyled>{oldPrice}</OldPriceStyled> : ""}
    </PriceContainerStyled>
  );
}
