import React from "react";
import { MdOutlineQuickreply } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import FaqAnswerId from "./faqComponent/FaqAnswerId";
import useAxiosToGetData from "../../../helper/custemHook/useAxiosToGetData";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
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
import Loader from "../../../component/loader/Loader";

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
        {isLoading ? <FaqAnswerId id={faqwithid[0].faqid} /> : <Loader />}
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
