import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-right: 1px;
  }
`;

export const ToggleText = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: normal;
  color: ${({ theme }) => theme.color.secondaryText};
  padding-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const ToggleButton = styled.button`
  padding: 0;
  border: none;
  border-radius: 15px;
  height: 26px;
  cursor: pointer;

  &:hover {
    outline: none;
  }
`;
