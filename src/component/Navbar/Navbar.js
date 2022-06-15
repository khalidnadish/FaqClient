import React, { useState, useContext } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { UserDetail } from "../../helper/context/userContext";
import AddIcon from "@mui/icons-material/Add";
import FaqAddModel from "../../pages/HomeCompnent/faq/AddFaq/FaqAddModel";
import {
  Box,
  IconButton,
  AppBar,
  Avatar,
  Toolbar,
  Container,
  Stack,
  Fab,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { t, useTranslation } from "react-i18next";

import MySearch from "./Search";
import SettingDrawer from "../settingDrawer/SettingDrawer";
import { display } from "@mui/system";
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
                <Box>
                  <DesktopMenu handleCloseNavMenu={handleCloseNavMenu} />
                </Box>
              </Stack>

              {/* seacrh and buttn*/}
              <Stack
                direction="row"
                // spacing={1}
                justifyContent={"space-between"}
                alignItems="center"
              >
                <Box flex={4}>
                  <MySearch />
                </Box>

                <Box flex={1}>
                  <IconButton
                    variant="contained"
                    color="warning"
                    onClick={handleOpenUserMenu}
                    aria-label="delete"
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>

                <Box
                  flex={1}
                  sx={{
                    display: "flex",
                    // alignContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <IconButton onClick={() => setOpenDrawer(true)}>
                    <Avatar
                      alt={userName}
                      src={userAvatar}
                      sx={{
                        width: { xs: 25, sm: 25, md: 45, lg: 45 },
                        height: { xs: 25, sm: 25, md: 45, lg: 45 },
                      }}
                    >
                      {/* {userName} */}
                    </Avatar>
                  </IconButton>
                  <Typography variant="caption">1.0</Typography>
                </Box>
              </Stack>
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
