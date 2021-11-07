import React from "react";
import {
  HeaderStyled,
  LeftHeaderStyled,
  RightHeaderStyled,
} from "./styles/HeaderStyled";
import Logo from "./Logo";
import Nav from "./Nav";
import Cart from "./Cart";
import Profile from "./Profile";

export default function Header({ cart, removeFromCart }) {
  return (
    <HeaderStyled>
      <LeftHeaderStyled>
        <Logo />
        <Nav />
      </LeftHeaderStyled>

      <RightHeaderStyled>
        <Cart cart={cart} removeFromCart={removeFromCart} />
        <Profile />
      </RightHeaderStyled>
    </HeaderStyled>
  );
}
