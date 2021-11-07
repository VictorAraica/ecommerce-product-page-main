import React from "react";
import {
  CartItemContainerStyled,
  CartItemImageStyled,
  CartItemInfoStyled,
  CartItemTitleStyled,
  CartItemTotalStyled,
  CartPriceTextStyled,
  CartItemTrashIconStyled,
} from "./styles/CartPopUpStyled";
import { FaTrashAlt } from "react-icons/fa";

export default function CartItem({ product, removeFromCart }) {
  return (
    <CartItemContainerStyled>
      <CartItemImageStyled
        src={product.product.images[0].thumbnail}
        alt="thumbnail"
      />
      <CartItemInfoStyled>
        <CartItemTitleStyled>{product.product.title}</CartItemTitleStyled>
        <div>
          <CartPriceTextStyled>
            ${product.product.price.toFixed(2)}
          </CartPriceTextStyled>
          <CartPriceTextStyled>x</CartPriceTextStyled>
          <CartPriceTextStyled>{product.amount}</CartPriceTextStyled>
          <CartItemTotalStyled>
            ${(product.product.price * product.amount).toFixed(2)}
          </CartItemTotalStyled>
        </div>
      </CartItemInfoStyled>
      <CartItemTrashIconStyled
        onClick={() => removeFromCart(product.product.title)}
      >
        <FaTrashAlt />
      </CartItemTrashIconStyled>
    </CartItemContainerStyled>
  );
}
