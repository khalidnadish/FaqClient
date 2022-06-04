import React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
// import "./navbar.css";

import { GiShadowFollower } from "react-icons/gi";
import { MdQuestionAnswer } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

import { VscHome } from "react-icons/vsc";

import { Toolbar } from "@mui/material";
import Search from "./Search";
import MySearch from "./Search";

export function DesktopMenu({ handleCloseNavMenu }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: {
          xs: "flex",
          md: "flex",
        },
      }}
    >
      <MenuItem onClick={handleCloseNavMenu}>
        <Typography textAlign="center">
          <Link
            style={{
              textDecoration: "none",
            }}
            to={`/${"About"}`}
          >
            {/* TODO: get color scheme from mui */}
            <VscHome size={30} color={"red"} />
            {/* {t("nav_menu_about")} */}
          </Link>
          {/* {alert("sdjkj")} */}
        </Typography>
      </MenuItem>

      <MenuItem onClick={handleCloseNavMenu}>
        <Typography textAlign="center">
          <Link
            style={{
              textDecoration: "none",
            }}
            to={`/${"Price"}`}
          >
            <GiShadowFollower size={30} />
            {/* {t("nav_menu_price")} */}
          </Link>
        </Typography>
      </MenuItem>

      <MenuItem onClick={handleCloseNavMenu}>
        <Typography textAlign="center">
          <Link
            style={{
              textDecoration: "none",
            }}
            to={`/${"Profile"}`}
          >
            <MdQuestionAnswer size={30} />
            {/* {t("nav_menu_profile")} */}
          </Link>
        </Typography>
      </MenuItem>

      <MenuItem>
        <Link
          style={{
            textDecoration: "none",
          }}
          to={`/${"Profile"}`}
        >
          <FaLayerGroup size={30} />
          {/* {t("nav_menu_profile")} */}
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          style={{
            textDecoration: "none",
          }}
          to={`/${"Profile"}`}
        >
          <FaBell size={30} />
          {/* {t("nav_menu_profile")} */}
        </Link>
      </MenuItem>
    </Box>
  );
}
