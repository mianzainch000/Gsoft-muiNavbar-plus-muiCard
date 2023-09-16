import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { Dropdown } from "../Dropdown";
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                {" "}
                <Typography variant="h6" component="div">
                  <NavLink to="/home" className="nav   drawerHeading">
                    Home
                  </NavLink>
                </Typography>{" "}
                <Typography variant="h6" component="div">
                  <NavLink to="/about" className="nav drawerHeading">
                    About
                  </NavLink>
                </Typography>{" "}
                <Typography variant="h6" component="div">
                  <Dropdown />
                </Typography>{" "}
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ color: "white;", marginLeft: "auto;" }}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
