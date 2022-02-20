import React, { useState } from "react";

import ProjectData from "../../data/ProjectData.js";
import ProjectList from "./Projects/ProjectList";

import {
  // Button,
  // CardActionArea,
  // CardActions,
  Card,
  Grid,
  // CardContent,
  // CardMedia,
  // // CardHeader,
  // Typography,
  // Divider,
} from "@mui/material";

function Projects() {
  const [project, setProject] = useState(ProjectData);
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid>
        <Card sx={{ maxWidth: 500, marginTop: 15, marginRight: 2 }}>
          <ProjectList project={project} />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Projects;
