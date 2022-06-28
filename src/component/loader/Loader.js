import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/system";
const Loader = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
      {/* <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" /> */}
    </Box>
  );
};

export default Loader;

export const WelcomLoader = () => {
  return (
    <Box sx={{ width: "50%" }}>
      <LinearProgress color="success" />
    </Box>
  );
};
