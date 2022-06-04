import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { ButtonGroup, IconButton, Stack } from "@mui/material";
import { t, useTranslation } from "react-i18next";
import cookie from "js-cookie";
import { FcBusinessman } from "react-icons/fc";
import ShowModel from "../basicmodal/ShowModel";
import MySearch from "./Search";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [t, i18n] = useTranslation();
  const [open, setOpen] = useState(false);

  const settings = [
    t("nav_menu_Task"),
    t("nav_menu_price"),
    t("nav_menu_Parttime"),
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const controlModel = () => {
    setOpen(true);
  };

  return (
    <AppBar
      position="sticky"
      elevation={2}
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      <Container fixed>
        <Toolbar disableGutters>
          <Stack
            direction="row"
            spacing={0.25}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
          >
            <Box>
              {/* <MobileMenu
                handleOpenNavMenu={handleOpenNavMenu}
                anchorElNav={anchorElNav}
                Boolean={Boolean}
                handleCloseNavMenu={handleCloseNavMenu}
                t={t}
              /> */}

              {/* *************************** * Desktop  */}
              <Stack
                direction="row"
                spacing={0.25}
                justifyContent={"space-between"}
                alignItems={"center"}
                // sx={{
                //   flexDirection: { xs: "row", sm: "column", md: "row" },
                // }}
              >
                <Box>
                  <IconButton>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 35, height: 35 }}
                    ></Avatar>
                  </IconButton>
                </Box>
                <Box>
                  <DesktopMenu handleCloseNavMenu={handleCloseNavMenu} />
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                // display: "flex",
                // flexGrow: 1,
                gap: 0.5,

                // alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                alignItems={"center"}
                justifyContent={"flex-start"}
              >
                <MySearch />
                <Box>
                  <Button
                    variant="contained"
                    // fullWidth={true}
                    color="warning"
                    onClick={handleOpenUserMenu}
                    sx={{
                      // height: "100%",
                      fontSize: { xs: ".7rem", sm: "1rem" },
                    }}
                    // endIcon={}
                  >
                    Quastion
                    {/* {t("nav_menu_btn")} */}
                  </Button>
                </Box>

                <Box>
                  {i18n.language === "en" ? (
                    <ToggaleArabic />
                  ) : (
                    <ToggaleEnglish />
                  )}
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

function ToggaleArabic({}) {
  const [t, i18n] = useTranslation();
  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      variant="outlined"
      size="small"
      onClick={() => {
        i18n.changeLanguage("ar");
        document.body.dir = "rtl";
        cookie.remove("i18next");
        cookie.set("i18next", "ar");
      }}
    >
      <Avatar
        sx={{ width: 20, height: 20 }}
        alt="khalid nadish"
        src={"assets/images/arFlag.svg"}
      ></Avatar>
    </IconButton>
  );
}

function ToggaleEnglish({}) {
  const [t, i18n] = useTranslation();
  return (
    <IconButton
      color="primary"
      size="small"
      aria-label="upload picture"
      variant="outlined"
      onClick={() => {
        i18n.changeLanguage("en");
        document.body.dir = "ltr";
        cookie.remove("i18next");
        cookie.set("i18next", "en");
      }}
    >
      <Avatar
        sx={{ width: 20, height: 20 }}
        alt="khalid nadish"
        src={"assets/images/enFlag.svg"}
      ></Avatar>
    </IconButton>
  );
}

{
  /* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
               </Menu> */
}
