import React, { useState } from "react";
import {
  ContainerStyled,
  AmountStyled,
  AddToCartButtonStyled,
} from "./styles/AddToCartStyled";
import AmountButton from "./AmountButton";
import { IoCartOutline } from "react-icons/io5";

export default function AddToCart({ product, addToCart }) {
  const [amount, setAmount] = useState(0);

  const onClick = () => {
    if (amount <= 0) {
      return;
    }

    const cartItem = {
      amount: amount,
      product: product,
    };

    addToCart(cartItem);
  };

  return (
    <ContainerStyled>
      <AmountButton amount={amount} setAmount={setAmount} plus={false} />
      <AmountStyled>{amount}</AmountStyled>
      <AmountButton amount={amount} setAmount={setAmount} plus={true} />
      <AddToCartButtonStyled onClick={onClick}>
        <IoCartOutline
          style={{ fontSize: "1.2rem", marginRight: "0.7rem" }}
          onClick={onClick}
        />
        Add to cart
      </AddToCartButtonStyled>
    </ContainerStyled>
  );
}
