import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardMedia, Divider, Stack, IconButton } from "@mui/material";

import { FaCommentSlash } from "react-icons/fa";

const cardStyle = {
  width: "100%",
  border: `3px solid #EAEAE9`,
  borderRadius: "8px",
  marginBottom: "15px",
};

export default function NoFaqCrads() {
  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Card sx={cardStyle}>
        {/* <MainCardImage /> */}
        <MainCardContent Quastion={"No Quastion"} />
      </Card>
    </Stack>
  );
}

const MainCardImage = () => {
  return (
    <>
      <CardMedia
        component="img"
        height="200px"
        image="\images\noFaqdata.png"
        alt="Paella dish"
      />
    </>
  );
};

function MainCardContent({ Quastion }) {
  return (
    <CardContent sx={{ cardStyle }}>
      <Stack
        direction={"column"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>
          <FaCommentSlash size={150} color={"#999"} />
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "2rem" }, color: "primary.light" }}
        >
          {Quastion}
        </Typography>
      </Stack>
    </CardContent>
  );
}
