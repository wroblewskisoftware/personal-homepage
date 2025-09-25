import {
  Container,
  CaptionParagraph,
  StyledHeader,
  LeadParagraph,
} from "./styled";
import {
  StyledLink,
  StyledIcon,
  StyledLinkParagraph,
} from "../../../common/ButtonLink/styled";

const Article = () => (
  <Container>
    <CaptionParagraph>THIS IS</CaptionParagraph>
    <StyledHeader lang="pl">Radosław Wróblewski</StyledHeader>
    <LeadParagraph>
      I am a Frontend Developer passionate about React and building
      user-friendly and visually appealing interfaces. For the last two years, I
      have dedicated myself to developing my skills in technologies like React
      (Redux, React Router, Redux Saga), JavaScript (ES6+, async/await), and CSS
      (Flexbox, Grid, RWD). I’m excited to bring my fresh perspective to your
      organization and deliver solutions that add real value.
    </LeadParagraph>
    <StyledLink
      title="wroblewskisoftware@gmail.com"
      href="mailto:wroblewskisoftware@gmail.com"
    >
      <StyledIcon />
      <StyledLinkParagraph>Hire Me</StyledLinkParagraph>
    </StyledLink>
  </Container>
);

export default Article;
