import * as React from "react";

import { Typography, Grid, Paper } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";

const classes = {
  root: {
    flexGrow: 1,
  },
};

function Resume() {
  return (
    <div style={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              padding: 20,
              marginTop: -5,
              textAlign: "center",
              color: "white",
              height: 300,
              backgroundColor: "transparent",
            }}
          >
            <Typography variant="h2" color="primary">
              Education
            </Typography>
            <SchoolIcon style={{ fontSize: "80px" }} />

            <div>
              <Typography gutterBottom variant="h6">
                Towson University
              </Typography>
              <span>Bachelors of Business Administration</span>
              <Typography variant="h6">University of Utah</Typography>
              <span>Full stack web development bootcamp</span>
            </div>
          </Paper>
          <Paper
            sx={{
              padding: 20,
              textAlign: "center",
              color: "white",
              backgroundColor: "transparent",
            }}
          >
            <Typography variant="h2" color="primary">
              Skills
            </Typography>
            <ComputerIcon style={{ fontSize: "80px" }} />

            <div>
              <br /> <br /> Towson University{" "}
              <span>Bachelors of Business Administration</span>
              <br /> <br /> University of Utah Coding Bootcamp
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resume;
