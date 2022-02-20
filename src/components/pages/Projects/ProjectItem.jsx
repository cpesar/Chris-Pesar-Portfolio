import Card from "../../shared/Card";

// import styled from "styled-components";

// const ProjectTitle = styled.h1`
//   text-align: center,
//   textDecoration: "none",

// `;

function ProjectItem({ item }) {
  return (
    <Card>
      <div className="num-display">
        <h1>{item.title} </h1>
      </div>
      <div className="text-display">{item.description}</div>
    </Card>
  );
}

export default ProjectItem;
