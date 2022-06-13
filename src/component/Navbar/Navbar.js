import React, { useState, useContext } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { UserDetail } from "../../helper/userContext";
import AddIcon from "@mui/icons-material/Add";
import FaqAddModel from "../../pages/HomeCompnent/faq/AddFaq/FaqAddModel";

import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  IconButton,
  AppBar,
  Avatar,
  Toolbar,
  Container,
  Stack,
  Fab,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { t, useTranslation } from "react-i18next";

import MySearch from "./Search";
import SettingDrawer from "../settingDrawer/SettingDrawer";
const fabStyle = {
  position: "fixed",
  bottom: 30,
  left: 16,
};

const ResponsiveAppBar = () => {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [t, i18n] = useTranslation();

  const { userName, setUserName, userAvatar } = useContext(UserDetail);
  // console.log(userAvatar);

  const settings = [
    t("nav_menu_Task"),
    t("nav_menu_price"),
    t("nav_menu_Parttime"),
  ];

  const handleaddQuastion = () => {
    setOpen(true);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setUserName("nadish");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Fab
        color="primary"
        size={"large"}
        aria-label="add"
        onClick={() => handleaddQuastion()}
        sx={fabStyle}
      >
        <AddIcon />
      </Fab>
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
              justifyContent="space-between"
              alignItems="center"
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                width: "100%",
              }}
            >
              <Stack
                direction={"row"}
                justifyContent="space-between"
                alignItems="center"
              >
                {/* <Box>
                  <Fab
                    color="primary"
                    size={"small"}
                    aria-label="add"
                    onClick={() => handleaddQuastion()}
                    sx={fabStyle}
                  >
                    <AddIcon />
                  </Fab>
                </Box> */}
                <Box>
                  <DesktopMenu handleCloseNavMenu={handleCloseNavMenu} />
                </Box>
              </Stack>

              {/* seacrh and buttn*/}
              <Stack
                direction="row"
                spacing={1}
                justifyContent={"space-between"}
                alignItems="center"
              >
                <Box>
                  <MySearch />
                </Box>
                <Box>
                  <IconButton
                    variant="contained"
                    color="warning"
                    onClick={handleOpenUserMenu}
                    aria-label="delete"
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
                <Box>
                  <IconButton onClick={() => setOpenDrawer(true)}>
                    <Avatar
                      alt={userName}
                      src={userAvatar}
                      sx={{ width: 45, height: 45 }}
                    >
                      {/* {userName} */}
                    </Avatar>
                  </IconButton>
                </Box>
              </Stack>

              {/* avtar and user name  and Language*/}

              {/* <Box>
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
                </Box> */}
              {/* <Box>
                  {i18n.language === "en" ? (
                    <ToggaleArabic />
                  ) : (
                    <ToggaleEnglish />
                  )}
                </Box> */}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <FaqAddModel open={open} setOpen={setOpen} />
      <SettingDrawer
        open={openDrawer}
        setOpen={setOpenDrawer}
        userName={userName}
      />
    </>
  );
};
export default ResponsiveAppBar;

// function ToggaleArabic({}) {
//   const [t, i18n] = useTranslation();
//   return (
//     <IconButton
//       color="primary"
//       aria-label="upload picture"
//       variant="outlined"
//       size="small"
//       onClick={() => {
//         i18n.changeLanguage("ar");
//         document.body.dir = "rtl";
//         cookie.remove("i18next");
//         cookie.set("i18next", "ar");
//       }}
//     >
//       <Avatar
//         sx={{ width: 30, height: 30 }}
//         alt="khalid nadish"
//         src={"assets/images/arFlag.svg"}
//       ></Avatar>
//     </IconButton>
//   );
// }

// function ToggaleEnglish({}) {
//   const [t, i18n] = useTranslation();
//   return (
//     <IconButton
//       color="primary"
//       size="small"
//       aria-label="upload picture"
//       variant="outlined"
//       onClick={() => {
//         i18n.changeLanguage("en");
//         document.body.dir = "ltr";
//         cookie.remove("i18next");
//         cookie.set("i18next", "en");
//       }}
//     >
//       <Avatar
//         sx={{ width: 30, height: 30 }}
//         alt="khalid nadish"
//         src={"assets/images/enFlag.svg"}
//       ></Avatar>
//     </IconButton>
//   );
// }
