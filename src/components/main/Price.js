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
        <CurrentPriceStyled>${price.toFixed(2)}</CurrentPriceStyled>
        {discount ? <DiscountStyled>{discount}%</DiscountStyled> : ""}
      </PriceTopStyled>
      {oldPrice ? <OldPriceStyled>${oldPrice.toFixed(2)}</OldPriceStyled> : ""}
    </PriceContainerStyled>
  );
}
