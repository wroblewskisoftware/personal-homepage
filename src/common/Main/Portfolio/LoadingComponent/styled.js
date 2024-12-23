import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../../../../assets/loadingIcon.svg";

export const StyledContainer = styled.div`
  text-align: center;
  margin-top: 88px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 60px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 20px;
  margin: 0 0 48px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
    margin-bottom: 32px;
  }
`;

export const Icon = styled(LoadingIcon)`
  animation: 2s all linear infinite;
  margin-bottom: 20px;

  circle {
    stroke: ${({ theme }) => theme.color.loadingCircle};
  }

  path {
    stroke: ${({ theme }) => theme.color.loadingCirclePart};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 112px;
    margin-bottom: 8px;
  }

  @keyframes all {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
