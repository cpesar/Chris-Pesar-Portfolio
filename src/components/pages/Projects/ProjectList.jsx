import React, { useState } from "react";
import ProjectItem from "./ProjectItem";

import styled from "styled-components";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = styled.div`
  position: relative;
  height: 50vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

function ProjectList({ projects }) {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  const nextProject = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  // console.log(current);

  const prevProject = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // console.log(current);

  if (!projects || projects.length === 0) {
    return <p>No Project Yet</p>;
  }

  return (
    <Slider>
      <FaArrowAltCircleLeft
        className="left-arrow"
        onClick={prevProject}
        key="prevProject"
        style={{
          position: "absolute",
          top: "50%",
          left: "32px",
          fontSize: "3rem",
          color: "#000",
          // z-index: '10',
          cursor: "pointer",
          border: "5px solid white",
          // user-select: none;
        }}
      />
      <FaArrowAltCircleRight
        className="right-arrow"
        onClick={nextProject}
        key="nextProject"
        style={{
          position: "absolute",
          top: "50%",
          left: "32px",
          fontSize: "3rem",
          color: "#000",
          // z-index: '10',
          cursor: "pointer",
          border: "5px solid white",
          // user-select: none;
        }}
      />
      <div className="feedback-list">
        {projects.map((item) => (
          <ProjectItem key={item.id} item={item} />
        ))}
      </div>
    </Slider>
  );
}

export default ProjectList;
