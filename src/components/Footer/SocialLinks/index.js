import { StyledSocialLink } from "./styled";

const SocialLink = ({ icon: Icon, href }) => (
  <StyledSocialLink href={href} target="_blank" rel="noopener noreferrer">
    <Icon />
  </StyledSocialLink>
);

export default SocialLink;
