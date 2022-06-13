import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccordionDetails from "@mui/material/AccordionDetails";
import FaqAnswerId from "../faqComponent/FaqAnswerId";
import { pink, blueGrey } from "@mui/material/colors";
import { FcFeedback } from "react-icons/fc";
import { Badge, Divider, Stack, Tooltip, Button, Chip } from "@mui/material";
import { Box } from "@mui/system";
import { CardActionArea } from "@mui/material";
import RateReviewIcon from "@mui/icons-material/RateReview";
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
    width: 15,
    height: 15,
    borderRadius: "10px",
    fontSize: "8px",
    bgcolor: pink[500],
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
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    handleReply(faqid);
  };

  const handleReply = (faqid) => {
    setShowAnswer(true);
  };

  const cardStyle = {
    // minWidth: 700,
    width: "100%",
    border: `3px solid #EAEAE9`,
    // border: `.5px solid ${blueGrey[500]}`,
    borderRadius: "8px",
    marginBottom: "15px",
    // backgroundColor: "palette.primary.main",
    // backgroundColor: "#F5F5F4",
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
        />
        <MainCardImage />
        <MainCardContent Quastion={Quastion} />
        <MainCardAction
          expanded={expanded}
          handleExpandClick={handleExpandClick}
          answerCount={count}
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {showAnswer && (
              <AccordionDetails>
                <FaqAnswerId id={faqid} />
              </AccordionDetails>
            )}
          </CardContent>
        </Collapse>
      </Card>
    </Stack>
  );
}

const MainCardHeader = ({ src, autherName, create_at, faqGroup }) => {
  return (
    <>
      <CardHeader
        avatar={
          <Avatar
            src={src}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        }
        action={
          <>
            <Chip label={faqGroup} variant={"outlined"} color="info" />

            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </>
        }
        title={autherName}
        subheader={new Date(create_at).toDateString()}
      />
    </>
  );
};

const MainCardImage = () => {
  return (
    <>
      <CardMedia
      // component="img"
      // height="194"
      // image="/static/images/cards/paella.jpg"
      // alt="Paella dish"
      />
    </>
  );
};

function MainCardContent({ Quastion }) {
  return (
    <CardContent>
      <Typography sx={{ wordBreak: "break-word" }}>{Quastion}</Typography>
    </CardContent>
  );
}

function MainCardAction({ expanded, handleExpandClick, answerCount }) {
  return (
    <CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem />

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <Divider orientation="vertical" flexItem />
        <Box sx={{ marginLeft: "15px" }}>
          <Tooltip title="Answer's">
            <Badge
              badgeContent={answerCount}
              color="info"
              max={999}
              // sx={{ fontSize: "1rem", height: 10 }}
              sx={badgeStyle}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <FcFeedback color="action" size="1.5em" />
            </Badge>
          </Tooltip>
        </Box>

        <Button
          variant="outlined"
          color="primary"
          sx={{ float: "right", marginLeft: "25px" }}
        >
          <RateReviewIcon />
        </Button>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </CardActionArea>
  );
}

const ShowAnwer = ({ faqwithidData }) => {
  return (
    <>
      <FaqAnswerId> {faqwithidData} </FaqAnswerId>;
    </>
  );
};
