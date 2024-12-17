import { nanoid } from "@reduxjs/toolkit";
import {
  StyledSection,
  StyledHeader,
  StyledList,
  StyledItem,
  StyledParagraph,
} from "./styled";
import { ReactComponent as ListIcon } from "../../../assets/listIcon.svg";

const List = ({ listHeader, content }) => (
  <StyledSection>
    <StyledHeader>{listHeader}</StyledHeader>
    <StyledList>
      {content.map((element) => (
        <StyledItem key={nanoid()}>
          <ListIcon />
          <StyledParagraph>{element}</StyledParagraph>
        </StyledItem>
      ))}
    </StyledList>
  </StyledSection>
);

export default List;
