import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import DropdownCss from "../../DropdownCss.module.css";

export const Dropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Typography variant="h6" className={DropdownCss.navbarHeading}>
          Info
        </Typography>{" "}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <NavLink to="/profile" className={DropdownCss.navbarMenu}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </NavLink>
        <NavLink to="/account" className={DropdownCss.navbarMenu}>
          <MenuItem onClick={handleClose}>Account</MenuItem>
        </NavLink>
      </Menu>
    </div>
  );
};
