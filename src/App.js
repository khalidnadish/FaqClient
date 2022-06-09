import React from "react";
import ResponsiveAppBar from "./component/Navbar/Navbar";
import { UserProvider } from "../src/helper/userContext";
import { FAQProvider } from "../src/helper/FAQContext";
import { Stack, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import MyRoutes from "./layout/MyRoutes";
import Myfooter from "./component/footer/footer";
import { BrowserRouter } from "react-router-dom";
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
      <BrowserRouter>
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
                  <MyRoutes />
                </Stack>
              </Box>
              <Myfooter />
            </ThemeProvider>
          </FAQProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}
export default App;

// export default App;
