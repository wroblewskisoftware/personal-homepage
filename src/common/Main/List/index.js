import { nanoid } from "@reduxjs/toolkit";
import {
  StyledSection,
  StyledHeader,
  StyledList,
  StyledItem,
  StyledIcon,
  StyledParagraph,
} from "./styled";

const List = ({ listHeader, content }) => (
  <StyledSection>
    <StyledHeader>{listHeader}</StyledHeader>
    <StyledList>
      {content.map((element) => (
        <StyledItem key={nanoid()}>
          <StyledIcon />
          <StyledParagraph>{element}</StyledParagraph>
        </StyledItem>
      ))}
    </StyledList>
  </StyledSection>
);

export default List;
