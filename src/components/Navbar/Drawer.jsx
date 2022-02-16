import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

// import { makeStyles } from "@mui/styles";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                sx={{
                  textDecoration: "none",
                  color: "blue",
                  fontSize: "20px",
                }}
                to="/"
              >
                Home
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                sx={{
                  textDecoration: "none",
                  color: "blue",
                  fontSize: "20px",
                }}
                to="/about"
              >
                About
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                sx={{
                  textDecoration: "none",
                  color: "blue",
                  fontSize: "20px",
                }}
                to="/contact"
              >
                Contact
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                sx={{
                  textDecoration: "none",
                  color: "blue",
                  fontSize: "20px",
                }}
                to="/projects"
              >
                Projects
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                sx={{
                  textDecoration: "none",
                  color: "blue",
                  fontSize: "20px",
                }}
                to="/resume"
              >
                Resume
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>

      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
