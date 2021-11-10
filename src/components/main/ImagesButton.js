import React from "react";
import { ImagesButtonStyled } from "./styles/ImagesStyled";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function ImagesButton({ right, index, setIndex, inModal }) {
  const style = { fontSize: "1.7em" };

  const onClick = () => {
    if (right) {
      setIndex(index + 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <ImagesButtonStyled right={right} onClick={onClick} inModal={inModal}>
      {right ? (
        <HiChevronRight style={style} />
      ) : (
        <HiChevronLeft style={style} />
      )}
    </ImagesButtonStyled>
  );
}
