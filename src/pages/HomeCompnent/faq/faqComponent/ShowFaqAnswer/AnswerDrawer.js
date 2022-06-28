import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import FaqId from "../../FaqId";

function AnswerDrawer({ open, setOpen, faqid }) {
  return (
    <>
      <Drawer
        variant="temporary"
        anchor="bottom"
        open={open}
        role="presentation"
        BackdropProps={{ invisible: true }}
        // disableSwipeToOpen
        PaperProps={{
          sx: {
            width: "90%",
            borderRadius: "8px 8px 0px 0px",
            margin: "auto",
            // marginRight: "auto",
            // marginLeft: "auto",
            maxHeight: "95vh",
            bgcolor: "background.paper",
          },
        }}
        // width={"50%"}

        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={{ width: "100%" }}>
          <FaqId faqid={faqid} />
        </Box>

        {/* <MsgAction /> */}
      </Drawer>
    </>
  );
}

export default AnswerDrawer;
