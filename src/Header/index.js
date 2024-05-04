import myImage from "../images/image.jpg";
import { Container } from "./styled";
import { StyledImage } from "./styled";
import { CaptionParagraph } from "./styled";
import { StyledHeader } from "./styled";
import { LeadParagraph } from "./styled";
import { MessageLink } from "./styled";
import { ReactComponent as MessageIcon } from "../images/messageIcon.svg";
import { StyledParagraph } from "./styled";

const Header = () => (
  <Container>
    <StyledImage
      width="384"
      height="384"
      src={myImage}
      alt="Mężczyzna nad jeziorem"
    />
    <div>
      <CaptionParagraph>THIS IS</CaptionParagraph>
      <StyledHeader>Radosław Wróblewski</StyledHeader>
      <LeadParagraph>
        I am a Frontend Developer. I love using React. I am currently looking
        for an opportunity to use my skills at work. I realize that I do not
        have commercial experience, but I assure you that I make up for it with
        commitment and willingness to learn.
      </LeadParagraph>
      <MessageLink
        href="mailto:wroblewski082@gmail.com"
        rel="noopener noreferrer"
      >
        <MessageIcon />
        <StyledParagraph>Hire Me</StyledParagraph>
      </MessageLink>
    </div>
  </Container>
);

export default Header;
