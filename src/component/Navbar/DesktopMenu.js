import React from "react";
import { MenuItem, Badge, styled, Tooltip, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { GiShadowFollower } from "react-icons/gi";
import { FaBell, FaLayerGroup } from "react-icons/fa";
import { MdChatBubble } from "react-icons/md";
import { VscHome } from "react-icons/vsc";

export default function DesktopMenu() {
  const xcolor = "white";
  const underWork = () => {
    alert("under Constractn ...");
  };
  return (
    <Stack direction={"row"} justifyContent="space-between">
      <Tooltip title="Home Page">
        <MenuItem>
          <Link to={`/`}>
            <VscHome size={25} color={"red"} />
          </Link>
        </MenuItem>
      </Tooltip>
      <Tooltip title="Poeple You Follow">
        <MenuItem
          onClick={() => {
            underWork();
          }}
        >
          <Link to={`/`}>
            <GiShadowFollower size={30} color={xcolor} />
          </Link>
        </MenuItem>
      </Tooltip>
      <Tooltip title="Your Quastion">
        <MenuItem
          onClick={() => {
            underWork();
          }}
        >
          <Link to={`/`}>
            <MdChatBubble size={30} color={xcolor} />
          </Link>
        </MenuItem>
      </Tooltip>
      <Tooltip title="Workspace You Follow">
        <MenuItem
          onClick={() => {
            underWork();
          }}
        >
          <Link to={`/`}>
            <FaLayerGroup size={30} color={xcolor} />
          </Link>
        </MenuItem>
      </Tooltip>
      <Tooltip title="Notifaction">
        <MenuItem
          onClick={() => {
            underWork();
          }}
        >
          <Link to={`/`}>
            <StyledBadge badgeContent={4} color="primary">
              <FaBell size={30} color={xcolor} />
            </StyledBadge>
          </Link>
        </MenuItem>
      </Tooltip>
    </Stack>
  );
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));
