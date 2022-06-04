import React from "react";
import ResponsiveAppBar from "./component/Navbar/Navbar";

import Container from "@mui/material/Container";

import { Grid, Stack } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import * as Sentry from "@sentry/react";

import { useNavigate } from "react-router-dom";

import "./App.css";

import Leftside from "./layout/Leftside";
import CenterSide from "./layout/CenterSide";
import Rigthside from "./layout/Rigthside";
import { Box } from "@mui/system";
import MyRoutes from "./layout/MyRoutes";
import ProfileDrawer from "./component/drawer/ProfileDrawer";
import Myfooter from "./component/footer/footer";

const theme = createTheme({
  typography: {
    allVariants: {
      // fontFamily: "Nunito",

      fontFamily: "Noto Kufi Arabic",
      fontWeight: "bold",
      textTransform: "none",
      wordWrap: "break-word",
      // fontSize: 16,
    },
    paper: {
      background: "red",
    },
  },
});

function App() {
  let navigate = useNavigate();
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />

        <Box>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            justifyContent="center"
          >
            {/* <Leftside /> */}
            {/* <CenterSide /> */}
            <MyRoutes />
            {/* <Rigthside /> */}
          </Stack>
        </Box>
        <Myfooter />
      </ThemeProvider>
    </>
  );
}
export default Sentry.withProfiler(App);

// export default App;
