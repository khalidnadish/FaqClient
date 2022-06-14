import React, { useContext } from "react";
import { UserDetail } from "./helper/userContext";
import ResponsiveAppBar from "./component/Navbar/Navbar";
import { purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { FAQProvider } from "../src/helper/FAQContext";
import { Stack, Box, CssBaseline, Paper } from "@mui/material";

import MyRoutes from "./layout/MyRoutes";
import Myfooter from "./component/footer/footer";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  const { themeMode } = useContext(UserDetail);
  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        // Purple and green play nicely together.
        main: purple[500],
      },
    },
    typography: {
      allVariants: {
        fontFamily: "Noto Kufi Arabic",
        fontWeight: "light",
        textTransform: "none",
        wordWrap: "break-word",
        // fontSize: ".8rem",
      },
      paper: {
        background: "red",
      },
    },
  });

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <FAQProvider>
            {/* <Paper> */}
            <ResponsiveAppBar />
            <Box sx={{ position: "fixed", left: "3px", top: "80%" }}></Box>
            <Box m={4}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                justifyContent="center"
              >
                <MyRoutes />
              </Stack>
            </Box>
            <Myfooter />
            {/* </Paper> */}
          </FAQProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
export default App;

// export default App;
