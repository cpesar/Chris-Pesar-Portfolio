import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import DrawerComponent from "./Drawer";

const classes = {
  root: {
    flexGrow: 1,
  },
  codeIcon: {
    color: "white",
    fontSize: "40px",
  },

  nav: {
    marginRight: 2,
    display: "flex",
    spaceBetween: 2,
    color: "white",
    fontSize: "",
  },
};
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div style={classes.root}>
      <AppBar
        sx={{
          bgcolor: "transparent",
        }}
        position="static"
      >
        <Toolbar>
          <Typography
            sx={{
              flexGrow: "1",
              display: "flex",
            }}
            variant="h4"
          >
            <Link to="/">
              <CodeIcon style={classes.codeIcon}></CodeIcon>
            </Link>
          </Typography>

          {isMobile ? (
            <DrawerComponent />
          ) : (
            <NavUnlisted>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
              <Link to="/about" style={linkStyle}>
                About
              </Link>
              <Link to="/projects" style={linkStyle}>
                Projects
              </Link>
              <Link to="/contact" style={linkStyle}>
                Contact
              </Link>
              <Link to="/resume" style={linkStyle}>
                Resume
              </Link>
            </NavUnlisted>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
