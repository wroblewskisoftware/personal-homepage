import styled from "styled-components";
import { ReactComponent as Icon } from "../assets/messageIcon.svg";

export const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.color.buttonBackground};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.iron};
  border-radius: 4px;
  text-decoration: none;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 12px;
  }

  &:hover {
    box-shadow: -2px -2px 0px 0px ${({ theme }) => theme.color.buttonShadow},
      2px 2px 0px 0px ${({ theme }) => theme.color.buttonShadow},
      2px -2px 0px 0px ${({ theme }) => theme.color.buttonShadow},
      -2px 2px 0px 0px ${({ theme }) => theme.color.buttonShadow};
    outline: none;
  }

  &:active {
    box-shadow: 0px 2px 0px 0px ${({ theme }) => theme.color.parsley} inset;
  }
`;

export const StyledIcon = styled(Icon)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledParagraph = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }
`;