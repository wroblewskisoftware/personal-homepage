import { nanoid } from "@reduxjs/toolkit";
import ProjectTile from "./ProjectTile";
import { StyledList } from "./styled";

const ProjectList = ({ repositoriesList }) => (
  <>
    {repositoriesList.length !== 0 && (
      <StyledList>
        {repositoriesList.map((repository) => (
          <li key={nanoid()}>
            <ProjectTile
              title={repository.name}
              description={repository.description}
              demoUrl={repository.homepage}
              repoUrl={repository.html_url}
            />
          </li>
        ))}
      </StyledList>
    )}
  </>
);
export default ProjectList;
