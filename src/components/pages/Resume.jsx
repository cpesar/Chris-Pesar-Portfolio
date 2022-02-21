import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import ConstructionIcon from "@mui/icons-material/Construction";

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    marginTop: 20,
    textAlign: "center",
    color: "white",
    fontSize: "50px",
    // fontFamily: "Roboto",
    height: 800,
    width: "96vw",
    backgroundColor: "transparent",
    border: "1px solid white",
  },
};

function Resume() {
  return (
    <div style={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={classes.paper}>
            Page under construction
            <div>
              <ConstructionIcon style={{ fontSize: "60px" }} />
            </div>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={10} style={classes.paper}>
            {/* Grid 2 */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resume;
