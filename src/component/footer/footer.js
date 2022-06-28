import React from "react";
import { Box } from "@mui/system";

function Myfooter() {
  return (
    <>
      <Box
        variant="text"
        aria-label="outlined button group"
        sx={{
          backgroundColor: "lightgray",
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: "9999",
        }}
      >
        devlopment version 1.0.2
      </Box>
    </>
  );
}

export default Myfooter;
