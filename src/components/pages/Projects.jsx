import React, { useState } from "react";

import ProjectData from "../data/ProjectData.js";
import ProjectList from "./Projects/ProjectList";

import styled from "styled-components";

const ProjectContainer = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 0 20px;
}
`;

function Projects() {
  const [project] = useState(ProjectData);
  return (
    <ProjectContainer>
      <ProjectList project={project} />
    </ProjectContainer>
  );
}

export default Projects;
