import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: 20,
    marginTop: 20,
    textAlign: "center",
    color: "blue",
    fontSize: "20px",
    fontFamily: "Roboto",
    height: 80,
    // width: "96vw",
    backgroundColor: "transparent",
    border: "10px solid blue",
  },
};
function Footer() {
  return (
    <div style={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={7} sm={4}>
          <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={7} sm={4}>
          <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={7} sm={4}>
          <Paper style={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
