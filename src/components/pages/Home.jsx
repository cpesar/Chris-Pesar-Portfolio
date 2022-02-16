import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    marginTop: 20,
    textAlign: "center",
    color: "blue",
    fontSize: "100px",
    fontFamily: "Roboto",
    height: 800,
    width: "96vw",
    backgroundColor: "transparent",
    border: "10px solid blue",
  },
};

function Home() {
  return (
    <div style={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={classes.paper}>
            Home Page
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={10} style={classes.paper}>
            Grid 2
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
