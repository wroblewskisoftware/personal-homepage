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
      I am a Frontend Developer passionate about React and building
      user-friendly and visually appealing interfaces. For the last two years, I
      have dedicated myself to developing my skills in technologies like React
      (Redux, React Router, Redux Saga), JavaScript (ES6+, async/await), and CSS
      (Flexbox, Grid, RWD). I’m excited to bring my fresh perspective to your
      organization and deliver solutions that add real value.
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
