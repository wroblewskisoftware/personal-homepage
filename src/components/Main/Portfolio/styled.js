import styled from "styled-components";

export const StyledArticle = styled.article`
  margin: 0 14px 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0 16px 48px;
  }
`;
