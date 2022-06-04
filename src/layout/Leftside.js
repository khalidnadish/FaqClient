import React from "react";
import { Box } from "@material-ui/core";

import Profile from "../pages/HomeCompnent/profile/Profile";
import ProfileDrawer from "../component/drawer/ProfileDrawer";

function Leftside() {
  return (
    <Box
      // bgcolor="lightBlue"
      p={1}
      flex={1}
      sx={{ display: { xs: "block", sm: "block" } }}
    >
      {/* <ProfileDrawer /> */}
      <Profile />
    </Box>
  );
}

export default Leftside;
