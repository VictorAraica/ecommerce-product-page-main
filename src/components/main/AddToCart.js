import React, { useState } from "react";
import {
  ContainerStyled,
  AmountStyled,
  AddToCartButtonStyled,
} from "./styles/AddToCartStyled";
import AmountButton from "./AmountButton";
import { IoCartOutline } from "react-icons/io5";

export default function AddToCart() {
  const [amount, setAmount] = useState(0);
  return (
    <ContainerStyled>
      <AmountButton amount={amount} setAmount={setAmount} plus={false} />
      <AmountStyled>{amount}</AmountStyled>
      <AmountButton amount={amount} setAmount={setAmount} plus={true} />
      <AddToCartButtonStyled>
        <IoCartOutline style={{ fontSize: "1.2rem", marginRight: "0.7rem" }} />
        Add to cart
      </AddToCartButtonStyled>
    </ContainerStyled>
  );
}
