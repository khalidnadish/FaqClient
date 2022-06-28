import React, { lazy, Suspense } from "react";
import { MdOutlineQuickreply, MdBookmarkBorder } from "react-icons/md";

import useAxiosToGetData from "../../../helper/custemHook/useAxiosToGetData";
import { Card, CardHeader, CardContent, Avatar } from "@mui/material";

import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import {
  Container,
  Divider,
  Typography,
  Box,
  Badge,
  Fab,
  AppBar,
  Toolbar,
} from "@mui/material";

const Loader = lazy(() => import("../../../component/loader/Loader.js"));
const FaqAnswerId = lazy(() => import("../faq/FaqAnswerId"));

function FaqId({ faqid }) {
  const { data: faqwithid, dataIsLoading: isLoading } = useAxiosToGetData(
    `faq/${faqid}`
  );

  const { data: rowCount, dataIsLoading: isRrowCount } = useAxiosToGetData(
    `faq/getAnswerCountByfaqid/${faqid}`
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={3}
        dense
        sx={{
          backgroundColor: "background.paper",
        }}
      >
        <Container fixed>
          <Toolbar dense>
            <Container sx={{ marginTop: "15px", marginBottom: "15px" }}>
              {isLoading && (
                <QuastionCard
                  avatar={faqwithid[0].avatar}
                  userName={faqwithid[0].username}
                  createDate={new Date(faqwithid[0].create_at).toDateString()}
                  faq={faqwithid[0].faq}
                  replaycount={isRrowCount && rowCount[0].rowcount}
                  likecount={10}
                  sx={{ marginTop: "15px" }}
                />
              )}
            </Container>
          </Toolbar>
        </Container>
      </AppBar>

      <Container>
        <Suspense fallback={<Loader />}>
          {isLoading ? <FaqAnswerId id={faqwithid[0].faqid} /> : <Loader />}
        </Suspense>
      </Container>
    </>
  );
}

export default FaqId;

function QuastionCard({
  avatar,
  userName,
  createDate,
  faq,
  replaycount,
  likecount,
}) {
  return (
    <Card
      sx={{
        bgcolor: "bacground.paper",
        border: ".5px solid",
        borderTop: "10px solid",
        borderColor: "info.main",
      }}
    >
      <CardHeader
        avatar={
          <Avatar src={avatar} sx={{ bgcolor: red[500] }} aria-label="recipe">
            Q
          </Avatar>
        }
        action={
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "space-between",
              }}
            >
              <Badge
                badgeContent={replaycount}
                color="secondary"
                max={999}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MdOutlineQuickreply color="action" size={25} />
              </Badge>
              <Badge
                badgeContent={likecount}
                color="secondary"
                max={999}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MdBookmarkBorder color="action" size={25} />
              </Badge>
              <Fab color="secondary" size="small" aria-label="edit">
                <EditIcon />
              </Fab>
            </Box>
          </>
        }
        title={
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">{userName}</Typography>
              <Typography variant="caption" sx={{ marginLeft: "15px" }}>
                {createDate}
              </Typography>
            </Box>
          </>
        }
        sx={{ paddingBottom: "5px", paddingTop: "7px" }}
      />
      <Divider />
      <CardContent>
        <Typography variant="body2" color="background.card">
          {faq}
        </Typography>
      </CardContent>
    </Card>
  );
}
