import React, { useState } from "react";
import {
  HeaderStyled,
  LeftHeaderStyled,
  RightHeaderStyled,
} from "./styles/HeaderStyled";
import Logo from "./Logo";
import Nav from "./Nav";
import Cart from "./Cart";
import Profile from "./Profile";
import BurguerButton from "./BurguerButton";
import NavMenu from "./NavMenu";

export default function Header({ cart, removeFromCart }) {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <HeaderStyled>
      <LeftHeaderStyled>
        <BurguerButton navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
        <NavMenu navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen}/>
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
