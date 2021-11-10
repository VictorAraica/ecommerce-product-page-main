import styled from "styled-components";

export const ThumbnailsContainerStyled = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 3%;
  @media (max-width: 890px) {
    display: none;
  }
`;

export const ThumbnailContainerStyled = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: white;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid
    ${({ theme, selected }) => (selected ? theme.colors.orange : "transparent")};
`;

export const ThumbnailStyled = styled.img`
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ selected }) => (selected ? "35%" : "100%")};
  &:hover {
    opacity: 50%;
  }
`;
