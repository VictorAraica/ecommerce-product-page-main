import styled from "styled-components";

export const ModalContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 30%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ImageContainerStyled = styled.div`
  position: relative;
`;

export const ImagesContainerStyled = styled.div`
  max-width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
