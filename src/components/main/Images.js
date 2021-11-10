import React from "react";
import { ImagesContainerStyled, ImageStyled, RelativeDiv } from "./styles/ImagesStyled";
import Thumbnails from "./Thumbnails";
import ImagesButton from "./ImagesButton";

export default function Images({ images, index, setIndex, setModal }) {
  return (
    <ImagesContainerStyled>
      <RelativeDiv>
        {index > 0 ? (
          <ImagesButton right={false} index={index} setIndex={setIndex} inModal={false}/>
        ) : (
          ""
        )}
        <ImageStyled
          src={images[index].image}
          alt="hola"
          onClick={() => (window.innerWidth > 890 ? setModal(true) : "")}
        />
        {index < images.length - 1 ? (
          <ImagesButton right={true} index={index} setIndex={setIndex} inModal={false}/>
        ) : (
          ""
        )}
      </RelativeDiv>
      <Thumbnails images={images} setIndex={setIndex} selected={index} />
    </ImagesContainerStyled>
  );
}
