import React from "react";
import {
  DescriptionContainerstyled,
  CompanyTitleStyled,
  TitleStyled,
  InfoStyled,
} from "./styles/DescriptionStyled";
import AddToCart from "./AddToCart";

import Price from "./Price";

export default function Description({ product, addToCart }) {
  return (
    <DescriptionContainerstyled>
      <CompanyTitleStyled>{product.company}</CompanyTitleStyled>
      <TitleStyled>{product.title}</TitleStyled>
      <InfoStyled>{product.description}</InfoStyled>
      <Price
        price={product.price}
        discount={product.discount}
        oldPrice={product.oldPrice}
      />
      <AddToCart product={product} addToCart={addToCart} />
    </DescriptionContainerstyled>
  );
}
