import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin: 0 14px 109px;
`;

export const StyledCaption = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: normal;
  color: ${({ theme }) => theme.color.secondaryText};
  margin: 0 0 24px;
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.primaryText};
  text-decoration: none;
  font-size: 32px;
  font-weight: 900;

  &:hover {
    color: ${({ theme }) => theme.color.buttonBackground};
    outline: none;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  max-width: 670px;
  margin: 24px 0 56px;
`;
