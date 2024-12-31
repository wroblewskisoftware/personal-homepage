import styled from "styled-components";

export const StyledArticle = styled.article`
  margin: 0 14px 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 48px;
  }
`;
