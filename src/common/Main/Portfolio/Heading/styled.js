import styled from "styled-components";
import { ReactComponent as GithubIcon } from "../../../../assets/githubLogo.svg";

export const StyledContainer = styled.div`
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: -2px;
  }
`;

export const StyledIcon = styled(GithubIcon)`
  height: 40px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.color.buttonBackground};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 32px;
  }
`;

export const StyledHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    margin: 0 0 16px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 20px;
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
  }
`;
