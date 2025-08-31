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
        <StyledItem key={element.id}>
          <StyledIcon />
          <StyledParagraph>{element.skill}</StyledParagraph>
        </StyledItem>
      ))}
    </StyledList>
  </StyledSection>
);

export default List;
