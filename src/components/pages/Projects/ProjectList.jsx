import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ project }) {
  if (!project || project.length === 0) {
    return <p>No Project Yet</p>;
  }
  return (
    <div className="feedback-list">
      {project.map((item) => (
        <ProjectItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProjectList;
