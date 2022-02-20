import React from "react";
import ProjectItem from "./ProjectItem";

// import Carousel from "react-material-ui-Carousel";
// import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
// import Carousel from "react-multi-carousel";

function ProjectList({ project }) {
  if (!project || project.length === 0) {
    return <p>No Project Yet</p>;
  }
  return (
    <div className="feedback-list">
      {/* <Carousel className="carousel" autoplay={true} animation="slide"> */}
      {project.map((item) => (
        <ProjectItem key={item.id} item={item} />
      ))}
      {/* </Carousel> */}
    </div>
  );
}

export default ProjectList;
