import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import { RiSendPlaneFill } from "react-icons/ri";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { t, useTranslation } from "react-i18next";
import cookie from "js-cookie";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { getCurrentTime } from "../../helper/regularFunction";

import { UserDetail } from "../../helper/context/userContext";

function SendDirectMsg({ open, setOpen }) {
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
            borderRadius: "15px 15px 0 0",
            marginRight: "auto",
            marginLeft: "auto",
            bgcolor: "lightyellow",
          },
        }}
        // width={"50%"}

        onClose={() => {
          setOpen(false);
        }}
      >
        <Header />
        <Divider />
        <MsgBody />
        <MsgAction />
      </Drawer>
    </>
  );
}

export default SendDirectMsg;
const MsgAction = () => {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-evenly",
          gap: 10,
          width: "70%",
          margin: "auto",
          marginBottom: "30px",
        }}
      >
        <Button
          endIcon={<RiSendPlaneFill />}
          sx={{ flex: 4 }}
          variant="contained"
          size="large"
        >
          Send
        </Button>
        <Button
          endIcon={<BackspaceIcon />}
          sx={{ flex: 1 }}
          variant="contained"
        >
          Clear
        </Button>
      </Stack>
    </>
  );
};

const MsgBody = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,

          padding: "20px",
          border: ".5px solid",
          borderColor: "warning.main",
          borderRadius: "8px",
          display: "flex",
          width: "90%",
          justifyContent: "space-evenly",
          margin: "auto",

          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <TextField
          size="small"
          required
          id="outlined-required"
          label="Subject"
          defaultValue="Hello World"
          variant="standard"
          color="warning"
          multiline
          maxRows={4}
          focused
          sx={{ width: "88%" }}
        />
      </Box>
    </>
  );
};

const titleStyle = {
  justifyContent: "space-evenly",
  alignItems: "center",
  alignContent: "flex-end",
  border: "1px solid",
  borderColor: "primary.main",
  borderRadius: "8px",
  padding: "5px",
  minWidth: "150px",
  marginRight: "20px",
};
function Header() {
  const { userName, userAvatar } = useContext(UserDetail);
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems="center"
      alignContent="flex-end"
      m={3}
      bgcolor="lighgray"
    >
      <Stack
        direction={"row"}
        divider={<Divider orientation="horizontal" />}
        sx={titleStyle}
        bgcolor={"lightyellow"}
      >
        <Box>
          <Typography mr={1} sx={{ color: "red", borderBottom: "2px solid" }}>
            FROM
          </Typography>
        </Box>

        <Box
          sx={{
            borderRight: "1px solid",
            borderColor: "primary.main",
            borderLeft: "1px solid",

            paddingRight: "5px",
            paddingLeft: "5px",
          }}
        >
          <Avatar src={userAvatar} />
        </Box>
        <Typography ml={2} mr={2}>
          {userName}
        </Typography>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent="space-evenly"
        alignItems="center"
        alignContent="flex-end"
        divider={<Divider orientation="horizontal" />}
        sx={{
          border: "1px solid ",
          borderColor: "success.main",
          borderRadius: "8px",
          padding: "5px",
          minWidth: "150px",
          marginRight: "20px",
          bgcolor: "yellow",
        }}
      >
        <Typography mr={1} sx={{ color: "red", borderBottom: "2px solid" }}>
          TO
        </Typography>
        <Box
          sx={{
            borderRight: "1px solid",
            borderLeft: "1px solid",
            borderColor: "success.main",
            paddingRight: "5px",
            paddingLeft: "5px",
          }}
        >
          <Avatar src={userAvatar} />
        </Box>
        <Typography ml={2} mr={2}>
          khalid nadish
        </Typography>
      </Stack>
      <Box sx={{ flexGrow: 1, marginRight: "20px" }}>
        <TextField
          size="small"
          required
          id="outlined-required"
          label="Subject"
          defaultValue="Hello World"
          sx={{ width: "100%" }}
          margin="normal"
        />
      </Box>
      <Box
        sx={{
          borderLeft: "1px solid",
          borderColor: "success.main",
          paddingRight: "5px",
        }}
      >
        <Box
          sx={{
            borderLeft: "1px solid",
            borderColor: "success.main",
            paddingRight: "5px",

            // minWidth: "50px",
          }}
        ></Box>
        <Typography variant="caption" ml={1}>
          {new Date(Date()).toDateString()}
        </Typography>
        <Divider orientation="horizontal" />
        <Typography variant="caption" ml={1}>
          {getCurrentTime()}
        </Typography>
      </Box>
    </Stack>
  );
}
