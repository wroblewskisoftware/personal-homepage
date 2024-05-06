import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 159px;
  align-self: start;
`;

export const ToggleText = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #6e7e91;
  padding-right: 12px;
`;

export const ToggleButton = styled.button`
  padding: 0;
  border: none;
  background-color: white;
  height: 26px;
  cursor: pointer;

  &:hover {
    outline: none;
  }
`;
