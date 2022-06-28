import React, { useState, useContext, lazy, Suspense } from "react";
import { UserDetail } from "../../helper/context/userContext";
import AddIcon from "@mui/icons-material/Add";
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

const Loader = lazy(() => import("../loader/Loader"));
const SettingDrawer = lazy(() => import("../settingDrawer/SettingDrawer"));

const FaqAddModel = lazy(() =>
  import("../../pages/home/faq/AddFaq/FaqAddModel")
);

const DesktopMenu = lazy(() => import("./DesktopMenu"));
const fabStyle = {
  position: "fixed",
  bottom: 30,
  left: 16,
};

const Navbar = () => {
  console.log("Navbar render");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [t, i18n] = useTranslation();

  const { userName, setUserName, userAvatar } = useContext(UserDetail);

  const settings = [
    t("nav_menu_Task"),
    t("nav_menu_price"),
    t("nav_menu_Parttime"),
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setUserName("nadish");
  };

  return (
    <>
      <AddFaqButton />
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <Container fixed>
          <Toolbar disableGutters>
            <Stack
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                width: "100%",
                justifyContent: "space-between",
                gap: { md: 3 },
              }}
            >
              <Suspense fallback={<Loader />}>
                <DesktopMenu />
              </Suspense>

              {/* seacrh and buttn*/}
              <Stack
                direction="row"
                justifyContent={"space-between"}
                alignItems="center"
                sx={{ flexGrow: 1 }}
              >
                <MySearch />

                <IconButton
                  variant="outlined"
                  sx={{ color: "background.paper", bgcolor: "primary.light" }}
                  onClick={handleOpenUserMenu}
                  aria-label="search"
                  size="small"
                >
                  <SearchIcon />
                </IconButton>

                <Box
                  flex={1}
                  sx={{
                    display: "flex",

                    alignItems: "center",
                  }}
                >
                  <IconButton onClick={() => setOpenDrawer(true)}>
                    <Avatar
                      alt={userName}
                      src={userAvatar}
                      sx={{
                        width: { xs: 33, sm: 33, md: 45, lg: 45 },
                        height: { xs: 33, sm: 33, md: 45, lg: 45 },
                        border: "1.5px solid white",
                      }}
                    />
                  </IconButton>
                </Box>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Suspense fallback={<Loader />}>
        <SettingDrawer
          open={openDrawer}
          setOpen={setOpenDrawer}
          userName={userName}
        />
      </Suspense>
    </>
  );
};
export default Navbar;

const AddFaqButton = () => {
  const [open, setOpen] = useState(false);
  const handleaddQuastion = () => {
    setOpen(true);
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
      <Suspense fallback={<Loader />}>
        <FaqAddModel open={open} setOpen={setOpen} />
      </Suspense>
    </>
  );
};
