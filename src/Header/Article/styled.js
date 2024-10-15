import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
`;

export const CaptionParagraph = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.slateGray};
  margin: 0 0 12px;
`;

export const StyledHeader = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin: 0 0 35px;
`;

export const LeadParagraph = styled.p`
  line-height: 28px;
  color: ${({ theme }) => theme.color.slateGray};
  margin: 0 0 32px;
`;

export const MessageLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.iron};
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    box-shadow:
     -2px -2px 0px 0px ${({ theme }) => theme.color.anakiwa},
      2px 2px 0px 0px ${({ theme }) => theme.color.anakiwa},
      2px -2px 0px 0px ${({ theme }) => theme.color.anakiwa},
      -2px 2px 0px 0px ${({ theme }) => theme.color.anakiwa};
    outline: none;
  }

  &:active {
    box-shadow: 0px 2px 0px 0px ${({ theme }) => theme.color.parsley} inset;
  }
`;

export const MessageParagraph = styled.p`
  font-weight: 600;
  margin: 0;
  padding-left: 16px;
`;
