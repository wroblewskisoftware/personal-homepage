import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 119px 14px 73px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 21px 16px 48px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 72px;
  margin-right: 125px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: block;
    margin-right: 13px;
  }
`;
