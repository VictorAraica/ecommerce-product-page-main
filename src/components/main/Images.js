import React from "react";
import { ImagesContainerStyled, ImageStyled } from "./styles/ImagesStyled";
import Thumbnails from "./Thumbnails";

export default function Images({ images, index, setIndex, setModal }) {
  return (
    <ImagesContainerStyled>
      <ImageStyled
        src={images[index].image}
        alt="hola"
        onClick={() => setModal(true)}
      />
      <Thumbnails images={images} setIndex={setIndex} selected={index} />
    </ImagesContainerStyled>
  );
}
