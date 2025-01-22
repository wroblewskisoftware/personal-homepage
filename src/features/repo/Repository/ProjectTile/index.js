import {
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledWrapper,
  StyledLabel,
  StyledUrl,
} from "./style";

const ProjectTile = ({ title, description, demoUrl, repoUrl }) => (
  <StyledContainer>
    {title && <StyledTitle>{title}</StyledTitle>}
    {description && <StyledDescription>{description}</StyledDescription>}
    {demoUrl && (
      <StyledWrapper>
        <StyledLabel>Demo:</StyledLabel>
        <StyledUrl href={demoUrl} rel="noreferrer noopener" target="_blanc">
          {demoUrl}
        </StyledUrl>
      </StyledWrapper>
    )}
    {repoUrl && (
      <StyledWrapper>
        <StyledLabel>Code:</StyledLabel>
        <StyledUrl href={repoUrl} rel="noreferrer noopener" target="_blanc">
          {repoUrl}
        </StyledUrl>
      </StyledWrapper>
    )}
  </StyledContainer>
);

export default ProjectTile;
