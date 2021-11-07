import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

import useCart from "./components/hooks/useCart";

import image1 from "./images/image-product-1.jpg";
import thumbnail1 from "./images/image-product-1-thumbnail.jpg";

import image2 from "./images/image-product-2.jpg";
import thumbnail2 from "./images/image-product-2-thumbnail.jpg";

import image3 from "./images/image-product-3.jpg";
import thumbnail3 from "./images/image-product-3-thumbnail.jpg";

import image4 from "./images/image-product-4.jpg";
import thumbnail4 from "./images/image-product-4-thumbnail.jpg";

function App() {
  const images = [
    { image: image1, thumbnail: thumbnail1 },
    { image: image2, thumbnail: thumbnail2 },
    { image: image3, thumbnail: thumbnail3 },
    { image: image4, thumbnail: thumbnail4 },
  ];

  const product = {
    images: images,
    company: "SNEAKER COMPANY",
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125.0,
    discount: 50,
    oldPrice: 250.0,
  };
  const [cart, addToCart, removeFromCart] = useCart([]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header cart={cart} removeFromCart={removeFromCart} product={product} />
        <Main product={product} addToCart={addToCart} />
      </ThemeProvider>
    </div>
  );
}

export default App;
