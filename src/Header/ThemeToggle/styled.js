import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const ToggleText = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.slateGray};
  padding-right: 12px;
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
