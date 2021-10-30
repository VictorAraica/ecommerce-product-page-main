import {
  ModalContainerStyled,
  ImagesContainerStyled,
  ImageContainerStyled,
} from "./styles/ModalStyled";
import React from "react";
import { ImageStyled } from "./styles/ImagesStyled";
import Thumbnails from "./Thumbnails";
import ModalButton from "./ModalButton";

export default function Modal({ images, index, setIndex, setModal }) {
  return (
    <ModalContainerStyled
      id="modal"
      onClick={(e) => setModal(!(e.target.id === "modal"))}
    >
      
      <ImagesContainerStyled>
        <ImageContainerStyled>
          {index > 0 ? (
            <ModalButton right={false} index={index} setIndex={setIndex} />
          ) : (
            ""
          )}

          <ImageStyled src={images[index].image} alt="hola" />

          {index < images.length - 1 ? (
            <ModalButton right={true} index={index} setIndex={setIndex} />
          ) : (
            ""
          )}
        </ImageContainerStyled>

        <Thumbnails images={images} setIndex={setIndex} selected={index} />
      </ImagesContainerStyled>
    </ModalContainerStyled>
  );
}
