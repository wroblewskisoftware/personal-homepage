import styled from "styled-components";

export const StyledImage = styled.img`
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 128px;
    height: 128px;
    margin-bottom: 16px;
  }
`;
