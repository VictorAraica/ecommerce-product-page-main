import React, { useState, useRef, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CartStyled } from "./styles/CartStyled";
import CartPopUp from "./CartPopUp";

export default function Cart({ cart, removeFromCart }) {
  const style = { fontSize: "1.7rem" };
  const [cartPopUp, setCartPopUp] = useState(false);
  let popUpRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      popUpRef.current &&
      !popUpRef.current.contains(event.target) &&
      cartPopUp
    ) {
      setCartPopUp(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <CartStyled
      cartPopUp={cartPopUp}
      amount={cart.reduce((previous, current) => previous + current.amount, 0)}
    >
      <IoCartOutline style={style} onClick={() => setCartPopUp(!cartPopUp)} />

      {cartPopUp ? (
        <CartPopUp cart={cart} removeFromCart={removeFromCart} ref={popUpRef} />
      ) : (
        ""
      )}
    </CartStyled>
  );
}
