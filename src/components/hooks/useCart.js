import { useState } from "react";

export default function useCart(initial) {
  const [cart, setCart] = useState(initial);

  const addToCart = (product) => {
    let newCart = [];

    const productInCart = cart.some(
      (item) => item.product.title === product.product.title
    );

    if (productInCart) {
      newCart = cart.map((item) => {
        if (item.product.title === product.product.title) {
          return {
            product: item.product,
            amount: item.amount + product.amount,
          };
        }

        return item;
      });
    } else {
      newCart = [...cart, product];
    }

    setCart(newCart);
  };

  const removeFromCart = (title) => {
    setCart(cart.filter((item) => item.product.title !== title));
  };

  return [cart, addToCart, removeFromCart];
}
