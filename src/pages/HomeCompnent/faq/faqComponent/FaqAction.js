import React from "react";
import { FcFaq } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";

import {
  AccordionActions,
  Badge,
  Chip,
  Divider,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { FcFeedback } from "react-icons/fc";
import { FcBookmark } from "react-icons/fc";
import { FaRegEdit } from "react-icons/fa";
import { Box } from "@mui/system";

function FaqAction({ answerCount, faqid, autherName, create_at }) {
  const FaqIdRoute = useNavigate();
  const faqlabel = " " + faqid;
  const fid = faqid;
  const faqdate = new Date(create_at).toDateString();
  // const faqdate = new Date(create_at).getDate();

  const badgeStyle = {
    "& .MuiBadge-badge": {
      width: 12,
      height: 12,
      borderRadius: "7px",
      fontSize: "8px",
    },
  };
  const chekbtn = (msg) => {};
  const faqHandle = (faqid) => {
    FaqIdRoute("FaqId/" + faqid);
  };
  return (
    <AccordionActions
      sx={{
        justifyContent: "space-between",
      }}
    >
      <Stack sx={{ flexDirection: { xs: "row", md: "row" }, gap: "1px" }}>
        <Chip
          size="small"
          label={faqlabel}
          variant="outlined"
          icon={<FcFaq />}
          onClick={() => {
            faqHandle(fid);
          }}
        />

        <Chip
          size="small"
          label={faqdate}
          variant="outlined"
          icon={<FcCalendar />}
          onClick={faqHandle}
          sx={{ marginLeft: 1 }}
        />
      </Stack>

      <Stack
        sx={{ flexDirection: { xs: "row", md: "row" } }}
        // direction="column"
        spacing={0}
        justifyContent="space-around"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Tooltip title="Answer's">
          <Badge
            badgeContent={answerCount}
            color="secondary"
            max={999}
            // sx={{ fontSize: "1rem", height: 10 }}
            sx={badgeStyle}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <FcFeedback color="action" size="1em" />
          </Badge>
        </Tooltip>
        <Tooltip title="Add To Favroite">
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => {
              chekbtn("favorate");
            }}
          >
            <FcBookmark color="action" size="1em" sx={badgeStyle} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add Answer">
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => {
              chekbtn("Add ans");
            }}
          >
            <FaRegEdit color="red" size="1em" />
          </IconButton>
        </Tooltip>
      </Stack>
    </AccordionActions>
  );
}

export default FaqAction;
