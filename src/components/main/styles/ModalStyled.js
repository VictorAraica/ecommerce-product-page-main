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
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ButtonStyled = styled.button`
  position: absolute;
  top: 50%;
  transform: ${({ right }) =>
    right ? "translate(50%, -50%)" : "translate(-50%, -50%)"};
  right: ${({ right }) => (right ? 0 : "")};
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  cursor: pointer;
  
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
