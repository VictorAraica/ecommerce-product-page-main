import React from "react";
import { ButtonStyled } from "./styles/ModalStyled";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function ModalButton({ right, index, setIndex }) {
  const style = { fontSize: "1.7em" };

  const onClick = () => {
    if (right) {
      setIndex(index + 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <ButtonStyled right={right} onClick={onClick}>
      {right ? (
        <HiChevronRight style={style} />
      ) : (
        <HiChevronLeft style={style} />
      )}
    </ButtonStyled>
  );
}
