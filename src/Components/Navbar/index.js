import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Dropdown } from "../Dropdown";
import DrawerComp from "../Drawer";
import { useTheme, useMediaQuery } from "@mui/material";
import Style from "../../Style.module.css";
export const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            {isMatch ? (
              <>
                <Typography variant="h6" component="div">
                  <HomeIcon />
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  component="div"
                  className={Style.navbarFlex}
                >
                  <HomeIcon />
                </Typography>
                <Toolbar>
                  <Typography component="div" className={Style.navbarHeading}>
                    <NavLink to="/home" className={Style.navbarText}>
                      Home
                    </NavLink>
                  </Typography>{" "}
                  <Typography component="div" className={Style.navbarHeading}>
                    <NavLink to="/about" className={Style.navbarText}>
                      About
                    </NavLink>
                  </Typography>{" "}
                  <Typography component="div" className={Style.navbarHeading}>
                    <Dropdown />
                  </Typography>{" "}
                </Toolbar>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
