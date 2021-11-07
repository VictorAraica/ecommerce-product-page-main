import React from "react";
import {
  CartPopUpContainerStyled,
  CartPopUpTitleStyled,
  EmptyCartTextStyled,
} from "./styles/CartPopUpStyled";
import CartItem from "./CartItem";

const CartPopUp = React.forwardRef(({ cart, removeFromCart }, ref) => {
  return (
    <CartPopUpContainerStyled ref={ref}>
      <CartPopUpTitleStyled>Cart</CartPopUpTitleStyled>
      {cart.length <= 0 ? (
        <EmptyCartTextStyled>Your cart is empty.</EmptyCartTextStyled>
      ) : (
        cart.map((item, index) => (
          <CartItem
            product={item}
            removeFromCart={removeFromCart}
            key={index}
          />
        ))
      )}
    </CartPopUpContainerStyled>
  );
});

export default CartPopUp;
