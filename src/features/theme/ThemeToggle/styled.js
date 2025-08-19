import styled, { css } from "styled-components";
import { ReactComponent as ThemeButtonIcon } from "../../../assets/themeButtonIcon.svg";

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

export const ThemeToggleButton = styled.button`
  width: 48px;
  height: 26px;
  border: 0.5px solid ${({ theme }) => theme.color.toggleButtonBorder};
  border-radius: 13px;
  background-color: ${({ theme }) => theme.color.toggleButtonBackground};
  padding: 0 3px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    outline: none;
  }
`;

export const ThemeToggleThumb = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.toggleButtonThumb};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.25s ease-out;

  ${({ $isDarkMode }) => $isDarkMode && css`
    transform: translateX(21px);
  `}
`;

export const ThemeToggleIcon = styled(ThemeButtonIcon)`
  color: ${({ theme }) => theme.color.toggleButtonIcon};
  transition: color 0.3s ease;
`;
