import { StyledSocialLink } from "./styled";

const SocialLink = ({ icon: Icon, title, href }) => (
  <StyledSocialLink
    title={title}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon />
  </StyledSocialLink>
);

export default SocialLink;
