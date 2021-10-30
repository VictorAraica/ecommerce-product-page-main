import styled from "styled-components";
import profileImage from "../../../images/image-avatar.png";

export const ProfileStyled = styled.div`
  background-image: url(${profileImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 3.5rem;
  width: 3.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  border-radius: 100%;
  border: 3px solid transparent;

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.orange};
  }
`;
