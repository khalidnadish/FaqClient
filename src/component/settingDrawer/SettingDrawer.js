import React, { useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import LogoutIcon from "@mui/icons-material/Logout";
import { t, useTranslation } from "react-i18next";
import cookie from "js-cookie";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { FaUserEdit } from "react-icons/fa";

import { UserDetail } from "../../helper/context/userContext";

function SettingDrawer({ open, setOpen }) {
  const { userName, setThemeMode, themeMode, userAvatar } =
    useContext(UserDetail);
  const [toggleMode, setToggleMode] = useState(true);
  const [toggleLang, setToggleLang] = useState(true);
  const [t, i18n] = useTranslation();

  const theme1 = createTheme({
    palette: {
      mode: themeMode,
    },

    typography: {
      allVariants: {
        fontFamily: "Noto Kufi Arabic",
        fontWeight: "light",
        textTransform: "none",
        wordWrap: "break-word",
        fontSize: ".8rem",
      },
      paper: {
        background: "red",
      },
    },
  });

  const handleToggleMode = (event) => {
    setToggleMode((prev) => !event.target.checked);

    if (toggleMode) {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  const handleToggleLang = (event) => {
    setToggleLang((prev) => !event.target.checked);

    if (!toggleLang) {
      document.body.dir = "rtl";
      i18n.changeLanguage("ar");
      cookie.remove("i18next");
      cookie.set("i18next", "ar");
    } else {
      document.body.dir = "ltr";
      i18n.changeLanguage("en");
      cookie.remove("i18next");
      cookie.set("i18next", "en");
    }
  };

  return (
    <>
      <ThemeProvider theme={theme1}>
        <Drawer
          variant="temporary"
          anchor="right"
          open={open}
          role="presentation"
          onClose={() => {
            setOpen(false);
          }}
        >
          <List>
            <Box sx={{ width: "200px" }}>
              <Avatar
                sx={{
                  width: "150px",
                  height: "150px",
                  margin: "auto",
                  mb: 2,
                  mt: 2,
                  border: "2px solid lightgray",
                  // justifyContent: "center",
                  // display: "flex",
                }}
                src={userAvatar}
              ></Avatar>
            </Box>
            <Typography sx={{ textSize: "3rem" }} textAlign={"center"} mb={1}>
              {userName}
            </Typography>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>
                  <Stack
                    direction={"row"}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ListItemIcon
                      sx={{
                        "&.MuiListItemIcon-root": {
                          justifyContent: "flex-start",
                        },
                      }}
                    >
                      <LanguageIcon />
                    </ListItemIcon>
                    {toggleLang ? (
                      <typography textAlign={"left"}>
                        English Language
                      </typography>
                    ) : (
                      <typography textAlign={"left"}>
                        Arabic Language
                      </typography>
                    )}

                    <Switch color={"primary"} onChange={handleToggleLang} />
                  </Stack>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>
                  <Stack
                    direction={"row"}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ListItemIcon
                      sx={{
                        "&.MuiListItemIcon-root": {
                          justifyContent: "flex-start",
                        },
                      }}
                    >
                      {toggleMode ? <DarkModeIcon /> : <Brightness4Icon />}
                    </ListItemIcon>

                    {toggleMode ? (
                      <typography textAlign={"left"}>Night mode</typography>
                    ) : (
                      <typography textAlign={"left"}>Day mode</typography>
                    )}

                    <Switch color={"warning"} onChange={handleToggleMode} />
                  </Stack>
                </ListItemText>
              </ListItemButton>
            </ListItem>

            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FaUserEdit size={25} />
                </ListItemIcon>
                <ListItemText primary={"Update Profile"} />
              </ListItemButton>
            </ListItem>

            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </ThemeProvider>
    </>
  );
}

export default SettingDrawer;
