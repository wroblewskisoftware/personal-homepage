import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 72px;
  margin-top: 119px;
  margin-bottom: 14px;
`;

export const StyledImage = styled.img`
  border-radius: 50%;
`;

export const CaptionParagraph = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #6e7e91;
  margin: 0 0 12px;
`;

export const StyledHeader = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin: 0 0 35px;
`;

export const LeadParagraph = styled.p`
  line-height: 28px;
  color: #6e7e91;
  margin: 0 0 32px;
`;

export const MessageLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background-color: #0366d6;
  color: #ffffff;
  border: 1px solid #d1d5da4d;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    box-shadow:
      -2px -2px 0px 0px #8cc2ff,
      2px 2px 0px 0px #8cc2ff,
      2px -2px 0px 0px #8cc2ff,
      -2px 2px 0px 0px #8cc2ff;
  }

  &:active {
    box-shadow: 0px 2px 0px 0px #14462033 inset;
  }
`;

export const StyledParagraph = styled.p`
  font-weight: 600;
  margin: 0;
`;
