import React, { useState, useContext } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { UserDetail } from "../../helper/userContext";

import {
  Box,
  IconButton,
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import { t, useTranslation } from "react-i18next";
import cookie from "js-cookie";

import MySearch from "./Search";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [t, i18n] = useTranslation();

  const [userName, setUserName] = useContext(UserDetail);

  const settings = [
    t("nav_menu_Task"),
    t("nav_menu_price"),
    t("nav_menu_Parttime"),
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setUserName("nadish");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
            sx={{
              flexDirection: { xs: "column", sm: "column", md: "row" },
              width: "100%",
            }}
          >
            {/* <MobileMenu
                handleOpenNavMenu={handleOpenNavMenu}
                anchorElNav={anchorElNav}
                Boolean={Boolean}
                handleCloseNavMenu={handleCloseNavMenu}
                t={t}
              /> */}

            {/* *************************** * Desktop  */}

            <Stack
              direction={"column"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Box>
                <DesktopMenu handleCloseNavMenu={handleCloseNavMenu} />
              </Box>
            </Stack>

            {/* seacrh and buttn*/}
            <Stack
              direction="row"
              spacing={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <MySearch />
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleOpenUserMenu}
                  fullWidth
                  sx={{
                    fontSize: { xs: ".7rem", sm: "1rem" },
                  }}
                  // endIcon={}
                >
                  Add Quastion
                </Button>
              </Box>
            </Stack>

            {/* avtar and user name  and Language*/}
            <Stack
              direction="row"
              spacing={0.25}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <IconButton>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 45, height: 45 }}
                  >
                    {/* {userName} */}
                  </Avatar>
                </IconButton>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    padding: 0,
                    fontWeight: "normal",
                    fontSize: "1rem",
                  }}
                  color={"primary"}
                >
                  Welcome {userName}
                </Typography>
              </Box>
              <Box>
                {i18n.language === "en" ? (
                  <ToggaleArabic />
                ) : (
                  <ToggaleEnglish />
                )}
              </Box>
            </Stack>
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
        sx={{ width: 30, height: 30 }}
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
        sx={{ width: 30, height: 30 }}
        alt="khalid nadish"
        src={"assets/images/enFlag.svg"}
      ></Avatar>
    </IconButton>
  );
}
