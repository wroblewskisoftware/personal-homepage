import styled from "styled-components";

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.primaryText};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 26px;
  margin-right: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.buttonBackground};
    outline: none;
  }
`;
