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
import { Badge, styled } from "@mui/material";

// import { Toolbar } from "@mui/material";
// import Search from "./Search";
// import MySearch from "./Search";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    // padding: "0 4px",
  },
}));

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
            to={`/${"Home"}`}
          >
            {/* TODO: get color scheme from mui */}
            <VscHome size={30} color={"red"} />
            {/* {t("nav_menu_about")} */}
          </Link>
          {/* {alert("sdjkj")} */}
        </Typography>
      </MenuItem>
      {/* pepole you follow */}
      <MenuItem
        sx={{
          display: { md: "none", lg: "none" },
        }}
        onClick={handleCloseNavMenu}
      >
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
      {/* Groups to filer  you follow */}
      <MenuItem
        sx={{
          display: { md: "block", lg: "block" },
        }}
      >
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
          <StyledBadge badgeContent={4} color="primary">
            <FaBell size={30} />
          </StyledBadge>
          {/* {t("nav_menu_profile")} */}
        </Link>
      </MenuItem>
    </Box>
  );
}
