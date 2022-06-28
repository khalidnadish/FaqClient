import React, { useState, useContext, useEffect } from "react";
import {
  styled,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Fab,
  Tooltip,
  Badge,
  Divider,
  Stack,
  Button,
  Chip,
  Box,
} from "@mui/material";

import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FaqAnswerId from "../faqComponent/FaqAnswerId";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import RateReviewIcon from "@mui/icons-material/RateReview";

import AnswerDrawer from "./ShowFaqAnswer/AnswerDrawer";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const badgeStyle = {
  "& .MuiBadge-badge": {
    fontSize: "12px",
    bgcolor: "secondary.light",
  },
};

export default function FaqCrads({
  Quastion,
  src,
  count,
  faqid,
  autherName,
  create_at,
  faqGroup,
  rowIndex,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    handleReply(faqid);
  };

  const handleReply = () => {
    setShowAnswer(true);
  };

  const cardStyle = {
    width: "100%",
    border: `.5px solid`,
    borderColor: "primary.light",
    marginBottom: "15px",
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Card sx={cardStyle}>
        <MainCardHeader
          src={src}
          autherName={autherName}
          create_at={create_at}
          faqGroup={faqGroup}
          faqid={faqid}
          rowIndex={rowIndex}
        />
        <MainCardImage />
        <MainCardContent Quastion={Quastion} faqid={faqid} />
        <MainCardAction
          expanded={expanded}
          handleExpandClick={handleExpandClick}
          answerCount={count}
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>{showAnswer && <FaqAnswerId id={faqid} />}</CardContent>
        </Collapse>
      </Card>
    </Stack>
  );
}

const MainCardHeader = ({
  src,
  autherName,
  create_at,
  faqGroup,

  rowIndex,
}) => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <>
      <CardHeader
        avatar={
          <Avatar src={src} sx={{ bgcolor: red[500] }} aria-label="recipe" />
        }
        action={
          <>
            <Chip
              label={faqGroup}
              variant="filled"
              color="warning"
              onClick={() => {
                handleClick();
              }}
              icon={<PersonAddIcon />}
              sx={{ marginRight: 1, fontSize: "sm", opacity: [0.9, 0.8, 0.7] }}
            />
            <Chip
              label={rowIndex + 1}
              variant="filled"
              color="info"
              sx={{ fontSize: "sm", opacity: [0.9, 0.2, 0.2] }}
            />
            <Tooltip title="Add Answer">
              <Fab component="span" color="success" sx={{ marginLeft: "25px" }}>
                <RateReviewIcon />
              </Fab>
            </Tooltip>
            <IconButton aria-label="settings" variant="filled">
              <MoreVertIcon />
            </IconButton>
          </>
        }
        title={
          <>
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Typography>{autherName}</Typography>

              <Button sx={{ marginLeft: "10px" }}>
                <Typography variant="body1">Follow</Typography>
              </Button>
            </Stack>
          </>
        }
        subheader={new Date(create_at).toDateString()}
      />
    </>
  );
};

const MainCardImage = () => {
  return (
    <>
      {/* <CardMedia
      // component="img"
      // height="194"
      // image="/static/images/cards/paella.jpg"
      // alt="Paella dish"
      /> */}
    </>
  );
};

function MainCardContent({ Quastion, faqid }) {
  const [showReplyDrawer, setShowReplyDrawer] = useState(false);
  return (
    <>
      <Tooltip title="click to see Answer's">
        <CardContent
          onClick={() => {
            setShowReplyDrawer(true);
          }}
          sx={{
            cursor: "pointer",

            "&:hover": {
              backgroundColor: "primary.dark",
              color: "white",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Typography sx={{ wordBreak: "break-word" }}>{Quastion}</Typography>
        </CardContent>
      </Tooltip>
      <AnswerDrawer
        open={showReplyDrawer}
        setOpen={setShowReplyDrawer}
        faqid={faqid}
      />
    </>
  );
}

function MainCardAction({ expanded, handleExpandClick, answerCount }) {
  return (
    <>
      <CardActionArea>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" component="span">
            <FavoriteIcon />
          </IconButton>
          <Divider orientation="vertical" flexItem />

          <IconButton aria-label="share" component="span">
            <ShareIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            component="span"
          >
            <Badge
              component="span"
              badgeContent={answerCount}
              color="secondary"
              max={999}
              sx={badgeStyle}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <ExpandMoreIcon />
            </Badge>
          </ExpandMore>
        </CardActions>
      </CardActionArea>
    </>
  );
}
