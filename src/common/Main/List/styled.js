import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 0 14px 72px;
  padding: 32px 32px 28px;
  background: ${({ theme }) => theme.color.sectionBackground};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.violet};
  box-shadow: 0px -2px 50px 0px ${({ theme }) => theme.color.haiti};
`;

export const StyledHeader = styled.h2`
  margin: 0 0 28px;
  padding-bottom: 13px;
  border-bottom: 1px solid ${({ theme }) => theme.color.iron};
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 0.05em;
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 25.2px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.secondaryText};
  margin: 4px 24px 4px 0;
`;
