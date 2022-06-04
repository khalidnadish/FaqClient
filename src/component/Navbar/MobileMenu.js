import React from "react";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
// import "./navbar.css";
import { ButtonGroup, Stack } from "@mui/material";
import { t, useTranslation } from "react-i18next";
import cookie from "js-cookie";
import { FcBusinessman } from "react-icons/fc";
import ShowModel from "../basicmodal/ShowModel";
import { GiShadowFollower } from "react-icons/gi";
import { MdQuestionAnswer } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

import { VscHome } from "react-icons/vsc";

export function MobileMenu({
  handleOpenNavMenu,
  anchorElNav,
  Boolean,
  handleCloseNavMenu,
  t,
}) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: {
          xs: "flex",
          md: "none",
        },
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography textAlign="center">
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to={`/`}
            >
              {/* <VscHome /> */}

              {t("nav_menu_about")}
            </Link>
          </Typography>
        </MenuItem>

        <MenuItem onClick={handleCloseNavMenu}>
          <Typography textAlign="center">
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to={`/${"Price"}`}
            >
              {t("nav_menu_price")}
            </Link>
          </Typography>
        </MenuItem>

        <MenuItem onClick={handleCloseNavMenu}>
          <Typography textAlign="center">
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to={`/${"Profile"}`}
            >
              {t("nav_menu_profile")}
            </Link>
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
