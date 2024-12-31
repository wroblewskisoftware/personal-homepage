import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../../../assets/errorIcon.svg";

export const StyledContainer = styled.div`
  text-align: center;
  margin-top: 88px;
  padding-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 60px;
    padding-bottom: 8px;
  }
`;

export const StyledIcon = styled(ErrorIcon)`
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 40px;
    margin-bottom: 12px;
  }
`;

export const StyledHeader = styled.h3`
  margin: 0 0 32px;
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 20px;
  margin: 0 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
    margin-bottom: 24px;
  }
`;
