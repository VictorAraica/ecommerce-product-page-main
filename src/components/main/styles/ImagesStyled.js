import styled from "styled-components";

export const ImagesContainerStyled = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  padding: 0 10%;
  max-width: 600px;
`;

export const ImageStyled = styled.img`
  width: 100%;
  border-radius: 1rem;
  cursor: pointer;

  @media (max-width: 890px) {
    cursor: default;
  }
`;

export const RelativeDiv = styled.div`
  position: relative;
  margin: auto;
`;

export const ImagesButtonStyled = styled.button`
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

  display: ${({ inModal }) => (inModal ? "block" : "none")};

  @media (max-width: 890px) {
    transform: ${({ right }) =>
      right ? "translate(-25%, -50%)" : "translate(25%, -50%)"};
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
  }

  @media (max-width: 410px) {
    transform: ${({ right }) =>
      right ? "translate(-25%, -50%)" : "translate(25%, -50%)"};
    width: 2rem;
    height: 2rem;
  }
`;
