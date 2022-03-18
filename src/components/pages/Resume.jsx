import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 10,
    marginTop: 10,
    textAlign: "center",
    height: 600,
    width: "96vw",
    color: "white",
    backgroundColor: "transparent",
  },
};

function Resume() {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            paddingTop: "100px",
            paddingBottom: "-10px",
            marginBottom: "400px",
          }}
        >
          <Paper style={classes.paper} elevation="0">
            <Typography variant="h1" fontSize="60px" marginTop={2}>
              Education
              <br />
              <SchoolIcon
                style={{
                  fontSize: "80px",
                  paddingLeft: "20px",
                  marginTop: "10px",
                }}
              />
            </Typography>

            <Typography
              color="yellow"
              variant="parograph"
              fontSize="40px"
              marginTop={2}
            >
              Towson University
            </Typography>

            <div>Bachelor of Science</div>
            <div>Business Administration</div>
            <div>Concentration: Marketing</div>

            <Typography
              color="red"
              variant="parograph"
              fontSize="40px"
              marginTop={2}
            >
              University of Utah
            </Typography>
            <div>Full Stack Web Development Bootcamp</div>
            <div>Certificate</div>
          </Paper>

          <Paper style={classes.paper} elevation="0">
            <Typography variant="h1" fontSize="60px" marginTop={2}>
              Skills
              <br />
              <ComputerIcon
                style={{
                  fontSize: "60px",
                  paddingLeft: "20px",
                  marginTop: "10px",
                }}
              />
            </Typography>

            <Typography
              color="pink"
              variant="parograph"
              fontSize="40px"
              marginTop={2}
            >
              Front-End
            </Typography>
            <Typography
              variant="parograph"
              fontSize="20px"
              color="primary"
              // fontWeight="bold"
            >
              <div>HTML5</div>
              <div>CSS3</div>
              <div>Bootstrap</div>
              <div>MaterialUI</div>
              <div>Reactjs</div>
            </Typography>

            <Typography
              color="pink"
              variant="parograph"
              fontSize="40px"
              marginTop={2}
            >
              Back-End
            </Typography>
            <Typography
              variant="parograph"
              fontSize="20px"
              color="primary"
              // fontWeight="bold"
            >
              <div>Node.js</div>
              <div>Restful APIs</div>
              <div>Express.js</div>
              <div>MySQL</div>
              <div>MongoDB</div>
              <div>AWS: Amplify, Cognito, S3</div>
              <div>Firebase: Firestore</div>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Resume;
