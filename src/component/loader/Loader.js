import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/system";
function Loader() {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
      {/* <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" /> */}
    </Box>
  );
}

export default Loader;
