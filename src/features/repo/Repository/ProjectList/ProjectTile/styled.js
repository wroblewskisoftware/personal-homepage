import styled from "styled-components";

export const StyledContainer = styled.section`
  background-color: ${({ theme }) => theme.color.sectionBackground};
  border: 6px solid ${({ theme }) => theme.color.tileBorder};
  box-shadow:
    0px 16px 58px 0px ${({ theme }) => theme.color.violet},
    0px -2px 50px 0px ${({ theme }) => theme.color.haiti};
  padding: 56px 56px 48px;
  height: 100%;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.tileBorderHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 24px 24px 14px;
    margin-bottom: 16px;
  }
`;

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.color.projectTileHeader};
  margin: 0 0 24px;
  font-size: 24px;
  transition: color 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    margin: 0 0 16px;
  }
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 18px;
  margin: 0 0 24px;
  transition: color 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 1.2;
    margin: 0 0 16px;
  }
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
  transition: color 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    margin: 0 0 10px;
    min-width: 47px;
  }
`;

export const StyledUrl = styled.a`
  color: ${({ theme }) => theme.color.hyperlink};
  font-size: 18px;
  margin: 0 0 8px;
  word-break: break-word;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.hyperlinkUnderline};
  transition: color 0.3s ease, border-bottom-color 0.3s ease;

  &:hover {
    border-bottom: 1px solid
      ${({ theme }) => theme.color.hyperlinkUnderlineHover};
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    margin: 0 0 10px;
  }
`;
