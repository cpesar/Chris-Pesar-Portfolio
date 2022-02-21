import React, { useState } from "react";

import ProjectData from "../../data/ProjectData.js";
import ProjectList from "./Projects/ProjectList";

// import styled from "styled-components";

import ConstructionIcon from "@mui/icons-material/Construction";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// const ProjectContainer = styled.div`
//   max-width: 768px;
//   margin: auto;
//   padding: 0 20px;
// }
// `;

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    marginTop: 100,
    textAlign: "center",
    color: "white",
    fontSize: "60px",
    // fontFamily: "Roboto",
    fontWeight: "bold",
    height: 800,
    width: "96vw",
    backgroundColor: "transparent",
    // border: "1px solid white",
  },
};

function Projects() {
  const [project, setProject] = useState(ProjectData);
  return (
    // <ProjectContainer>
    //   <ProjectList project={project} />
    // </ProjectContainer>

    <div style={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={classes.paper}>
            Page under construction
            <div>
              <ConstructionIcon style={{ fontSize: "60px" }} />
            </div>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={10} style={classes.paper}>
            {/* Grid 2 */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
