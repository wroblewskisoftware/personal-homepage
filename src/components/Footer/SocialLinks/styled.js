import styled from "styled-components";

export const StyledSocialLink = styled.a`
  color: ${({ theme }) => theme.color.primaryText};
  display: inline-flex;
  margin-right: 24px;
  transition: color 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    svg {
      width: 32px;
      height: 32px;
    }

    margin-right: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.hyperlink};
    outline: none;
  }
`;
