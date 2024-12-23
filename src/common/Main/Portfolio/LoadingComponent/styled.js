import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../../../../assets/loadingIcon.svg";

export const StyledContainer = styled.div`
  text-align: center;
  margin-top: 88px;
`;

export const StyledParagraph = styled.p`
  font-size: 20px;
  margin: 0 0 48px;
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

  @keyframes all {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
