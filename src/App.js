import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import image1 from "./images/image-product-1.jpg";
import thumbnail1 from "./images/image-product-1-thumbnail.jpg";

import image2 from "./images/image-product-2.jpg";
import thumbnail2 from "./images/image-product-2-thumbnail.jpg";

import image3 from "./images/image-product-3.jpg";
import thumbnail3 from "./images/image-product-3-thumbnail.jpg";

import image4 from "./images/image-product-4.jpg";
import thumbnail4 from "./images/image-product-4-thumbnail.jpg";

function App() {
  const [cart, setCart] = useState();

  const images = [
    { image: image1, thumbnail: thumbnail1 },
    { image: image2, thumbnail: thumbnail2 },
    { image: image3, thumbnail: thumbnail3 },
    { image: image4, thumbnail: thumbnail4 },
  ];

  const product = { 
    images: images
    
  
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
