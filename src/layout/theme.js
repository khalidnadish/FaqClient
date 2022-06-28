import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    // mode: themeMode,
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    allVariants: {
      // fontFamily: "Noto Kufi Arabic",
      // fontWeight: "light",
      // textTransform: "none",
      wordWrap: "break-word",
      // fontSize: ".8rem",
    },
    // paper: {
    //   background: "red",
    // },
  },
});
