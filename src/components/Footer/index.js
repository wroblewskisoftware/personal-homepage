import {
  StyledFooter,
  StyledCaption,
  StyledLink,
  StyledParagraph,
} from "./styled";
import SocialLink from "./SocialLinks";
import { ReactComponent as GithubLogo } from "../../assets/githubLogo.svg";
import { ReactComponent as FacebookLogo } from "../../assets/facebookLogo.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedInLogo.svg";

const Footer = () => (
  <StyledFooter>
    <StyledCaption>LET’S TALK!</StyledCaption>
    <StyledLink href="mailto:wroblewskisoftware@gmail.com">
      wroblewskisoftware@gmail.com
    </StyledLink>
    <StyledParagraph>
      I'm open to new, inspiring projects. If you have an idea for a website,
      dashboard, or mobile app and you're looking for someone to help turn your
      vision into reality - I'm at your disposal. Let's talk about how I can
      help you achieve your business goals.
    </StyledParagraph>
    <SocialLink
      icon={GithubLogo}
      href="https://github.com/wroblewskisoftware"
    />
    <SocialLink
      icon={FacebookLogo}
      href="https://facebook.com/radoslaw.wroblewskii"
    />
    <SocialLink
      icon={LinkedInLogo}
      href="https://linkedin.com/in/wroblewskisoftware/"
    />
  </StyledFooter>
);

export default Footer;
