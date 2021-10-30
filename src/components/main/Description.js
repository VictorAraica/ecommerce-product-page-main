import React from "react";
import {
  DescriptionContainerstyled,
  CompanyTitleStyled,
  TitleStyled,
  InfoStyled,
} from "./styles/DescriptionStyled";
import AddToCart from "./AddToCart";

import Price from "./Price";

export default function Description() {
  return (
    <DescriptionContainerstyled>
      <CompanyTitleStyled>SNEAKER COMPANY</CompanyTitleStyled>
      <TitleStyled>Fall Limited Edition Sneakers</TitleStyled>
      <InfoStyled>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </InfoStyled>
      <Price />
      <AddToCart />
    </DescriptionContainerstyled>
  );
}
