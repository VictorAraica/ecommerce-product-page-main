import React from "react";
import { AmountButtonStyled } from "./styles/AddToCartStyled";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function AmountButton({ amount, setAmount, plus }) {
  const style = { fontSize: "1rem" };

  const onClick = () => {
    if (plus) {
      setAmount(amount + 1);
    } else if (amount > 0) {
      setAmount(amount - 1);
    }
  };
  return (
    <AmountButtonStyled onClick={onClick}>
      {plus ? <FaPlus style={style} /> : <FaMinus style={style} />}
    </AmountButtonStyled>
  );
}
