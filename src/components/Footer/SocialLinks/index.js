import { StyledLink } from "./styled";

const SocialLink = ({ icon: Icon, href }) => (
  <StyledLink href={href} target="_blank" rel="noopener noreferrer">
    <Icon />
  </StyledLink>
);

export default SocialLink;
