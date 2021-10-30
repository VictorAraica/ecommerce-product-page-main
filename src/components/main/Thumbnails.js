import React from "react";
import Thumbnail from "./Thumbnail";

import { ThumbnailsContainerStyled } from "./styles/ThumbnailsStyled";

export default function Thumbnails({ images, setIndex, selected }) {
  return (
    <ThumbnailsContainerStyled>
      {images.map((image, index) => {
        return (
          <Thumbnail
            image={image}
            setIndex={setIndex}
            index={index}
            key={index}
            selected={selected === index ? true : false}
          />
        );
      })}
    </ThumbnailsContainerStyled>
  );
}
