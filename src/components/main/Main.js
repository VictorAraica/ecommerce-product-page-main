import { useState } from "react";
import { MainStyled } from "./styles/MainStyled";
import Images from "./Images";
import Modal from "./Modal";
import Description from "./Description";

export default function Main({ product, addToCart }) {
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <MainStyled>
      <Images
        images={product.images}
        setIndex={setIndex}
        index={index}
        setModal={setModal}
      />
      {modal ? (
        <Modal
          setModal={setModal}
          images={product.images}
          setIndex={setIndex}
          index={index}
        />
      ) : (
        ""
      )}
      <Description product={product} addToCart={addToCart} />
    </MainStyled>
  );
}
