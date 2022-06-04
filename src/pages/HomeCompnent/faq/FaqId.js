import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { BiMailSend } from "react-icons/bi";
import { MdOutlineQuickreply } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import { FcDecision } from "react-icons/fc";
import { useParams } from "react-router-dom";
import { axios } from "../../../helper/axios/axios";
import { FcBookmark } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";
import { MdBookmarkBorder } from "react-icons/md";
import FaqAnswerId from "./faqComponent/FaqAnswerId";

import {
  Container,
  Divider,
  Stack,
  Typography,
  Avatar,
  Button,
  ButtonGroup,
  Tooltip,
  Paper,
  Box,
  Badge,
} from "@mui/material";
// import Avatar from "react-avatar";
import { Image } from "@mui/icons-material";
import Loader from "../../../helper/Loader";

const Boxwraper = styled(Box)({
  backgroundColor: "whitesmoke",
  width: "100vw",
  borderRadius: "8px",
});

const ProfileBoxwraper = styled(Box)({
  backgroundColor: "whitesmoke",
  width: "100vw",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  display: { xs: "block", sm: "block" },
  // maxWidth: { md: "100%" },

  flex: "1",
  boxShadow: 24,
});

const ImagePrfile = styled(Avatar)({
  border: "1px solid gray",
  width: "150px",
  height: "150px",
  marginTop: "15px",
});

const badgeStyle = {
  "& .MuiBadge-badge": {
    fontSize: "8px",
    padding: "0px 5px",
    height: "12px",
    lineHeight: "1",
    minWidth: 0,
  },
};

function FaqId() {
  const [faqwithid, setFaqWithId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isCount, setIsCount] = useState(false);
  const [rowcount, setRowcount] = useState(0);
  const [avatar, setAvatar] = useState("");
  const param = useParams();

  const faqid = param.faqid;
  const getFaqId = async () => {
    try {
      const resposn = await axios.get(`faq/${faqid}`);
      if (resposn && resposn.data) {
        setFaqWithId(resposn.data.data);
        setIsLoading(true);
        // getAnswerCountByfaqid();
        console.log(resposn.data.data);
        // alert(rowcount[0].count);
        console.warn("row count :" + rowcount);
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const getAnswerCountByfaqid = async () => {
    try {
      const resposnCount = await axios.get(
        `faq/getAnswerCountByfaqid/${faqid}`
      );

      setRowcount(resposnCount.data.data);
      setIsCount(true);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  // console.log(faqwithid);

  useEffect(() => {
    getFaqId();
    getAnswerCountByfaqid();
  }, []);

  return (
    <>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"

          // alignItems= "center"
        >
          <ProfileBoxwraper p={2} component={Paper}>
            {isLoading ? (
              <ShowData faqwithid={faqwithid} avatar={avatar} />
            ) : (
              <Loader />
            )}

            <Divider sx={{ marginTop: "15px" }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <ButtonGroup variant="text" aria-label="text button group">
                <Tooltip title="Direct Message">
                  <Button
                    // variant="contained"
                    endIcon={
                      <BiMailSend
                        sx={{ display: "flex", justifyContent: "center" }}
                        size={20}
                      />
                    }
                  ></Button>
                </Tooltip>
                <Tooltip title="Add Reply">
                  <Button
                    // variant="contained"
                    color="success"
                    endIcon={<FcPlus />}
                  ></Button>
                </Tooltip>
                <Tooltip title="More Info">
                  <Button
                    // variant="contained"
                    // color="success"
                    endIcon={<FcInfo />}
                  ></Button>
                </Tooltip>
              </ButtonGroup>
            </Box>
          </ProfileBoxwraper>

          <Divider />

          <Boxwraper
            p={2}
            flex={4}
            sx={{
              display: { xs: "block", sm: "block" },
              maxWidth: { md: "100%" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "2px",
                marginLeft: "10px",
              }}
            >
              <Box sx={{ flex: "5%" }}>
                <FcDecision color="success" size={50} />
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ flex: "80%", width: "50%" }}>
                <Typography
                  sx={{
                    width: "50vw",
                    marginLeft: "13px",
                    marginRight: "20px",
                  }}
                >
                  {isLoading && faqwithid[0].faq}
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ flex: "5%" }}>
                {isCount ? (
                  <InformationIcon
                    howManyLike={8}
                    howManyReply={rowcount[0].rowcount}
                  />
                ) : (
                  <Loader />
                )}
              </Box>
            </Box>
            <Divider sx={{ marginTop: "15px" }} />
            {isLoading && <FaqAnswerId id={faqwithid[0].faqid} />}
          </Boxwraper>
        </Stack>
      </Container>
    </>
  );
}

export default FaqId;

const ShowData = ({ faqwithid, avatar }) => {
  return (
    <>
      <Typography sx={{ fontSize: "clamp(3.5rem,12vw+1rem,12rem)" }}>
        Creator infomation
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ImagePrfile
          alt="Remy Sharp"
          src={faqwithid[0].avatar}
          // src="images/1653400961880--water-splash-12429612.jpg"
        />
      </Box>
      <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} />
      <Typography sx={{ fontSize: "clamp(3.5rem,12vw+1rem,12rem)" }}>
        Name: <span>{faqwithid[0].username}</span>
      </Typography>
      <Typography sx={{ fontSize: "clamp(3.5rem,12vw+1rem,12rem)" }}>
        Email: <span>{faqwithid[0].email}</span>
      </Typography>
      <Typography sx={{ fontSize: "clamp(3.5rem,12vw+1rem,12rem)" }}>
        Creation: <span>{new Date(faqwithid[0].create_at).toDateString()}</span>
      </Typography>
    </>
  );
};
const InformationIcon = ({ howManyLike, howManyReply }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Badge
        badgeContent={howManyLike}
        color="secondary"
        max={999}
        sx={badgeStyle}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MdBookmarkBorder color="action" size="1em" />
      </Badge>

      <Badge
        badgeContent={howManyReply}
        color="secondary"
        max={999}
        sx={badgeStyle}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MdOutlineQuickreply color="action" size="1em" />
      </Badge>
    </Box>
  );
};
