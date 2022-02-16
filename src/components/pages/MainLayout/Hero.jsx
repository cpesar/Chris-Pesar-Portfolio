import React, { useRef, useEffect } from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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
    color: "pink",
    fontSize: "80px",
    // fontFamily: "Roboto",
    height: 700,
    width: "96vw",
    backgroundColor: "transparent",
    // border: "1px solid white",
  },
};

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color: #ffffff;
`;

const WordList = styled.span`
  color: #ffff00;
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
        <Grid item xs={12}>
          <Title>
            <Paper style={classes.paper}>
              Hi. I'm Chris <br />{" "}
              <WordList ref={textRef}>
                <br />
              </WordList>
            </Paper>
          </Title>
        </Grid>
        <Grid item xs={12}>
          <Title>
            <Paper style={classes.paper}>
              I like to build things on the internet <br />
            </Paper>
          </Title>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
