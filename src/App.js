import React from "react";
import ResponsiveAppBar from "./component/Navbar/Navbar";
import { UserProvider } from "../src/helper/userContext";
import { FAQProvider } from "../src/helper/FAQContext";
import { Stack, Box, Fab } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as Sentry from "@sentry/react";
import AddIcon from "@mui/icons-material/Add";
import MyRoutes from "./layout/MyRoutes";
import Myfooter from "./component/footer/footer";
import "./App.css";

const theme = createTheme({
  typography: {
    allVariants: {
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
  return (
    <>
      <UserProvider>
        <FAQProvider>
          <ThemeProvider theme={theme}>
            <ResponsiveAppBar />
            <Box sx={{ position: "fixed", left: "3px", top: "80%" }}></Box>
            <Box m={4}>
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
        </FAQProvider>
      </UserProvider>
    </>
  );
}
export default Sentry.withProfiler(App);

// export default App;
