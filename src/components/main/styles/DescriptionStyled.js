import styled from "styled-components";

export const DescriptionContainerstyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  max-width: 700px;
  margin: auto;

  @media (max-width: 890px) {
    margin-top: 3rem;
  }
`;

export const CompanyTitleStyled = styled.h2`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const TitleStyled = styled.h1`
  color: ${({ theme }) => theme.colors.veryVarkBlue};
  font-size: 3.5rem;
  line-height: 3.6rem;
  font-weight: 900;
  margin-bottom: 2rem;
`;

export const InfoStyled = styled.h1`
  font-size: 1.1rem;
  line-height: 1.7rem;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
`;
