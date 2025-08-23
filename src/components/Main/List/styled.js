import styled from "styled-components";
import { ReactComponent as ListIcon } from "../../../assets/listIcon.svg";

export const StyledSection = styled.section`
  margin: 0 14px 72px;
  padding: 32px 32px 28px;
  background-color: ${({ theme }) => theme.color.sectionBackground};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.violet};
  box-shadow: 0px -2px 50px 0px ${({ theme }) => theme.color.haiti};
  transition: background-color 10s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 16px 16px 12px;
    margin-bottom: 50px;
  }
`;

export const StyledHeader = styled.h2`
  margin: 0 0 28px;
  padding-bottom: 13px;
  border-bottom: 1px solid ${({ theme }) => theme.color.iron};
  font-size: 30px;
  font-weight: 900;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    padding-bottom: 12px;
    margin-bottom: 8px;
  }
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 6px;
  }
`;

export const StyledIcon = styled(ListIcon)`
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 6px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color.secondaryText};
  margin: 4px 24px 4px 0;
  /* transition: color 10s ease;         nie chce działać */

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    margin-right: 0;
  }
`;
