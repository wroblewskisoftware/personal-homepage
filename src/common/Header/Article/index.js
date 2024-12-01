import {
  Container,
  CaptionParagraph,
  StyledHeader,
  LeadParagraph,
  MessageLink,
  MessageIcon,
  MessageParagraph,
} from "./styled";

const Article = () => (
  <Container>
    <CaptionParagraph>THIS IS</CaptionParagraph>
    <StyledHeader>Radosław Wróblewski</StyledHeader>
    <LeadParagraph>
      I am a Frontend Developer. I love using React. I am currently looking for
      an opportunity to use my skills at work. I realize that I do not have
      commercial experience, but I assure you that I make up for it with
      commitment and willingness to learn.
    </LeadParagraph>
    <MessageLink
      href="mailto:wroblewskisoftware@gmail.com"
      rel="noopener noreferrer"
    >
      <MessageIcon />
      <MessageParagraph>Hire Me</MessageParagraph>
    </MessageLink>
  </Container>
);

export default Article;
