import myImage from "../images/image.jpg";
import { Container } from "./styled";
import { StyledImage } from "./styled";
import { CaptionParagraph } from "./styled";
import { StyledHeader } from "./styled";
import { LeadParagraph } from "./styled";
import { StyledButton } from "./styled";
import { ReactComponent as MessageIcon } from "../images/messageIcon.svg";
import { ButtonParagraph } from "./styled";

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
      <StyledButton>
        <MessageIcon />
        <ButtonParagraph>Hire Me</ButtonParagraph>
      </StyledButton>
    </div>
  </Container>
);

export default Header;
