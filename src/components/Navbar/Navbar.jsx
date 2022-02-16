import React from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";

import DrawerComponent from "./Drawer";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      sx={{
        bgcolor: "transparent",
      }}
      position="static"
    >
      <CssBaseline />
      <Toolbar>
        <Typography
          sx={{
            flexGrow: "1",
            fontSize: "20px",
            display: "flex",
            fontStyle: "oblique",
            ml: 2,
            color: "text.secondary",
          }}
          variant="h4"
        >
          <CodeIcon></CodeIcon>
          Chris Pesar
        </Typography>

        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div>
            <Typography
              sx={{
                fontSize: "50px",
                color: "text.secondary",
                display: "flex",
                cursor: "pointer",
                mr: 2,
              }}
            >
              <Typography
                sx={{
                  mr: 2,
                  fontWeight: "bold",
                  fontFamily: "Monospace",
                }}
              >
                <Link to="/">Home</Link>
              </Typography>

              <Typography
                sx={{
                  mr: 2,
                  fontWeight: "bold",
                  fontFamily: "Monospace",
                }}
              >
                <Link to="/about">About</Link>
              </Typography>

              <Typography
                sx={{
                  mr: 2,
                  fontWeight: "bold",
                  fontFamily: "Monospace",
                }}
              >
                <Link to="/projects">Projects</Link>
              </Typography>

              <Typography
                sx={{
                  mr: 2,
                  fontWeight: "bold",
                  fontFamily: "Monospace",
                }}
              >
                <Link to="/contact">Contact</Link>
              </Typography>

              <Typography
                sx={{
                  mr: 2,
                  fontWeight: "bold",
                  fontFamily: "Monospace",
                }}
              >
                <Link to="/resume">Resume</Link>
              </Typography>
            </Typography>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
