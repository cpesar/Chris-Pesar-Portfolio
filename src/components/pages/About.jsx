import React from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// import { init } from "ityped";

import styled from "styled-components";

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    marginTop: 100,
    textAlign: "center",
    color: "pink",
    fontSize: "30px",
    // fontFamily: "Roboto",
    fontWeight: "bold",
    height: 800,
    width: "96vw",
    backgroundColor: "transparent",
    // border: "1px solid white",
  },
};

const Name = styled.span`
  text-align: center;
  color: #fd8a5e;
`;

const AboutWrapper = styled.div`
  text-align: center;
  color: #00bfaf;
`;

const About = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Paper style={classes.paper}>
            <AboutWrapper>
              {" "}
              <Name>Chris</Name> grew up in Maryland and has called Utah home
              for the last seven years. Those who have worked with{" "}
              <Name>Chris</Name> know him as a detail oriented, results driven
              and passionate web developer with an extensive background in B2C
              sales, and marketing.
              <br />
              <br /> <Name>Chris</Name> recently advanced his education by
              attending the coding bootcamp at the University of Utah which
              compliments his business degree from Towson University, making him
              a well-rounded hire with a lot to offer. <br />
              <br /> When <Name>Chris</Name> is not in front of his computer
              coding you can find him on the beach or in the mountains.
            </AboutWrapper>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
