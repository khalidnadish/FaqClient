import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, Divider } from "@mui/material";
import Leftside from "../../layout/Leftside";
import Rigthside from "../../layout/Rigthside";
import CenterSide from "../../layout/CenterSide";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",

  bgcolor: "background.paper",
  overflow: "scroll",
  height: "90%",
  display: "block",
  padding: "10px",

  border: "2px solid #000",
  boxShadow: 24,

  // overflow: "scroll",
};

const styleControl = {
  // bgcolor: "lightgray",

  // borderBottom: "1px solid gray",
  boxShadow: 1,
  marginBottom: 3,
  padding: 1,
  display: "flex",
  justifyContent: "flex-end",

  // overflow: "scroll",
};

export default function ShowModel({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box sx={styleControl}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="space-around"
              divider={<Divider orientation="horizontal" />}
            >
              <Button
                size="small"
                color="error"
                variant="outlined"
                onClick={handleClose}
              >
                X
              </Button>
            </Stack>
          </Box>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="space-around"
            // sx={{ marginTop: "20px" }}
          >
            <Leftside />
            <Divider orientation="vertical" flexItem />
            <CenterSide />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
