import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Box,
  Modal,
  Button,
  Stack,
  Divider,
  Typography,
  TextField,
  Avatar,
  IconButton,
} from "@mui/material";

import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { UserDetail } from "../../../../helper/context/userContext";

import CloseIcon from "@mui/icons-material/Close";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",

  bgcolor: "background.paper",
  overflow: "scroll",
  height: "80vh",
  display: "block",
  padding: "8px",
  borderRadius: "8px",

  border: "1px solid #263238",
  boxShadow: 24,

  overflow: "none",
};

const barStyleControl = {
  bgcolor: "warning.light",
  borderRadius: "8px",
  boxShadow: 1,
  marginBottom: 3,
  padding: 1,
  // display: "flex",
  justifyContent: "space-between",
};

const infotStyleControl = {
  bgcolor: "background.paper",

  width: "95%",
  margin: "auto",
  boxShadow: 1,
  padding: 2,
  justifyContent: "space-between",
  textAlign: "right",
  marginBottom: "10px",
  border: "1px solid gray",

  // justifyContent: "flex-end",
};

const styleBtn = {
  bgcolor: "warning.main",
  color: "background.paper",

  boxShadow: 1,

  padding: 1,
};

const contentStyleControl = {
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "warning.light",
  width: "95%",
  margin: "auto",
  boxShadow: 1,

  padding: 1,
  // display: "flex",
};

const quastionStyle = {
  color: "background.paper",
  textAlign: "right",
  width: "100%",
  padding: 1,
  margin: "5px",
  "&.:hover": {
    background: "#FAFAFA",
    outline: "1px solid #EEEEEE",
  },
};

export default function FaqAddModel({ open, setOpen }) {
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
        <Box sx={modalStyle}>
          {/* Top bar Style */}
          <TopBar
            barStyleControl={barStyleControl}
            handleClose={handleClose}
            styleBtn={styleBtn}
          />
          <InfoArea sx={{ display: { xs: "none" } }} />
          <ContentArea />
        </Box>
      </Modal>
    </div>
  );
}

function TopBar({ barStyleControl, handleClose, styleBtn }) {
  const { userAvatar } = useContext(UserDetail);
  return (
    <Box sx={barStyleControl}>
      <Stack
        id="parentStack"
        direction={"row"}
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Avatar src={userAvatar}></Avatar>
        </Box>
        <Box>
          <Button
            size="small"
            onClick={handleClose}
            sx={styleBtn}
            endIcon={<CloseIcon />}
          >
            Close
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

function InfoArea() {
  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
      <Stack
        direction={"row"}
        gap={3}
        justifyContent="space-between"
        divider={<Divider orientation="horizontal" />}
        sx={infotStyleControl}
      >
        <Typography variant="caption">
          تأكد من أن سؤالك لم يتم طرحه من قبل
        </Typography>
        <Typography variant="caption">
          يجب أن يكون سؤالك قصيرًا وواضحًا
        </Typography>
        <Typography variant="caption">
          تحقق من قواعد اللغة والإملاء واستخدم اللغة العربية الفصحى الحديثة
        </Typography>
      </Stack>
    </Box>
  );
}

function ContentArea() {
  const [quastion, setQuastion] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const faqRef = useRef();

  const handleOnchange = (e) => {
    setQuastion(e.target.value);
    setWordCount(e.target.value.length);
  };
  useEffect(() => {
    faqRef.current.focus();
  }, []);

  return (
    <>
      <Box sx={contentStyleControl}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          // spacing={2}
          justifyContent="space-between"
          divider={<Divider orientation="horizontal" />}
        >
          <TextField
            ref={faqRef}
            id="faq"
            required
            variant="standard"
            multiline
            maxRows={4}
            label="Tell me ? "
            value={quastion}
            sx={quastionStyle}
            onChange={(e) => {
              handleOnchange(e);
            }}
          />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          sx={{ paddingLeft: "15px", paddingRight: "15px" }}
        >
          <Box>
            <Stack
              direction={"row"}
              divider={<Divider orientation="vertical" flexItem />}
              gap={1}
            >
              <IconButton aria-label="">
                <AddPhotoAlternateOutlinedIcon />
              </IconButton>

              <IconButton aria-label="">
                <LocalOfferOutlinedIcon />
              </IconButton>
            </Stack>
          </Box>
          <Box>
            <Typography
              variant="caption"
              sx={{ fontWeight: "normal", marginLeft: "12px" }}
            >
              chracter count :{wordCount}
            </Typography>
          </Box>
        </Stack>
      </Box>
      <ActionArea setQuastion={setQuastion} />
    </>
  );
}

function ActionArea({ setQuastion }) {
  return (
    <>
      <Box
        sx={{
          marginTop: "20px",
          position: "fixed",
          bottom: "19px",
          marginLeft: "20px",
          width: "100%",
        }}
      >
        <Stack direction={"row"} justifyContent="space-evenly">
          <Box flex={3}>
            <Button variant="outlined" fullWidth endIcon={<CheckCircleIcon />}>
              Submit
            </Button>
          </Box>
          <Box flex={5}>
            <Button
              endIcon={<BackspaceOutlinedIcon />}
              variant="outlined"
              color="warning"
              onClick={() => {
                setQuastion("");
              }}
              sx={{ marginLeft: "10px" }}
            >
              Clear
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

const handleEnter = (event) => {
  if (event.key.toLowerCase() === "enter") {
    const form = event.target.form;
    const index = [...form].indexOf(event.target);
    form.elements[index + 1].focus();
    event.preventDefault();
  }
};
