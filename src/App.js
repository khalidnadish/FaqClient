import React from "react";
import ResponsiveAppBar from "./component/Navbar/Navbar";
import { UserProvider } from "../src/helper/userContext";
import { Stack, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as Sentry from "@sentry/react";
import { useNavigate } from "react-router-dom";
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
  let navigate = useNavigate();
  return (
    <>
      <UserProvider>
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
      </UserProvider>
    </>
  );
}
export default Sentry.withProfiler(App);

// export default App;
