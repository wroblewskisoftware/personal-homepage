import styled from "styled-components";

export const StyledContainer = styled.div`
  background: ${({ theme }) => theme.color.sectionBackground};
  border: 6px solid ${({ theme }) => theme.color.tileBorder};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.violet};
  box-shadow: 0px -2px 50px 0px ${({ theme }) => theme.color.haiti};
  padding: 56px 56px 48px;

  &:hover {
    border-color: ${({ theme }) => theme.color.tileBorderHover};
  }
`;

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.color.projectTileHeader};
  margin: 0 0 24px;
  font-size: 24px;
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 18px;
  margin: 0 0 24px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledLabel = styled.p`
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 18px;
  margin: 0 0 8px;
  min-width: 60px;
`;

export const StyledUrl = styled.a`
  color: ${({ theme }) => theme.color.buttonBackground};
  font-size: 18px;
  margin: 0 0 8px;
  word-break: break-word;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.linkUnderline};
`;
