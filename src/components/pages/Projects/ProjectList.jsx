// import React, { useState } from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ project }) {
  return (
    <div className="feedback-list">
      {project.map((item) => (
        <ProjectItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProjectList;
