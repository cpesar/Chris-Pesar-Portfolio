import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

// import styled from "styled-components";

const classes = {
  MenuIcon: {
    color: "white",
  },
};

const linkStyle = {
  margin: "1rem",
  // textDecoration: "none",
  color: "blue",
  // hover: "green",
};

// const NavUnlisted = styled.ul`
//   text-decoration: none;
// `;

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {/* <NavUnlisted> */}
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" style={linkStyle}>
                About
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact" style={linkStyle}>
                Contact
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/projects" style={linkStyle}>
                Projects
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/resume" style={linkStyle}>
                Resume
              </Link>
            </ListItemText>
          </ListItem>
        </List>
        {/* </NavUnlisted> */}
      </Drawer>

      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon style={classes.MenuIcon} />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
