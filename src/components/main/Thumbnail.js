import React from "react";
import {
  ThumbnailStyled,
  ThumbnailContainerStyled,
} from "./styles/ThumbnailsStyled";

export default function Thumbnail({ image, setIndex, index, selected }) {
  return (
    <ThumbnailContainerStyled selected={selected}>
      <ThumbnailStyled
        src={image.thumbnail}
        alt="thumbnail"
        onClick={() => setIndex(index)}
        selected={selected}
      />
    </ThumbnailContainerStyled>
  );
}
