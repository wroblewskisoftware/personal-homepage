import styled from "styled-components";
import { ReactComponent as Icon } from "../../../assets/messageIcon.svg";

export const Container = styled.div`
  align-self: center;
`;

export const CaptionParagraph = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.secondaryText};
  margin: 0 0 12px;

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
  line-height: 1.4;
  color: ${({ theme }) => theme.color.secondaryText};
  margin: 0 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
    margin-bottom: 24px;
  }
`;

export const MessageLink = styled.a`
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
    box-shadow:
      -2px -2px 0px 0px ${({ theme }) => theme.color.buttonShadow},
      2px 2px 0px 0px ${({ theme }) => theme.color.buttonShadow},
      2px -2px 0px 0px ${({ theme }) => theme.color.buttonShadow},
      -2px 2px 0px 0px ${({ theme }) => theme.color.buttonShadow};
    outline: none;
  }

  &:active {
    box-shadow: 0px 2px 0px 0px ${({ theme }) => theme.color.parsley} inset;
  }
`;

export const MessageIcon = styled(Icon)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 20px;
    height: 20px;
  }
`;

export const MessageParagraph = styled.p`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.05em;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }
`;
