import React, { lazy, Suspense } from "react";
import { FAQProvider } from "../src/helper/context/FAQContext";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Paper } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { theme } from "./layout/theme";
import { WelcomLoader } from "./component/loader/Loader";
// import { CssVarsProvider } from "@mui/joy/styles";

const MyRoutes = lazy(() => import("./layout/MyRoutes"));

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <FAQProvider>
            <Toaster />
            <Paper>
              <Suspense fallback={<WelcomLoader />}>
                <MyRoutes />
              </Suspense>
            </Paper>
          </FAQProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
