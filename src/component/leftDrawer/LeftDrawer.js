import React from "react";
import Drawer from "@mui/material/Drawer";

function LeftDrawer({ open, setOpen, children }) {
  const drawerWidth = 240;
  return (
    <>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        role="presentation"
        BackdropProps={{ invisible: true }}
        // disableSwipeToOpen
        PaperProps={{
          sx: {
            width: "30%",
            // borderRadius: "8px 8px 0px 0px",
            margin: "auto",
            maxHeight: "100vh",
            // bgcolor: "error.light",
          },
        }}
        onClose={() => {
          setOpen(false);
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {children}
      </Drawer>
    </>
  );
}

export default LeftDrawer;
