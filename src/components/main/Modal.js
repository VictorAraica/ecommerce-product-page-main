import {
  ModalContainerStyled,
  ImagesContainerStyled,
  ImageContainerStyled,
} from "./styles/ModalStyled";
import React from "react";
import { ImageStyled } from "./styles/ImagesStyled";
import Thumbnails from "./Thumbnails";
import ImagesButton from "./ImagesButton";

export default function Modal({ images, index, setIndex, setModal }) {
  return (
    <ModalContainerStyled
      id="modal"
      onClick={(e) => setModal(!(e.target.id === "modal"))}
    >
      <ImagesContainerStyled>
        <ImageContainerStyled>
          {index > 0 ? (
            <ImagesButton
              right={false}
              index={index}
              setIndex={setIndex}
              inModal={true}
            />
          ) : (
            ""
          )}

          <ImageStyled src={images[index].image} alt="hola" />

          {index < images.length - 1 ? (
            <ImagesButton
              right={true}
              index={index}
              setIndex={setIndex}
              inModal={true}
            />
          ) : (
            ""
          )}
        </ImageContainerStyled>

        <Thumbnails images={images} setIndex={setIndex} selected={index} />
      </ImagesContainerStyled>
    </ModalContainerStyled>
  );
}
