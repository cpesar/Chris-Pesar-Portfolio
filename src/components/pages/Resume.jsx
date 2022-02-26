import * as React from "react";

import { Typography, Grid, Paper, Box } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";

// const classes = {
//   root: {
//     flexGrow: 1,
//   },
// };

function Resume() {
  return (
    // <div style={classes.root}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            marginTop: 10,
            textAlign: "center",
            color: "white",
            backgroundColor: "transparent",
            border: "5px solid pink",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" color="primary">
            Education
          </Typography>
          <SchoolIcon style={{ fontSize: "80px" }} />

          <div>
            <Typography gutterBottom variant="h6" color="yellow">
              Towson University
            </Typography>
            <span>Bachelors of Business Administration</span>

            <Typography gutterBottom variant="h6" color="red">
              University of Utah
            </Typography>
            <span>Full stack web development bootcamp</span>
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            marginTop: 10,
            textAlign: "center",
            color: "white",
            backgroundColor: "transparent",
            border: "5px solid pink",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" color="primary">
            Skills
          </Typography>
          <ComputerIcon style={{ fontSize: "80px" }} />

          <div>
            <Typography gutterBottom variant="h6" color="yellow">
              Towson University
            </Typography>
            <span>Bachelors of Business Administration</span>

            <Typography gutterBottom variant="h6" color="red">
              University of Utah
            </Typography>
            <span>Full stack web development bootcamp</span>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Resume;
