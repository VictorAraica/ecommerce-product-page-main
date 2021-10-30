import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { CartStyled } from "./styles/CartStyled";

export default function Cart() {
  const style = { fontSize: "1.7rem" };
  return (
    <CartStyled>
      <IoCartOutline style={style} />
    </CartStyled>
  );
}
