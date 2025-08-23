import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
`;

export const CaptionParagraph = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: normal;
  color: ${({ theme }) => theme.color.secondaryText};
  margin: 0 0 12px;
  transition: color 10s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 8px;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin: 0 0 35px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 16px;
    font-size: 22px;
  }
`;

export const LeadParagraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.secondaryText};
  margin: 0 0 32px;
  transition: color 10s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
    margin-bottom: 24px;
  }
`;
