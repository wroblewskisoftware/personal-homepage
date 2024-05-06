import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
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
    outline: none;
  }

  &:active {
    box-shadow: 0px 2px 0px 0px #14462033 inset;
  }
`;

export const MessageParagraph = styled.p`
  font-weight: 600;
  margin: 0;
  padding-left: 16px;
`;
