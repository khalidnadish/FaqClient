import React from "react";

import { Box, styled } from "@mui/material";
import Faq from "../pages/HomeCompnent/faq/Faq";

function Rigthside() {
  const Boxwraper = styled(Box)({
    // backgroundColor: "lightblue",
  });
  return (
    <Boxwraper
      // bgcolor="lightBlue"
      p={2}
      // flex={2}
      sx={{ display: { xs: "block", sm: "block" }, maxWidth: { md: "100%" } }}
    >
      <Faq lookup={"home"} />
    </Boxwraper>
  );
}
export default Rigthside;
