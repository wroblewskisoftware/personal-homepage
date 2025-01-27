import { nanoid } from "@reduxjs/toolkit";
import ProjectTile from "./ProjectTile";

const ProjectList = ({ repositoriesList }) => (
  <>
    {repositoriesList.length !== 0 && (
      <ul>
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
      </ul>
    )}
  </>
);
export default ProjectList;
