import styled from "styled-components";

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.primaryText};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  aspect-ratio: 1;
  border-radius: 26px;
  margin-right: 20px;

  &:hover {
    color: ${({ theme }) => theme.color.buttonBackground};
    outline: none;
  }
`;
