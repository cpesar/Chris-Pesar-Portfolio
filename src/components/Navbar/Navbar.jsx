import React from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  // CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// import { makeStyles } from "@mui/styles";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

import CodeIcon from "@mui/icons-material/Code";
import DrawerComponent from "./Drawer";

const classes = {
  root: {
    flexGrow: 1,
  },
  codeIcon: {
    color: "blue",
    fontSize: "40px",
  },
  h1: {
    color: "blue",
    fontSize: "20px",
  },
  nav: {
    marginRight: 2,
    display: "flex",
    spaceBetween: 2,
    color: "white",
    fontSize: "",
  },
};

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div style={classes.root}>
      <AppBar
        sx={{
          bgcolor: "green",
        }}
        position="static"
      >
        {/* <CssBaseline /> */}
        <Toolbar>
          <Typography
            sx={{
              flexGrow: "1",
              display: "flex",
            }}
            variant="h4"
          >
            <CodeIcon style={classes.codeIcon}> </CodeIcon>
            <h1 style={classes.h1}>Chris Pesar</h1>
          </Typography>

          {isMobile ? (
            <DrawerComponent />
          ) : (
            <nav style={classes.nav}>
              <Typography
                sx={{
                  fontSize: "40px",
                  color: "white",
                }}
              >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
              </Typography>
            </nav>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
