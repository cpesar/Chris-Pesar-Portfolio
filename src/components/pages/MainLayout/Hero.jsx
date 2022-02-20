import React, { useRef, useEffect } from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
// import Stack from "@mui/material/Stack";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";

import { init } from "ityped";

import styled from "styled-components";

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    marginTop: 20,
    textAlign: "center",
    // color: "#FFFFCC",
    color: "#EEEEEE",
    fontSize: "100px",
    // fontFamily: "Roboto",
    height: 800,
    width: "96vw",
    backgroundColor: "transparent",
    border: "1px solid white",
    // "&:before": {
    //   display: "none",
    // },
  },
  // paper: {
  //   paddingBottom: 10,
  //   textAlign: "center",

  //   backgroundColor: "transparent",
  // },
};

const twitterStyle = {
  margin: "2rem",
  textDecoration: "none",
  color: "#1DA1F2",
  fontSize: "50px",
  // backgroundColor: "rgba(0, 0, 0, 0.2)",
  // border: "1px solid white",
  opacity: "0.8",
};

const linkedInStyle = {
  color: "#2867B2",
  fontSize: "50px",
  margin: "2rem",
  textDecoration: "none",
  // border: "1px solid white",
  opacity: "0.8",
  // fontWeight: "bold",
};

const gitHubStyle = {
  color: "white",
  fontSize: "50px",
  margin: "2rem",
  textDecoration: "none",
  // border: "1px solid white",
  opacity: "0.8",
  // fontWeight: "bold",
  // url='https://github.com/cpesar'
};

const WordList = styled.span`
  color: #ffff00;
  fontsize: "10px";
`;

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2000,
      backSpeed: 80,
      strings: ["Human", "Friend", "Learner", "Developer", "Snowboarder"],
    });
  });
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ paddingTop: "200px", paddingBottom: "-10px" }}>
          <Typography variant="h1 align center">
            <Paper style={classes.paper}>
              <Typography variant="h2" fontSize="60px">
                Hi. I'm Chris <br />{" "}
                <span ref={textRef} style={{ color: "yellow" }}></span>
                <br />
              </Typography>
            </Paper>
          </Typography>

          <Typography variant="h5 align center">
            <Paper style={classes.paper}>
              <Typography variant="h2" fontSize="30px">
                I like to build things on the internet. <br />
              </Typography>

              <LinkedInIcon
                style={linkedInStyle}
                url="https://www.linkedin.com/in/chris-pesar/"
              />
              <GitHubIcon style={gitHubStyle} url="https://github.com/cpesar" />
              <TwitterIcon
                style={twitterStyle}
                url="https://twitter.com/_pesar_"
              />
            </Paper>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
