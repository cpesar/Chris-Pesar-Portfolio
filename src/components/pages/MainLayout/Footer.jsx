import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: 20,
    // marginTop: 20,
    // marginBottom: 20,
    paddingBottom: 10,
    textAlign: "center",
    // flexGrow: 1,
    // color: "white",
    // fontSize: "60px",
    // fontFamily: "Roboto",
    // height: 80,
    // width: "96vw",
    backgroundColor: "transparent",
    // border: "1px solid white",
    // spaceBetween: 2,
  },
};

const twitterStyle = {
  margin: "2rem",
  textDecoration: "none",
  color: "#1DA1F2",
  fontSize: "50px",
};

const linkedInStyle = {
  color: "#2867B2",
  fontSize: "50px",
  margin: "2rem",
  textDecoration: "none",
  // fontWeight: "bold",
};

const gitHubStyle = {
  color: "#6e5494",
  fontSize: "50px",
  margin: "2rem",
  textDecoration: "none",
  // fontWeight: "bold",
  // url='https://github.com/cpesar'
};

function Footer() {
  return (
    <div style={classes.root}>
      <Grid container spacing={12}>
        <Grid item xs={7} sm={4} xl={12}>
          <Paper style={classes.paper}>
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
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
