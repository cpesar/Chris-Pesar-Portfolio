import * as React from "react";

import { Typography, Grid, Box } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";

function Resume() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            marginTop: 10,
            textAlign: "center",
            color: "white",
            backgroundColor: "transparent",
            // border: "5px solid pink",
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
            <span>
              Bachelors of Business Administration
              <br />
              Concentration: Marketing{" "}
            </span>

            <Typography gutterBottom variant="h6" color="red">
              University of Utah
            </Typography>
            <span>
              Full Stack Web Development Bootcamp <br />
              Certificate{" "}
            </span>
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
            // border: "5px solid pink",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" color="primary">
            Skills
          </Typography>

          <ComputerIcon style={{ fontSize: "80px" }} />

          {/* <Grid container spacing={2} display="flex">
            <Grid container item xs={6}>
              Front end
            </Grid>
            <Grid container item xs={6}>
              Back end
            </Grid>
          </Grid> */}
          <div>
            <Typography gutterBottom variant="h6" color="yellow">
              Front-end
            </Typography>
            <span>
              HTML5
              <br />
              CSS3
              <br />
              JavaScript
              <br />
              Reactjs
              <br />
              MaterialUI
            </span>

            <Typography gutterBottom variant="h6" color="red">
              Back-end
            </Typography>
            <span>
              MySQL
              <br />
              Node.js
              <br />
              Rest APIs
              <br />
              Express
              <br />
              MongoDB
              <br />
            </span>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Resume;
