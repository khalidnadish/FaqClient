import { useContext } from "react";
import { createTheme } from "@mui/material";
import { UserDetail } from "../helper/context/userContext";
import { purple } from "@mui/material/colors";

// const { themeMode } = useContext(UserDetail);
export const theme = createTheme({
  palette: {
    // mode: themeMode,
    // primary: {
    //   //   // Purple and green play nicely together.
    //   //   main: purple[500],
    // },
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
