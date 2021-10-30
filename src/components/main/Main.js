import React, { useState } from "react";
import { MainStyled } from "./styles/MainStyled";
import Images from "./Images";
import Modal from "./Modal";
import Description from "./Description";

import image1 from "../../images/image-product-1.jpg";
import thumbnail1 from "../../images/image-product-1-thumbnail.jpg";

import image2 from "../../images/image-product-2.jpg";
import thumbnail2 from "../../images/image-product-2-thumbnail.jpg";

import image3 from "../../images/image-product-3.jpg";
import thumbnail3 from "../../images/image-product-3-thumbnail.jpg";

import image4 from "../../images/image-product-4.jpg";
import thumbnail4 from "../../images/image-product-4-thumbnail.jpg";

export default function Main() {
  const images = [
    { image: image1, thumbnail: thumbnail1 },
    { image: image2, thumbnail: thumbnail2 },
    { image: image3, thumbnail: thumbnail3 },
    { image: image4, thumbnail: thumbnail4 },
  ];

  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <MainStyled>
      <Images
        images={images}
        setIndex={setIndex}
        index={index}
        setModal={setModal}
      />
      {modal ? (
        <Modal
          setModal={setModal}
          images={images}
          setIndex={setIndex}
          index={index}
        />
      ) : (
        ""
      )}
      <Description />
    </MainStyled>
  );
}
