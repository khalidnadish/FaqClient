import React from "react";
import Typography from "@mui/material/Typography";

import { Box } from "@mui/system";
import { GrLike, GrDislike } from "react-icons/gr";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import useAxiosToGetData from "../../../../helper/custemHook/useAxiosToGetData";
import styled from "@emotion/styled";

const ProfileBoxwraper = styled(Box)({
  // backgroundColor: "whitesmoke",
  // width: "100%",
  borderRadius: "8px",
  // flexDirection: "row",
  justifyContent: "space-between",
  // display: "flex",

  display: { xs: "block", sm: "block" },
});

export default function FaqAnswerId({ id }) {
  const { data: faqwithid, dataIsLoading: isLoading } = useAxiosToGetData(
    `faq/AnswerByfaqid/${id}`
  );

  return (
    <>
      <Box mt={1}></Box>
      {isLoading && <ShowReplay faqdata={faqwithid} />}
    </>
  );
}

const ShowReplay = ({ faqdata }) => {
  return (
    <>
      <ProfileBoxwraper>
        {faqdata.map((faqItem, idx) => (
          <>
            <Answercard
              avatar={faqItem.avatar}
              userName={faqItem.username}
              createDate={new Date(faqItem.create_at).toDateString()}
              faq={faqItem.answer}
              rowIndex={idx}
            />
          </>
        ))}
      </ProfileBoxwraper>
    </>
  );
};

const cardStyle = {
  width: { sx: "95%", sm: "95%", md: "95%", lg: "95%" },
  // border: `.5px solid`,
  borderTop: "15px solid",
  borderColor: "success.main",
  borderRadius: "8px",
  marginBottom: "15px",
  // alignItems: "right",
  float: "right",
};

function Answercard({
  avatar,
  userName,
  createDate,
  faq,

  rowIndex,
}) {
  return (
    <>
      <Card sx={cardStyle}>
        <CardHeader
          avatar={
            <Avatar src={avatar} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <Chip
              label={rowIndex + 1}
              size="small"
              sx={{ backgroundColor: "success.light", color: "white" }}
            />
          }
          title={<Typography variant="body1">{userName}</Typography>}
          subheader={<Typography variant="caption">{createDate}</Typography>}
          // sx={{ backgroundColor: "warning.light", color: "white" }}
        />
        <Divider />

        <CardContent
          sx={{
            borderRight: "3px solid",
            borderLeft: "3px solid",
            borderColor: "success.main",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {faq}
          </Typography>
        </CardContent>
        <Divider sx={{ marginBottom: "15px" }} />
        <CardActions disableSpacing>
          <Box sx={{ marginLeft: "20px" }}>
            <GrLike color="action" size={18} />
          </Box>
          <Box sx={{ marginLeft: "20px" }}>
            <GrDislike color="action" size={18} />
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
